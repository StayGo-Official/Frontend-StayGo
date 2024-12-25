import React from "react";
import LogoSMA from "../../../assets/Logo1.png";
import { MdMenu, MdClose } from "react-icons/md"; // Import close icon
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false); // State to toggle mobile menu
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/login"); // Navigate to the "/login" page
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="container flex justify-between items-center py-6">
          {/* Logo section */}
          <div className="text-2xl flex items-center gap-2 font-bold">
            <img
              src={LogoSMA}
              alt="SMA 1 Lhokseumawe"
              style={{ width: "60px" }}
            />
            <p>StayGo</p>
          </div>

          {/* Menu section for desktop */}
          <div className="hidden lg:block">
            <ul className="flex items-center gap-6">
              <li>
                <a
                  href="/"
                  className="inline-block text-gray-600 text-sm xl:text-base py-1 px-2 xl:px-3 hover:text-secondary transition-all duration-300 font-semibold"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="inline-block text-gray-600 text-sm xl:text-base py-1 px-2 xl:px-3 hover:text-secondary transition-all duration-300 font-semibold"
                >
                  Produk
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="inline-block text-gray-600 text-sm xl:text-base py-1 px-2 xl:px-3 hover:text-secondary transition-all duration-300 font-semibold"
                >
                  About us
                </a>
              </li>
              
              <li>
                <a
                  href="/"
                  className="inline-block text-gray-600 text-sm xl:text-base py-1 px-2 xl:px-3 hover:text-secondary transition-all duration-300 font-semibold"
                >
                  Contact us
                </a>
              </li>

              <li>
                <a
                  href="/kebijakan-privasi"
                  className="inline-block text-gray-600 text-sm xl:text-base py-1 px-2 xl:px-3 hover:text-secondary transition-all duration-300 font-semibold"
                >
                  Kebijakan Privasi
                </a>
              </li>

              <li>
                <a
                  href="/syarat-dan-ketentuan"
                  className="inline-block text-gray-600 text-sm xl:text-base py-1 px-2 xl:px-3 hover:text-secondary transition-all duration-300 font-semibold"
                >
                  Syarat Ketentuan
                </a>
              </li>
            </ul>
          </div>

          {/* CTA Button section */}
          <div className="hidden lg:block space-x-6">
            <button
              className="text-white bg-secondary font-semibold rounded-full px-6 py-2"
              onClick={handleSignIn}
            >
              Sign In
            </button>
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="lg:hidden z-50" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <MdClose className="text-4xl" /> // Close icon when menu is open
            ) : (
              <MdMenu className="text-4xl" />
            )}
          </div>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          className="fixed top-0 left-0 w-3/4 h-full bg-white shadow-md z-40 p-6 lg:hidden"
        >
          <ul className="flex flex-col items-start gap-6">
            <li>
              <a
                href="/"
                className="block text-gray-600 text-lg font-semibold hover:text-secondary"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#produk"
                className="block text-gray-600 text-lg font-semibold hover:text-secondary"
                onClick={() => setIsOpen(false)}
              >
                Produk
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block text-gray-600 text-lg font-semibold hover:text-secondary"
                onClick={() => setIsOpen(false)}
              >
                About us
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block text-gray-600 text-lg font-semibold hover:text-secondary"
                onClick={() => setIsOpen(false)}
              >
                Contact us
              </a>
            </li>
            <li>
              <button
                className="text-white bg-secondary font-semibold rounded-full px-6 py-2"
                onClick={() => {
                  setIsOpen(false);
                  handleSignIn();
                }}
              >
                Sign In
              </button>
            </li>
          </ul>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
