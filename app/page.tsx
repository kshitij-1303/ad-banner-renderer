import Image from "next/image";
import styles from "./page.module.css";
import bannerData from "./Data/bannerData.json";
import ShowBanner from "./components/ShowBanner";
import { useState } from "react";

interface Title {
  text: string;
  top: string;
  left: string;
  fontColor: string;
}

interface Button {
  text: string;
  top: string;
  left: string;
  color: string;
  fontColor: string;
}

interface Description {
  text: string;
  top: string;
  left: string;
  fontColor: string;
}

interface bannerImage {
  path: string;
  position: string;
}

interface BannerData {
  id: string;
  title: Title;
  description: Description;
  CTA: Button;
  background: string;
  image: bannerImage;
}

const HomePage: React.FC = () => {
  const renderedBanners = bannerData.map((banner) => (
    <ShowBanner key={banner.id} banner={banner} />
  ));

  return (
    <div className="wrapper">
      <div className="container">{renderedBanners}</div>
    </div>
  );
};

export default HomePage;
