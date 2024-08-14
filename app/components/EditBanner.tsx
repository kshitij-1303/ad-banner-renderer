"use client";
import "../styles/banner.css";
import { useState } from "react";
import React from "react";

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

interface BannerEditProps {
  banner: {
    id: number;
    title: Title;
    description: Description;
    CTA: Button;
    background: string;
    image: bannerImage;
  };
}

const EditBanner: React.FC<BannerEditProps> = ({ banner }) => {
  const [title, setTitle] = useState(banner.title.text);
  const [description, setDescription] = useState(banner.description.text);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
  };
  return (
    <div>
      <form className="banner-edit">
        <div className="edit-button">
          <label>Upload Image</label>
          <input type="file" />
        </div>
        <div className="edit-title">
          <label>Title</label>
          <input className="input" onChange={handleTitleChange} />
        </div>
        <div className="edit-description">
          <label>Description</label>
          <input className="input" onChange={handleDescriptionChange} />
        </div>

        <button className="edit-button">Save</button>
      </form>
    </div>
  );
};

export default EditBanner;
