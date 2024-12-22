import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getMe } from "../features/authSlice";

import { Header } from "../components";

const EditKost = () => {
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
  const [files, setFiles] = useState([]);
  const [removedImages, setRemovedImages] = useState([]);
  const { id } = useParams();
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

  useEffect(() => {
    getKostById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getKostById = async () => {
    const response = await axios.get(`https://api-staygo.tonexus.my.id/kost/${id}`);
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

    const existingImages = response.data.url.map((imageUrl) => ({
      preview: imageUrl, // URL gambar yang ada
      file: null, // file untuk yang sudah ada, tidak perlu diproses
    }));
    setFiles(existingImages);
  };

  const updateKost = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("namaKost", namaKost);
    formData.append("alamat", alamat);
    formData.append("hargaPerbulan", hargaPerbulan);
    formData.append("hargaPertahun", hargaPertahun);
    formData.append("tersedia", tersedia);
    formData.append("gender", gender);
    formData.append("fasilitas", fasilitas);
    formData.append("deskripsi", deskripsi);
    formData.append("latitude", latitude);
    formData.append("longitude", longitude);

    files.forEach((file) => {
        if (file.file) {
            formData.append("files", file.file);
        }
    });

    formData.append("removedImages", JSON.stringify(removedImages));

    try {
      await axios.patch(`https://api-staygo.tonexus.my.id/kost/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      navigate("/kost");
    } catch (error) {
      console.log(error);
    }
  };

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);

    // Buat array dengan file asli dan preview URL untuk masing-masing file
    const newImages = files.map((file) => ({
      file, // file asli untuk diunggah
      preview: URL.createObjectURL(file), // URL untuk preview di frontend
    }));

    // Tambahkan file baru ke state `files`
    setFiles((prevImages) => [...prevImages, ...newImages]);
  };

  const handleRemoveImage = (index) => {
    // Revoke preview URL untuk membebaskan memori
    URL.revokeObjectURL(files[index].preview);
  
    // Jika gambar ini berasal dari gambar lama, tambahkan ke daftar removedImages
    if (!files[index].file) {
      setRemovedImages((prevRemoved) => [
        ...prevRemoved,
        files[index].preview, // Gunakan preview untuk mengidentifikasi gambar
      ]);
    }
  
    // Hapus file dari state
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  // Fungsi untuk memformat angka sebagai mata uang
  const formatCurrency = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    })
      .format(number)
      .replace(/\D00(?=\D*$)/, "");
  };

  // Fungsi untuk menghapus format mata uang dan mengembalikan angka
  const parseCurrency = (value) => {
    return value.replace(/[Rp.,\s]/g, "");
  };

  const handleCancel = () => {
    navigate("/kost");
  };

  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white dark:text-white dark:bg-secondary-dark-bg rounded-3xl border border-gray-300">
      <div className="">
        <Header category="Page" title="Tambah Kost" />
        <form
          onSubmit={updateKost}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {/* Form Input - Kiri */}
          <div className="space-y-4">
            <div>
              <label className="block mb-1 font-semibold">Nama Kost</label>
              <input
                type="text"
                name="namaKost"
                required
                className="w-full p-2 border rounded dark:text-white dark:bg-secondary-dark-bg"
                placeholder="Masukkan nama kost"
                value={namaKost}
                onChange={(e) => setNamaKost(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold">Alamat</label>
              <textarea
                name="alamat"
                required
                className="w-full p-2 border rounded dark:text-white dark:bg-secondary-dark-bg"
                placeholder="Masukkan alamat kost"
                value={alamat}
                onChange={(e) => setAlamat(e.target.value)}
              ></textarea>
            </div>
            <div className="space-y-4">
              {/* Baris Harga */}
              <div className="flex space-x-4 items-center">
                <div className="flex-grow">
                  <label className="block mb-2 font-semibold">
                    Harga Perbulan
                  </label>
                  <input
                    type="text"
                    name="hargaPerbulan"
                    required
                    className="w-full p-2 border rounded dark:text-white dark:bg-secondary-dark-bg"
                    placeholder="Rp"
                    value={formatCurrency(hargaPerbulan)}
                    onChange={(e) =>
                      setHargaPerbulan(parseCurrency(e.target.value))
                    }
                    onBlur={(e) =>
                      setHargaPerbulan(parseCurrency(e.target.value))
                    }
                  />
                </div>
                <div className="flex-grow">
                  <label className="block mb-2 font-semibold">
                    Harga Pertahun
                  </label>
                  <input
                    type="text"
                    name="hargaPertahun"
                    required
                    className="w-full p-2 border rounded dark:text-white dark:bg-secondary-dark-bg"
                    placeholder="Rp"
                    value={formatCurrency(hargaPertahun)}
                    onChange={(e) =>
                      setHargaPertahun(parseCurrency(e.target.value))
                    }
                    onBlur={(e) =>
                      setHargaPertahun(parseCurrency(e.target.value))
                    }
                  />
                </div>
              </div>

              <div className="flex space-x-4 items-center">
                <div className="flex-grow">
                  <label className="block mb-2 font-semibold">
                    Jumlah Kamar Tersedia
                  </label>
                  <input
                    type="number"
                    name="hargaPerbulan"
                    required
                    className="w-full p-2 border rounded dark:text-white dark:bg-secondary-dark-bg"
                    placeholder="Jumlah"
                    value={tersedia}
                    onChange={(e) => setTersedia(e.target.value)}
                  />
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

            <div>
              <label className="block mb-1 font-semibold">Fasilitas</label>
              <input
                type="text"
                name="fasilitas"
                required
                className="w-full p-2 border rounded dark:text-white dark:bg-secondary-dark-bg"
                placeholder="Masukkan Fasilitas"
                value={fasilitas}
                onChange={(e) => setFasilitas(e.target.value)}
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold">Deskripsi</label>
              <textarea
                name="deskripsi"
                required
                className="w-full p-2 border rounded dark:text-white dark:bg-secondary-dark-bg"
                placeholder="Masukkan deskripsi kost"
                value={deskripsi}
                onChange={(e) => setDeskripsi(e.target.value)}
              ></textarea>
            </div>

            {/* Lokasi */}
            <div className="flex space-x-4">
              <div>
                <label className="block mb-2 font-semibold">Latitude</label>
                <input
                  type="text"
                  name="latitude"
                  required
                  className="w-full p-2 border rounded dark:text-white dark:bg-secondary-dark-bg"
                  placeholder="Contoh: -6.200000"
                  value={latitude}
                  onChange={(e) => setLatitude(e.target.value)}
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold">Longitude</label>
                <input
                  type="text"
                  name="longitude"
                  required
                  className="w-full p-2 border rounded dark:text-white dark:bg-secondary-dark-bg"
                  placeholder="Contoh: 106.816666"
                  value={longitude}
                  onChange={(e) => setLongitude(e.target.value)}
                />
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
                    {/* Menampilkan gambar yang sudah ada dari URL */}
                    {image.preview && (
                      <img
                        src={image.preview}
                        alt={`Preview ${index}`}
                        className="w-12 h-12 object-cover rounded"
                      />
                    )}
                    <p className="text-sm text-gray-700 truncate dark:text-white dark:bg-secondary-dark-bg">
                      {image.file ? image.file.name : "Gambar lama"}
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
              onClick={handleCancel}
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

export default EditKost;
