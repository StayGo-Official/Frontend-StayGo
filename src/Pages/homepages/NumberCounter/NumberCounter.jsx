import React, { useEffect, useState } from "react";
import axios from "axios";
import CountUp from "react-countup";

const NumberCounter = () => {
  const [totalKost, setTotalKost] = useState([]);
  const [totalOjek, setTotalOjek] = useState([]);
  const [totalCustomer, setTotalCustomer] = useState([]);

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

  useEffect(() => {
    getTotalKost();
    getTotalOjek();
    getTotalCustomer();
  }, []);

  return (
    <div className="bg-secondary text-white py-12 flex justify-center items-center">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="flex flex-col items-center justify-center">
          <p className="text-3xl font-semibold">
            <CountUp
              start={0}
              end={totalKost}
              duration={3}
              enableScrollSpy={true}
              scrollSpyOnce={true}
            />
          </p>
          <p className="pt-1.5">Kost</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-3xl font-semibold">
            <CountUp
              end={totalOjek}
              separator=","
              duration={3}
              enableScrollSpy={true}
              scrollSpyOnce={true}
            />
          </p>
          <p className="pt-1.5">Ojek</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-3xl font-semibold">
            <CountUp
              end={totalCustomer}
              duration={3}
              enableScrollSpy={true}
              scrollSpyOnce={true}
            />
          </p>
          <p className="pt-1.5">Users</p>
        </div>
      </div>
    </div>
  );
};

export default NumberCounter;
