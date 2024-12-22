import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";

import { Header } from "../components";

import { FaEdit, FaEye, FaTrash } from "react-icons/fa";

import "./List.css";

const ListOrderOjek = () => {
  const [orderOjek, setOrderOjek] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getOrderOjek();
    } else {
      navigate("/login");
    }
  }, [navigate]);

  useEffect(() => {
    getOrderOjek();
  }, []);

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
      setOrderOjek(response.data);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        // Handle unauthorized error - redirect to login
        navigate("/login");
      }
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white dark:text-white dark:bg-secondary-dark-bg rounded-3xl border border-gray-300">
      <div className="flex justify-between items-center mb-4">
        <div>
          <Header category="Page" title="Data Order Ojek" />
        </div>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Cari Nama..."
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300 dark:text-white dark:bg-secondary-dark-bg"
            onChange={(e) => setSearchQuery(e.target.value)} // Update state for search query
          />
        </div>
      </div>
      <div className="table-container">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th className="border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase dark:text-white dark:bg-secondary-dark-bg">
                No
              </th>
              <th className="border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase dark:text-white dark:bg-secondary-dark-bg">
                Nama Customer
              </th>
              <th className="border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase dark:text-white dark:bg-secondary-dark-bg">
                Nama Ojek
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider dark:text-white dark:bg-secondary-dark-bg">
                Harga
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider dark:text-white dark:bg-secondary-dark-bg">
                Status
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider dark:text-white dark:bg-secondary-dark-bg">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {orderOjek
              .filter((item) =>
                item.customer.nama
                  .toLowerCase()
                  .includes(searchQuery.toLowerCase())
              )
              .map((orderOjek, index) => (
                <tr key={orderOjek.id}>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm dark:text-white dark:bg-secondary-dark-bg">
                    {index + 1}
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm dark:text-white dark:bg-secondary-dark-bg">
                    {orderOjek.customer.nama}
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm dark:text-white dark:bg-secondary-dark-bg">
                    {orderOjek.ojek.nama}
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm dark:text-white dark:bg-secondary-dark-bg">
                    {orderOjek.harga}
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm dark:text-white dark:bg-secondary-dark-bg">
                    {orderOjek.status}
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm dark:text-white dark:bg-secondary-dark-bg">
                    <div className="flex items-center space-x-2">
                      <button
                        type="button"
                        className="text-blue-500 hover:text-blue-700"
                      >
                        <FaEdit />
                      </button>
                      <button
                        type="button"
                        className="text-green-500 hover:text-green-700"
                      >
                        <FaEye />
                      </button>
                      <button
                        type="button"
                        className="text-red-500 hover:text-red-700"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListOrderOjek;
