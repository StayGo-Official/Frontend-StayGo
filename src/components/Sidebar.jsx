import React from "react";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineCancel } from "react-icons/md";
import { AiOutlineHome, AiOutlineStock } from "react-icons/ai";
import { FiPieChart } from "react-icons/fi";
import { BsPeople } from "react-icons/bs";
import { BiSolidDashboard } from "react-icons/bi";
import { FaMotorcycle } from "react-icons/fa6";
import { CgPassword } from "react-icons/cg";

import LogoSMA from "../assets/Logo1.png";

import { useStateContext } from "../contexts/ContextProvider";

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize, currentColor } =
    useStateContext();

  const links = [
    {
      title: "Dashboard",
      links: [
        {
          name: "dashboard",
          icon: <BiSolidDashboard />,
        },
      ],
    },

    {
      title: "Pages",
      links: [
        {
          name: "kost",
          icon: <AiOutlineHome />,
        },
        {
          name: "ojek",
          icon: <FaMotorcycle />,
        },
      ],
    },
    {
      title: "Charts",
      links: [
        {
          name: "line",
          icon: <AiOutlineStock />,
        },
        {
          name: "pie",
          icon: <FiPieChart />,
        },
      ],
    },
    {
      title: "Setting",
      links: [
        {
          name: "Customers",
          icon: <BsPeople />,
        },
        {
          name: "ganti password",
          icon: <CgPassword />,
        },
        {
          name: "users",
          icon: <BsPeople />,
        },
      ],
    },
  ];

  const handleCloseSideBar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/dashboard"
              onClick={handleCloseSideBar}
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
            >
              <img
                src={LogoSMA}
                alt="Logo SMA 1 Lhokseumawe"
                style={{ width: "35px" }}
              />{" "}
              <span>Admin StayGo</span>
            </Link>
            <button
              type="button"
              onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
              className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
            >
              <MdOutlineCancel />
            </button>
          </div>
          <div className="mt-10">
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 m-3 mt-4 uppercase">{item.title}</p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    onClick={handleCloseSideBar}
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? currentColor : "",
                    })}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    {link.icon}
                    <span className="capitalize">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
