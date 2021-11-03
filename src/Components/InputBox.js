import React, { useState } from "react";
import ProjectUpdateEntryImg from "../Assets/ProjectUpdateEntryImg.png";

export default function InputBox({
  label,
  placeholder,
  variant,
  type,
  options,
  placeholder1,
}) {
  const [uploadedImg, setUploadedImg] = useState(false);
  if (variant === "select") {
    return (
      <div className="panel__container__form__input">
        <div className="panel__container__form__input__label">{label}</div>
        <select className="panel__container__form__input__field">
          {options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>
    );
  } else if (variant === "two") {
    return (
      <div className="panel__container__form__input">
        <div className="panel__container__form__input__label">{label}</div>
        <input
          type={type}
          placeholder={placeholder}
          className="panel__container__form__input__field panel__container__form__input__field__sm"
        />
        <input
          type={type}
          placeholder={placeholder1}
          className="panel__container__form__input__field panel__container__form__input__field__sm"
        />
      </div>
    );
  } else if (variant === "textarea") {
    return (
      <div
        className="panel__container__form__input"
        style={{ alignItems: "flex-start" }}
      >
        <div className="panel__container__form__input__label">{label}</div>
        <textarea
          cols="30"
          rows="10"
          placeholder={placeholder}
          className="panel__container__form__input__textarea"
        />
      </div>
    );
  } else if (variant === "file") {
    return (
      <div
        className="panel__container__form__input"
        style={{ alignItems: "flex-start" }}
      >
        {label ? (
          <div className="panel__container__form__input__label">{label}</div>
        ) : null}
        <div className="panel__container__form__input__pic">
          <input
            type="file"
            className="panel__container__form__input__file"
            onChange={(e) => {
              console.log(e.target.files[0]);
              setUploadedImg(true);
            }}
          />
          <div className="panel__container__form__input__pic__content">
            {uploadedImg ? (
              <img
                src={ProjectUpdateEntryImg}
                alt="uploadedImage"
                className="panel__container__form__input__pic__content__img"
              />
            ) : (
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
            )}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="panel__container__form__input">
        <div className="panel__container__form__input__label">{label}</div>
        <input
          type={type}
          placeholder={placeholder}
          className="panel__container__form__input__field"
        />
      </div>
    );
  }
}
