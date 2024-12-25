import React from "react";
import Navbar from "./Navbar/Navbar";
import NavbarBanner from "./Navbar/NavbarBanner";
import Hero from "./Hero/Hero";
import NumberCounter from "./NumberCounter/NumberCounter";
import Footer from "./Footer/Footer";
import "./homepage.css";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";
import Banner from "./Banner/Banner";
import Img1 from "../../assets/ojek.jpg";
import Img2 from "../../assets/kost.jpg";
import Testimonial from "./Testimonial/Testimonial";

const BannerData = {
  image: Img1,
  tag: "KEMUDAHAN TRANSPORTASI ANDA",
  title: "Layanan Ojek Online Cepat dan Terpercaya",
  subtitle:
    "Dengan stayGo, Anda dapat memesan ojek online kapan saja dan di mana saja. Nikmati pengalaman perjalanan yang aman, nyaman, dan efisien untuk kebutuhan harian Anda. Kami selalu siap membantu mobilitas Anda dengan pengemudi berpengalaman dan harga yang terjangkau",
  link: "http://api-staygo.tonexus.my.id/application/staygo.apk",
};

const BannerData2 = {
  image: Img2,
  tag: "TEMUKAN KOST IMPIAN ANDA",
  title: "Platform Pencarian Kost Terbaik untuk Anda",
  subtitle:
    "stayGo membantu Anda menemukan kost yang sesuai dengan kebutuhan Anda, baik dari segi fasilitas, lokasi, maupun harga. Dengan sistem pencarian yang mudah dan cepat, kami memastikan Anda mendapatkan tempat tinggal yang nyaman tanpa repot",
  link: "http://api-staygo.tonexus.my.id/application/staygo.apk",
};

const Homepage = () => {
  return (
    <main className="overflow-x-hidden font-homepage">
      <Navbar />
      <NavbarBanner />
      <Hero />
      <NumberCounter />
      <WhyChooseUs />
      <Banner {...BannerData}/>
      <Banner {...BannerData2} reverse={true}/>
      <Testimonial />
      <Footer />
    </main>
  );
};

export default Homepage;
