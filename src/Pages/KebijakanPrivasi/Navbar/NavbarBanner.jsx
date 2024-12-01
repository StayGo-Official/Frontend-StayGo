import React from "react";
import { motion } from "framer-motion";

const NavbarBanner = () => {
  const [isOpen, setIsOpen] = React.useState(true);
  return (
    isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-sm text-center font-semibold text-gray-50 p-1 hidden lg:block relative"
        style={{ backgroundColor: "#032b2f" }}
      >
        Apakah Anda mencari kamar kost yang nyaman atau membutuhkan layanan ojek online yang cepat?
        <a href="#" className="text-primary ml-2">
        Mulai dengan StayGo
        </a>
        <div
          className="absolute top-1/2 right-10 cursor-pointer -translate-y-1/2"
          onClick={() => setIsOpen(false)}
        >
          X
        </div>
      </motion.div>
    )
  );
};

export default NavbarBanner;
