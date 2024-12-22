import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";

import { Header } from "../components";

import { FaEdit, FaEye, FaTrash } from "react-icons/fa";

import "./List.css";

const ListCustomer = () => {
  const [customer, setCustomer] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

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
    getCustomer();
  }, [isError, navigate]);

  const getCustomer = async () => {
    try {
      const response = await axios.get(
        "https://api-staygo.tonexus.my.id/customers"
      );
      setCustomer(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleEdit = (id) => {
    console.log("Edit Customer ID:", id);
    // Tambahkan logika untuk navigasi atau buka modal edit
  };

  const handleView = (id) => {
    console.log("View Customer ID:", id);
    // Tambahkan logika untuk navigasi ke halaman detail
  };

  const handleDelete = (id) => {
    console.log("Delete Customer ID:", id);
    // Tambahkan logika untuk konfirmasi hapus
  };

  const handleTambah = () => {
    // Tambahkan logika navigasi ke halaman tambah atau buka modal tambah
    console.log("Tambah Kost Baru");
  };

  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white dark:text-white dark:bg-secondary-dark-bg rounded-3xl border border-gray-300">
      <div className="flex justify-between items-center mb-4">
        <div>
          <Header category="Page" title="Data Customer" />
        </div>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Cari Username..."
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            onChange={(e) => setSearchQuery(e.target.value)} // Update state for search query
          />
          <button
            onClick={handleTambah}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Tambah
          </button>
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
                Username
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider dark:text-white dark:bg-secondary-dark-bg">
                Email
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider dark:text-white dark:bg-secondary-dark-bg">
                No HP
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider dark:text-white dark:bg-secondary-dark-bg">
                Alamat
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider dark:text-white dark:bg-secondary-dark-bg">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {customer
              .filter((item) =>
                item.username.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((customer, index) => (
                <tr key={customer.id}>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm dark:text-white dark:bg-secondary-dark-bg">
                    {index + 1}
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm dark:text-white dark:bg-secondary-dark-bg">
                    {customer.username}
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm dark:text-white dark:bg-secondary-dark-bg">
                    {customer.email}
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm dark:text-white dark:bg-secondary-dark-bg">
                    {customer.noHp}
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm dark:text-white dark:bg-secondary-dark-bg">
                    {customer.alamat}
                  </td>

                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm dark:text-white dark:bg-secondary-dark-bg">
                    <div className="flex items-center space-x-2">
                      <button
                        type="button"
                        className="text-blue-500 hover:text-blue-700"
                        onClick={() => handleEdit(customer.id)}
                      >
                        <FaEdit />
                      </button>
                      <button
                        type="button"
                        className="text-green-500 hover:text-green-700"
                        onClick={() => handleView(customer.id)}
                      >
                        <FaEye />
                      </button>
                      <button
                        type="button"
                        className="text-red-500 hover:text-red-700"
                        onClick={() => handleDelete(customer.id)}
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

export default ListCustomer;
