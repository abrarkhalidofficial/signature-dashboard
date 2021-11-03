import React from "react";

export default function UploadImage() {
  return (
    <div className="gallery__upload__images__container__wrapper">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24.561"
        height="24.561"
        viewBox="0 0 16.561 16.561"
      >
        <g
          id="Icon_feather-plus"
          data-name="Icon feather-plus"
          transform="translate(1.5 1.5)"
        >
          <path
            id="Path_9205"
            data-name="Path 9205"
            d="M18,22.561a1.5,1.5,0,0,1-1.5-1.5V7.5a1.5,1.5,0,0,1,3,0V21.061A1.5,1.5,0,0,1,18,22.561Z"
            transform="translate(-11.219 -7.5)"
            fill="#7c7a79"
          />
          <path
            id="Path_9206"
            data-name="Path 9206"
            d="M21.061,19.5H7.5a1.5,1.5,0,0,1,0-3H21.061a1.5,1.5,0,0,1,0,3Z"
            transform="translate(-7.5 -11.219)"
            fill="#7c7a79"
          />
        </g>
      </svg>
      <input
        type="file"
        id="image"
        className="gallery__upload__images__container__wrapper__upload"
      />
    </div>
  );
}
