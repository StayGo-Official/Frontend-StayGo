import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";

import { Header } from "../components";

import { FaEdit, FaEye, FaTrash } from "react-icons/fa";

import "./List.css";

const ListKost = () => {
  const [kost, setKost] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  // useEffect(() => {
  //   if (isError) {
  //     navigate("/login");
  //   }
  // }, [isError, navigate]);

  useEffect(() => {
    getKost();
  }, []);

  const getKost = async () => {
    try {
      const response = await axios.get("https://api-staygo.tonexus.my.id/kost");
      setKost(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleEdit = (id) => {
    navigate(`/edit-kost/${id}`);
  };

  const handleView = (id) => {
    navigate(`/kost/${id}`);
  };

  const handleDeleteKost = async (userId) => {
    const token = localStorage.getItem("token");
    await axios.delete(`https://api-staygo.tonexus.my.id/kost/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    getKost();
  };

  const handleTambah = () => {
    // Tambahkan logika navigasi ke halaman tambah atau buka modal tambah
    navigate("/add-kost");
  };

  const formatCurrency = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(number);
  };

  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white dark:text-white dark:bg-secondary-dark-bg rounded-3xl border border-gray-300">
      <div className="flex justify-between items-center mb-4">
        <div>
          <Header category="Page" title="Data Kost" />
        </div>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Cari Nama..."
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300 dark:text-white dark:bg-secondary-dark-bg"
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
                Nama
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider dark:text-white dark:bg-secondary-dark-bg">
                Alamat
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider dark:text-white dark:bg-secondary-dark-bg">
                Harga/Bulan
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider dark:text-white dark:bg-secondary-dark-bg">
                Harga/Tahun
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider dark:text-white dark:bg-secondary-dark-bg">
                Tersedia
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider dark:text-white dark:bg-secondary-dark-bg">
                Untuk
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider dark:text-white dark:bg-secondary-dark-bg">
                Fasilitas
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider dark:text-white dark:bg-secondary-dark-bg">
                Deskripsi
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider dark:text-white dark:bg-secondary-dark-bg">
                Lokasi
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider dark:text-white dark:bg-secondary-dark-bg">
                Image
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider dark:text-white dark:bg-secondary-dark-bg">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {kost
              .filter((item) =>
                item.namaKost.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((kost, index) => (
                <tr key={kost.id}>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm dark:text-white dark:bg-secondary-dark-bg">
                    {index + 1}
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm dark:text-white dark:bg-secondary-dark-bg">
                    {kost.namaKost}
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm dark:text-white dark:bg-secondary-dark-bg">
                    <div className="truncate">{kost.alamat}</div>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm dark:text-white dark:bg-secondary-dark-bg">
                    {formatCurrency(kost.hargaPerbulan)}
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm dark:text-white dark:bg-secondary-dark-bg">
                    {formatCurrency(kost.hargaPertahun)}
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm dark:text-white dark:bg-secondary-dark-bg">
                    {kost.tersedia}
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm dark:text-white dark:bg-secondary-dark-bg">
                    {kost.gender}
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm dark:text-white dark:bg-secondary-dark-bg">
                    {kost.fasilitas?.join(", ")}
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm dark:text-white dark:bg-secondary-dark-bg">
                    <div className="truncate">{kost.deskripsi}</div>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm dark:text-white dark:bg-secondary-dark-bg">
                    {kost.latitude && kost.longitude ? (
                      <a
                        href={`https://www.google.com/maps?q=${kost.latitude},${kost.longitude}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        Lihat Lokasi
                      </a>
                    ) : (
                      "Lokasi Tidak Tersedia"
                    )}
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm dark:text-white dark:bg-secondary-dark-bg">
                    {kost.url && Array.isArray(kost.url)
                      ? kost.url.map((imageUrl, index) => (
                          <a
                            key={index}
                            href={imageUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                          >
                            <img
                              src={imageUrl}
                              alt={`Kost ${kost.namaKost} ${index + 1}`}
                              width="50"
                              className="image-spacing rounded-md"
                            />
                          </a>
                        ))
                      : "Gambar Tidak Tersedia"}
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm dark:text-white dark:bg-secondary-dark-bg">
                    <div className="flex items-center space-x-2">
                      <button
                        type="button"
                        className="text-blue-500 hover:text-blue-700"
                        onClick={() => handleEdit(kost.id)}
                      >
                        <FaEdit />
                      </button>
                      <button
                        type="button"
                        className="text-green-500 hover:text-green-700"
                        onClick={() => handleView(kost.id)}
                      >
                        <FaEye />
                      </button>
                      <button
                        type="button"
                        className="text-red-500 hover:text-red-700"
                        onClick={() => handleDeleteKost(kost.id)}
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

export default ListKost;
