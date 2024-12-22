import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";

import { BsRecordFill } from "react-icons/bs";
import {
  AiOutlineHome,
  AiOutlineUsergroupAdd,
  AiOutlineDollar,
} from "react-icons/ai";
import { FaMotorcycle } from "react-icons/fa6";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Dashboard = () => {
  const [totalKost, setTotalKost] = useState([]);
  const [totalOjek, setTotalOjek] = useState([]);
  const [totalCustomer, setTotalCustomer] = useState([]);
  const [incomeOjek, setIncomeOjek] = useState([]);

  // Fungsi untuk memformat angka sebagai mata uang IDR
  const formatCurrency = (number) => {
    const num = parseFloat(number);
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(num);
  };

  const earningData = [
    {
      icon: <AiOutlineHome />,
      amount: totalKost,
      title: "Kost",
      iconColor: "rgb(255, 244, 229)",
      iconBg: "#f41f34",
      pcColor: "green-600",
    },
    {
      icon: <FaMotorcycle />,
      amount: totalOjek,
      title: "Ojek",
      iconColor: "rgb(255, 244, 229)",
      iconBg: "rgb(254, 201, 15)",
      pcColor: "green-600",
    },
    {
      icon: <AiOutlineUsergroupAdd />,
      amount: totalCustomer,
      title: "Customers",
      iconColor: "rgb(255, 244, 229)",
      iconBg: "#40e0ef",
      pcColor: "red-600",
    },
    {
      icon: <AiOutlineDollar />,
      amount: formatCurrency(incomeOjek),
      title: "Pendapatan Ojek",
      iconColor: "rgb(255, 244, 229)",
      iconBg: "#e76df9",
      pcColor: "red-600",
    },
  ];

  // Data untuk Bar Chart
  const barChartData = {
    labels: [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ],
    datasets: [
      {
        label: "Revenue",
        data: [20000, 25000, 22000, 30000, 28000, 33000, 25000, 26000, 20000],
        backgroundColor: "#3877f6",
      },
    ],
  };

  const barChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Pendapatan Kost dan Ojek",
      },
    },
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError, user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getTotalKost();
      getTotalOjek();
      getTotalCustomer();
      getOrderOjek();
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const getTotalKost = async () => {
    try {
      const response = await axios.get("https://api-staygo.tonexus.my.id/kost");
      setTotalKost(response.data.length);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getTotalOjek = async () => {
    try {
      const response = await axios.get("https://api-staygo.tonexus.my.id/ojek");
      setTotalOjek(response.data.length);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getTotalCustomer = async () => {
    try {
      const response = await axios.get(
        "https://api-staygo.tonexus.my.id/customers"
      );
      setTotalCustomer(response.data.length);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getOrderOjek = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        "https://api-staygo.tonexus.my.id/order-ojek-admin",
        {
          headers: {
            Authorization: `Bearer ${token}`, // Add token to headers
          },
        }
      );
      const totalIncome = response.data.reduce(
        (sum, order) => sum + order.harga,
        0
      );
      setIncomeOjek(totalIncome);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="mt-5">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className="flex m-3 flex-wrap justify-center gap-4 items-center">
          {earningData.map((item) => (
            <div
              key={item.title}
              className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl shadow-xl border border-grey text-center" // Tambahkan 'shadow-xl' di sini
            >
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl mx-auto"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400 mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Chart Section */}
      <div className="m-9 flex items-center dark:text-gray-200">
        <BsRecordFill className="mr-2" />
        <h1>Grafik Pendapatan Aplikasi StayGo</h1>
      </div>
      <div className="mt-10 flex flex-col lg:flex-row items-center justify-center gap-10">
        {/* Bar Chart */}
        <div className="w-full lg:w-1/2">
          <Bar data={barChartData} options={barChartOptions} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
