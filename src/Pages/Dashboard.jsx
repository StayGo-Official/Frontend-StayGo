import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";

import { BsRecordFill } from "react-icons/bs";
import { AiOutlineHome, AiOutlineUsergroupAdd, AiOutlineDollar } from "react-icons/ai";
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
  const earningData = [
    {
      icon: <AiOutlineHome />,
      amount: "13",
      title: "Kost",
      iconColor: "rgb(255, 244, 229)",
      iconBg: "#f41f34",
      pcColor: "green-600",
    },
    {
        icon: <FaMotorcycle />,
        amount: "13",
        title: "Ojek",
        iconColor: "rgb(255, 244, 229)",
        iconBg: "rgb(254, 201, 15)",
        pcColor: "green-600",
      },
    {
        icon: <AiOutlineUsergroupAdd />,
        amount: "3",
        title: "Customers",
        iconColor: "rgb(255, 244, 229)",
        iconBg: "#40e0ef",
        pcColor: "red-600",
      },
    {
      icon: <AiOutlineDollar />,
      amount: "330000",
      title: "Pendapatan Ojek",
      iconColor: "rgb(255, 244, 229)",
      iconBg: "#e76df9",
      pcColor: "red-600",
    },
    {
      icon: <AiOutlineDollar />,
      amount: "300000",
      title: "Pendapatan Kost",
      iconColor: "rgb(255, 244, 229)",
      iconBg: "#47ef9b",
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
  const { isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/login");
    }
  }, [isError, navigate]);

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
