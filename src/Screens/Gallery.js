import React from "react";
import InputBox from "../Components/InputBox";

export default function Gallery() {
  return (
    <div className="panel__container">
      <div className="panel__container__header">Gallery</div>
      <div className="panel__container__form">
        <div className="panel__container__form__row">
          <InputBox variant="file" />
          <InputBox variant="file" />
          <InputBox variant="file" />
          <InputBox variant="file" />
          <InputBox variant="file" />
          <InputBox variant="file" />
        </div>
      </div>
    </div>
  );
}
