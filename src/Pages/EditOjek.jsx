import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getMe } from "../features/authSlice";

import { Header } from "../components";

const EditOjek = () => {
  const [nama, setNama] = useState("");
  const [namaLengkap, setNamaLengkap] = useState("");
  const [alamat, setAlamat] = useState("");
  const [noHp, setNoHp] = useState("");
  const [status, setStatus] = useState("");
  const [isRide, setIsRide] = useState("");
  const [isFood, setIsFood] = useState("");
  const [gender, setGender] = useState("");
  const [files, setFiles] = useState([]);
  const [removedImages, setRemovedImages] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getOjekById();
    } else {
      navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getOjekById = async () => {
    const response = await axios.get(
      `https://api-staygo.tonexus.my.id/ojek/${id}`
    );
    setNama(response.data.nama);
    setNamaLengkap(response.data.namaLengkap);
    setAlamat(response.data.alamat);
    setNoHp(response.data.noHp);
    setStatus(response.data.status);
    setIsRide(response.data.isRide);
    setIsFood(response.data.isFood);
    setGender(response.data.gender);

    const existingImages = response.data.url.map((imageUrl) => ({
      preview: imageUrl, // URL gambar yang ada
      file: null, // file untuk yang sudah ada, tidak perlu diproses
    }));
    setFiles(existingImages);
  };

  const updateOjek = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("nama", nama);
    formData.append("namaLengkap", namaLengkap);
    formData.append("alamat", alamat);
    formData.append("noHp", noHp);
    formData.append("status", status);
    formData.append("isRide", isRide);
    formData.append("isFood", isFood);
    formData.append("gender", gender);

    files.forEach((file) => {
      if (file.file) {
        formData.append("files", file.file);
      }
    });

    formData.append("removedImages", JSON.stringify(removedImages));

    try {
      const token = localStorage.getItem("token");
      await axios.patch(
        `https://api-staygo.tonexus.my.id/ojek/${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      navigate("/ojek");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white dark:text-white dark:bg-secondary-dark-bg rounded-3xl border border-gray-300">
      <div className="">
        <Header category="Page" title="Edit Ojek" />
        <form onSubmit={updateOjek} className="md:grid-cols-2 gap-5">
          {/* Form Input - Kiri */}
          <div className="space-y-4">
            <div>
              <label className="block mb-1 font-semibold">Nama Ojek</label>
              <input
                type="text"
                name="namaOjek"
                required
                className="w-full p-2 border rounded dark:text-white dark:bg-secondary-dark-bg"
                placeholder="Masukkan nama Ojek"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold">Nama Lengkap</label>
              <input
                type="text"
                name="namaLengkap"
                required
                className="w-full p-2 border rounded dark:text-white dark:bg-secondary-dark-bg"
                placeholder="Masukkan nama Ojek"
                value={namaLengkap}
                onChange={(e) => setNamaLengkap(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold">Alamat</label>
              <textarea
                name="alamat"
                required
                className="w-full p-2 border rounded dark:text-white dark:bg-secondary-dark-bg"
                placeholder="Masukkan alamat Ojek"
                value={alamat}
                onChange={(e) => setAlamat(e.target.value)}
              ></textarea>
            </div>
            <div>
              <label className="block mb-1 font-semibold">No HP</label>
              <input
                type="number"
                name="noHp"
                required
                className="w-full p-2 border rounded dark:text-white dark:bg-secondary-dark-bg"
                placeholder="Masukkan no Handphone"
                value={noHp}
                onChange={(e) => setNoHp(e.target.value)}
              />
            </div>
            <div className="space-y-4">
              <div className="flex space-x-4 items-center">
                <div className="flex-grow">
                  <label className="block mb-2 font-semibold">Status</label>
                  <select
                    type="number"
                    name="hargaPerbulan"
                    required
                    className="w-full p-2 border rounded dark:text-white dark:bg-secondary-dark-bg"
                    onChange={(e) => setStatus(e.target.value)}
                    value={status}
                  >
                    <option value={null}>Pilih Status</option>
                    <option value={true}>Tersedia</option>
                    <option value={false}>Tidak Tersedia</option>
                  </select>
                </div>
                <div className="flex-grow">
                  <label className="block mb-2 font-semibold">Gender</label>
                  <div className="flex items-center space-x-4">
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="Gender"
                        value="Laki-Laki"
                        required
                        className="dark:bg-secondary-dark-bg"
                        checked={gender === "Laki-Laki"}
                        onChange={(e) => setGender(e.target.value)}
                      />
                      <span>Laki-Laki</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="Gender"
                        value="Perempuan"
                        required
                        className="dark:bg-secondary-dark-bg"
                        checked={gender === "Perempuan"}
                        onChange={(e) => setGender(e.target.value)}
                      />
                      <span>Perempuan</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex space-x-4 items-center">
                <div className="flex-grow">
                  <label className="block mb-2 font-semibold">Ride</label>
                  <select
                    name="ride"
                    required
                    className="w-full p-2 border rounded dark:text-white dark:bg-secondary-dark-bg"
                    onChange={(e) => {
                      setIsRide(JSON.parse(e.target.value));
                    }}
                    value={isRide}
                  >
                    <option value={null}>Pilih</option>
                    <option value={true}>Iya</option>
                    <option value={false}>Tidak</option>
                  </select>
                </div>
                <div className="flex-grow">
                  <label className="block mb-2 font-semibold">Food</label>
                  <select
                    name="food"
                    required
                    className="w-full p-2 border rounded dark:text-white dark:bg-secondary-dark-bg"
                    onChange={(e) => {
                      setIsFood(JSON.parse(e.target.value));
                    }}
                    value={isFood}
                  >
                    <option value={null}>Pilih</option>
                    <option value={true}>Iya</option>
                    <option value={false}>Tidak</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="col-span-2 flex justify-end space-x-3 mt-5">
            <button
              type="button"
              className="px-6 py-2 text-gray-600 bg-gray-100 rounded hover:bg-gray-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditOjek;
