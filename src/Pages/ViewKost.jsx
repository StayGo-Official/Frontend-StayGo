import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "../features/authSlice";

const ViewKost = () => {
  const [namaKost, setNamaKost] = useState("");
  const [alamat, setAlamat] = useState("");
  const [hargaPerbulan, setHargaPerbulan] = useState("");
  const [hargaPertahun, setHargaPertahun] = useState("");
  const [tersedia, setTersedia] = useState("");
  const [gender, setGender] = useState("");
  const [fasilitas, setFasilitas] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [images, setImages] = useState([]);
  const [activeImg, setActiveImage] = useState("");
  const { id } = useParams();

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
  }, [isError, navigate]);

  useEffect(() => {
    getKostById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getKostById = async () => {
    const response = await axios.get(`http://localhost:5000/kost/${id}`);
    setNamaKost(response.data.namaKost);
    setAlamat(response.data.alamat);
    setHargaPerbulan(response.data.hargaPerbulan);
    setHargaPertahun(response.data.hargaPertahun);
    setTersedia(response.data.tersedia);
    setGender(response.data.gender);
    setFasilitas(response.data.fasilitas);
    setDeskripsi(response.data.deskripsi);
    setLatitude(response.data.latitude);
    setLongitude(response.data.longitude);
    setImages(response.data.url);  // Mengambil URL gambar
    setActiveImage(response.data.url[0]);
  };

  const formatCurrency = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(number);
  };

  return (
    <div className="px-4 lg:px-10 mt-10">
      <div className="flex flex-col justify-between lg:flex-row gap-16">
        <div className="flex flex-col gap-6 w-1/3">
        <img
            src={activeImg}
            alt="Gambar Kost"
            className="w-full aspect-square object-cover rounded-xl"
          />
          <div className="flex flex-row justify-between h-24">
            {images.map((imgUrl, index) => (
              <img
                key={index}
                src={imgUrl}
                alt={`Thumbnail ${index + 1}`}
                className="w-24 h-24 rounded-md cursor-pointer"
                onClick={() => setActiveImage(imgUrl)}
              />
            ))}
          </div>

        </div>
        {/* ABOUT */}
        <div className="flex flex-col gap-4 lg:w-1/2">
          <div>
            <span className=" text-violet-600 font-semibold">Kamar Kost</span>
            <h1 className="text-3xl font-bold">{namaKost}</h1>
          </div>
          <p className="text-gray-700">{deskripsi}</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Biaya Perbulan */}
            <div className="flex flex-col">
              <span className="font-bold text-gray-800">Biaya Perbulan:</span>
              <span
                className={`${
                  hargaPerbulan === 0 || !hargaPerbulan
                    ? "font-normal text-sm text-red-600"
                    : "font-semibold text-2xl text-gray-900"
                }`}
              >
                {hargaPerbulan === 0 ||
                hargaPerbulan === null ||
                hargaPerbulan === undefined
                  ? "Tidak Ada"
                  : formatCurrency(hargaPerbulan)}
              </span>
            </div>

            {/* Biaya Pertahun */}
            <div className="flex flex-col">
              <span className="font-bold text-gray-800">Biaya Pertahun:</span>
              <span className="font-semibold text-2xl text-gray-900">
                {formatCurrency(hargaPertahun)}
              </span>
            </div>

            {/* Sisa Kamar */}
            <div className="flex flex-col">
              <span className="text-violet-600 font-semibold">Sisa Kamar:</span>
              <span
                className={`${
                  tersedia === 0 || !tersedia
                    ? "font-normal text-sm text-red-600"
                    : "font-semibold text-2xl text-gray-900"
                }`}
              >
                {tersedia === 0 || tersedia === null || tersedia === undefined
                  ? "0"
                  : `${tersedia} kamar`}
              </span>
            </div>

            {/* Gender */}
            <div className="flex flex-col">
              <span className="text-violet-600 font-semibold">Untuk:</span>
              <span className="font-semibold text-2xl text-gray-900">
                {gender}
              </span>
            </div>
          </div>

          {/* Fasilitas */}
          <div>
            <span className="text-violet-600 font-semibold">Fasilitas</span>
            <div className="flex flex-wrap gap-2 mt-2">
              {Array.isArray(fasilitas) && fasilitas.length > 0 ? (
                fasilitas.map((item, index) => (
                  <span
                    key={index}
                    className="bg-violet-600 text-white text-sm font-medium px-3 py-1 rounded-lg"
                  >
                    {item}
                  </span>
                ))
              ) : (
                <span className="text-gray-600">Fasilitas tidak tersedia</span>
              )}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold">Lokasi</h2>
            <p className="text-gray-700">{alamat}</p>
            <iframe
              src={`https://www.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`}
              width="100%"
              height="400px"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Lokasi Kost"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewKost;
