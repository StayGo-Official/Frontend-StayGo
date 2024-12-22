import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "../features/authSlice";

const ViewOjek = () => {
  const [nama, setNama] = useState("");
  const [alamat, setAlamat] = useState("");
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
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
    }, []);

  useEffect(() => {
    getOjekById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getOjekById = async () => {
    const response = await axios.get(`https://api-staygo.tonexus.my.id/ojek/${id}`);
    setNama(response.data.nama);
    setAlamat(response.data.alamat);
    setStatus(response.data.status);
    setGender(response.data.gender);
    setImages(response.data.url); // Mengambil URL gambar
    setActiveImage(response.data.url[0]);
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
            <span className=" text-violet-600 font-semibold">Nama Ojek</span>
            <p className="text-gray-700 dark:text-white">{nama}</p>
          </div>
          <div>
            <span className=" text-violet-600 font-semibold">Tersedia ?</span>
            <p className="text-gray-700 dark:text-white">{status === true ? "Iya" : "Tidak"}</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Gender */}
            <div className="flex flex-col">
              <span className="text-violet-600 font-semibold">Untuk</span>
              <p className="text-gray-700 dark:text-white">{gender}</p>
            </div>
          </div>

          <div>
            <span className="text-violet-600 font-semibold">Alamat</span>
            <p className="text-gray-700 dark:text-white">{alamat}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewOjek;
