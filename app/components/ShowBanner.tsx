import "../styles/showBanner.css";
import React from "react";
import Image from "next/image";

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

interface BannerShowProps {
  banner: {
    id: string;
    title: Title;
    description: Description;
    CTA: Button;
    background: string;
    image: bannerImage;
    fontColor?: string;
  };
}

const ShowBanner: React.FC<BannerShowProps> = ({ banner }) => {
  return (
    <div className="banner">
      <div className="edit-symbol">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width="24"
          height="24"
        >
          <path d="M20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.84 1.83 3.75 3.75M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25z" />
        </svg>
      </div>
      <img
        className="banner-background"
        src={banner.background}
        alt={banner.title.text}
        // style={{ objectFit: "contain" }}
      />
      <div
        className="banner-title"
        style={{
          top: `${banner.title.top}`,
          left: `${banner.title.left}`,
          color: `${banner.title.fontColor}`,
        }}
      >
        <h3 style={{ whiteSpace: "pre-wrap" }}>{banner.title.text}</h3>
      </div>
      <div
        className="banner-description"
        style={{
          top: `${banner.description.top}`,
          left: `${banner.description.left}`,
          color: `${banner.description.fontColor}`,
        }}
      >
        <p style={{ whiteSpace: "pre-wrap" }}>{banner.description.text}</p>
      </div>
      <div
        className="banner-cta"
        style={{
          top: `${banner.CTA.top}`,
          left: `${banner.CTA.left}`,
        }}
      >
        <button
          style={{
            backgroundColor: `${banner.CTA.color}`,
            color: `${banner.CTA.fontColor}`,
          }}
        >
          {banner.CTA.text}
        </button>
      </div>

      <div>
        <Image
          className={banner.image.position}
          src={banner.image.path}
          alt={banner.title.text}
          height={450}
          width={450}
        ></Image>
      </div>
    </div>
  );
};

export default ShowBanner;
