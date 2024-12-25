import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "../features/authSlice";

import { Header } from "../components";

const AddOjek = () => {
  const [nama, setNama] = useState("");
  const [namaLengkap, setNamaLengkap] = useState("");
  const [alamat, setAlamat] = useState("");
  const [noHp, setNoHp] = useState("");
  const [status, setStatus] = useState("");
  const [isRide, setIsRide] = useState("");
  const [isFood, setIsFood] = useState("");
  const [gender, setGender] = useState("");
  const [files, setFiles] = useState([]);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { isError } = useSelector((state) => state.auth);
  
    useEffect(() => {
      dispatch(getMe());
    }, [dispatch]);
  
    useEffect(() => {
      if (isError) {
        navigate("/login");
      }
    }, []);

  const saveOjek = async (e) => {
    e.preventDefault();
    console.log("Save Ojek Triggered");

    const formData = new FormData();
    formData.append("nama", nama);
    formData.append("namaLengkap", namaLengkap);
    formData.append("alamat", alamat);
    formData.append("noHp", noHp);
    formData.append("status", status);
    formData.append("isRide", isRide);
    formData.append("isFood", isFood);
    formData.append("gender", gender);

    files.forEach((fileObj, index) => {
      formData.append("files", fileObj.file); // Ubah 'files[]' menjadi 'files'
    });

    for (let [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }

    try {
      const token = localStorage.getItem("token");
      console.log("Token di Frontend:", token);
      const response = await axios.post(
        "https://api-staygo.tonexus.my.id/ojek",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Response dari Server:", response);
      navigate("/ojek");
    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error.message);
    }
  };

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
  
    const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
    const newImages = files
      .filter((file) => allowedTypes.includes(file.type))
      .map((file) => ({
        file, 
        preview: URL.createObjectURL(file),
      }));
  
    setFiles((prevImages) => [...prevImages, ...newImages]);
  };

  const handleRemoveImage = (index) => {
    // Revoke preview URL untuk membebaskan memori
    URL.revokeObjectURL(files[index].preview);

    // Hapus file dari state
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white dark:text-white dark:bg-secondary-dark-bg rounded-3xl border border-gray-300">
      <div className="">
        <Header category="Page" title="Tambah Ojek" />
        <form
          onSubmit={saveOjek}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
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
                placeholder="Masukkan nama Ojek"
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
                  >
                    <option value={null}>Pilih</option>
                    <option value={true}>Iya</option>
                    <option value={false}>Tidak</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Gambar Upload - Kanan */}
          <div>
            <label className="block mb-1 font-semibold">Upload Gambar</label>
            <div className="border-dashed border-2 border-gray-300 rounded-lg p-5 text-center">
              <p className="text-gray-500 mb-2">
                Drop your images here, or browse
              </p>
              <p className="text-sm text-gray-400">
                JPEG, JPG, PNG, are allowed
              </p>
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                id="upload-images"
              />
              <label
                htmlFor="upload-images"
                className="cursor-pointer px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 mt-3 inline-block"
              >
                Browse Files
              </label>
            </div>
            {/* Preview */}
            <div className="mt-3 space-y-2">
              {files.map((image, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between border rounded p-2"
                >
                  <div className="flex items-center space-x-4">
                    {/* Tampilkan URL preview */}
                    <img
                      src={image.preview}
                      alt={`Preview ${index}`}
                      className="w-12 h-12 object-cover rounded"
                    />
                    <p className="text-sm text-gray-700 truncate dark:text-white dark:bg-secondary-dark-bg">
                      {image.file.name}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleRemoveImage(index)}
                    className="text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              ))}
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

export default AddOjek;
