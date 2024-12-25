import React, { useState } from "react";
import HeroImg from "../../../assets/heroimg.jpg";
import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";
import { SlideRight } from "../../../utility/animation";

const Hero = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[630px] relative">
        {/* brand info */}
        <div className="flex flex-col justify-center py-14 md:pr-16 xl:pr-40 md:py-0">
          <div className="text-center md:text-left space-y-6">
            <motion.p
              variants={SlideRight(0.4)}
              initial="hidden"
              animate="visible"
              className="text-orange-600 uppercase font-semibold"
            >
              Kemudahan di Genggaman Anda
            </motion.p>
            <motion.h1
              variants={SlideRight(0.6)}
              initial="hidden"
              animate="visible"
              className="text-5xl font-semibold lg:text-6xl !leading-tight"
            >
              Aplikasi <span className="text-primary">Sewa Kost</span> dan 
              <span className="text-primary"> Jasa Ojek Online</span> Terpercaya
            </motion.h1>
            <motion.p
              variants={SlideRight(0.8)}
              initial="hidden"
              animate="visible"
            >
              StayGo memudahkan Anda mencari kamar kost yang nyaman dan memesan ojek online 
              dengan cepat, aman, dan praktis. Solusi lengkap untuk mobilitas Anda.
            </motion.p>
            {/* button section */}
            <motion.div
              variants={SlideRight(1.0)}
              initial="hidden"
              animate="visible"
              className="flex gap-8 justify-center md:justify-start !mt-8 items-center"
            >
              <a href="http://api-staygo.tonexus.my.id/application/staygo.apk" className="primary-btn">Coba Sekarang</a>
              <button className="flex justify-end items-center gap-2 font-semibold" onClick={() => setIsVideoOpen(true)}>
                <span className="w-10 h-10 bg-secondary/15 rounded-full flex justify-center items-center">
                  <FaPlay className="text-secondary" />
                </span>
                Panduan Penggunaan Aplikasi
              </button>
            </motion.div>
          </div>
        </div>
        {/* Hero image */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            src={HeroImg}
            alt=""
            className="w-[350px] md:w-[550px] xl:w-[700px]"
          />
        </div>
      </div>
      {/* Fullscreen Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center">
          <div className="relative w-full max-w-4xl aspect-video">
            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-white text-3xl"
              onClick={() => setIsVideoOpen(false)} // Close video on click
            >
              ✕
            </button>
            {/* Embed YouTube video */}
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/CJrH9Cq5yp0?si=bXLuJrOUb_kyDDcS"
              title="Panduan Penggunaan Aplikasi"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
