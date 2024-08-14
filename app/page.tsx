"use client";
import Image from "next/image";
import styles from "./page.module.css";
import bannerData from "./Data/bannerData.json";
import ShowBanner from "./components/ShowBanner";
import { useState } from "react";
import EditBanner from "./components/EditBanner";

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
  id: number;
  title: Title;
  description: Description;
  CTA: Button;
  background: string;
  image: bannerImage;
}

const HomePage: React.FC = () => {
  const [editDisplay, setEditDisplay] = useState("none");
  const [bannerID, setBannerID] = useState(0);

  const checkEdit = (showEdit: boolean, id: number) => {
    console.log(showEdit);
    if (showEdit) {
      setEditDisplay("flex");
      setBannerID(id);
    }
  };

  const renderedBanners = bannerData.map((banner) => (
    <ShowBanner key={banner.id} checkEdit={checkEdit} banner={banner} />
  ));

  return (
    <div>
      <div className="wrapper">
        <div className="container">{renderedBanners}</div>
      </div>
      <div className="edit-overlay" style={{ display: `${editDisplay}` }}>
        <div className="edit-container">
          <EditBanner banner={bannerData[bannerID]} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
