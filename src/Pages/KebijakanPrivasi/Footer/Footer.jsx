/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import FooterImg from "../../../assets/footer.jpg";
import IconImg from "../../../assets/Logo1.png";

const FooterBg = {
  backgroundImage: `url(${FooterImg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "bottom center",
};

const Footer = () => {
  return (
    <div style={FooterBg} className="rounded-t-3xl" id="about">
      <div className="bg-primary/5">
        <div className="container">
          <div className="grid md:grid-rows-1 md:gap-4 py-5 border-t-2 border-gray-300/10 text-black">
            {/* brand info section */}
            <div className="py-8 px-4 space-y-4" id="contact">
              <div className="text-2xl flex items-center gap-2 font-bold uppercase">
                <img src={IconImg} style={{ width: "40px"}} />
                <p className="">StayGo</p>
              </div>
              <p>
              StayGo adalah platform yang menyediakan layanan pencarian kamar kost dan ojek online dengan mudah. Kami hadir untuk membantu kebutuhan Anda, mulai dari menemukan tempat tinggal yang nyaman hingga transportasi yang praktis di sekitar Lhokseumawe.
              </p>
              <div className="flex items-center justify-start gap-5 !mt-6">
                <a href="#" className="hover:text-secondary duration-200">
                  <HiLocationMarker className="text-3xl" />
                </a>
                <a href="#" className="hover:text-secondary duration-200">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#" className="hover:text-secondary duration-200">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="#" className="hover:text-secondary duration-200">
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
            </div>
          </div>
          {/* copyright section  */}
          <div className="mt-8">
            <div className="text-center py-6 border-t-2 border-gray-800/10">
              <span className="text-sm text-black/60">
                {" "}
                @copyright 2024 All rights reserved by StayGo
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
