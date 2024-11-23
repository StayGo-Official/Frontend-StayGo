import React from 'react'
import { FaHome, FaMotorcycle, FaRegMoneyBillAlt, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";
import { SlideLeft } from "../../../utility/animation.js";

const WhyChooseData = [
    {
        id: 1,
        title: "Pencarian Kost Mudah",
        desc: "Dengan stayGo, temukan kost yang sesuai kebutuhan Anda dengan cepat dan praktis.",
        icon: <FaHome />,
        bgColor: "#0063ff",
        delay: 0.3,
      },
      {
        id: 2,
        title: "Layanan Ojek Online",
        desc: "Kami menyediakan transportasi cepat dan terpercaya untuk kebutuhan harian Anda.",
        icon: <FaMotorcycle />,
        bgColor: "#73bc00",
        delay: 0.6,
      },
      {
        id: 3,
        title: "Harga Terjangkau",
        desc: "Nikmati layanan berkualitas dengan harga yang bersahabat untuk semua kalangan.",
        icon: <FaRegMoneyBillAlt />,
        bgColor: "#fa6400",
        delay: 0.9,
      },
      {
        id: 4,
        title: "Tersedia 24/7",
        desc: "Layanan kami tersedia kapan saja untuk membantu Anda tanpa batas waktu.",
        icon: <FaClock />,
        bgColor: "#fe6baa",
        delay: 1.2,
      },
  ];

const WhyChooseUs = () => {
  return (
    <div className="bg-[#f9fafc]" id='produk'>
      <div className="container py-24">
        {/* header section */}
        <div className="space-y-4 p-6 text-center max-w-[500px] mx-auto mb-5">
          <h1 className="uppercase font-semibold text-orange-600">
            Kenapa Memilih Kita
          </h1>
          <p className="font-semibold text-3xl">
            Keunggulan menggunakan layanan stayGo
          </p>
        </div>
        {/* cards section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {WhyChooseData.map((item) => {
            return (
              <motion.div
                variants={SlideLeft(item.delay)}
                initial="hidden"
                whileInView={"visible"}
                className="space-y-4 p-6 rounded-xl shadow-[0_0_22px_rgba(0,0,0,0.15)]"
              >
                {/* icon section */}
                <div
                  style={{ backgroundColor: item.bgColor }}
                  className="w-10 h-10 rounded-lg flex justify-center items-center text-white"
                >
                  <div className="text-2xl">{item.icon}</div>
                </div>
                <p className="font-semibold">{item.title}</p>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUs
