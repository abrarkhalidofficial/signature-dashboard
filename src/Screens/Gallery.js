import React from "react";
import UploadImage from "../Components/UploadImage";

export default function Gallery() {
  return (
    <div className="panel__container">
      <div className="panel__container__header">Gallery</div>
      <div className="gallery__upload__images__container">
        <UploadImage />
        <UploadImage />
        <UploadImage />
        <UploadImage />
      </div>
    </div>
  );
}
