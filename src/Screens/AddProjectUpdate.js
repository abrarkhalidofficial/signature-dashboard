import React from "react";
import InputBox from "../Components/InputBox";

export default function AddProjectUpdates() {
  return (
    <div className="panel__container">
      <div className="panel__container__header">Floor 4</div>
      <form className="panel__container__form">
        <div className="panel__container__form__row">
          <InputBox label="Floor Name" placeholder="" type="text" />
        </div>
        <div className="panel__container__form__row">
          <InputBox
            label="Total Spaces"
            placeholder=""
            type="text"
            variant="select"
            options={[
              { label: "Sold Out", value: 1 },
              { label: "Sold Out", value: 2 },
            ]}
          />
        </div>
        <div className="panel__container__form__row">
          <InputBox
            label="Total Spaces"
            placeholder=""
            placeholder1=""
            type="text"
            variant="two"
          />
        </div>
        <div className="panel__container__form__row">
          <InputBox label="Total Spaces" placeholder="" variant="textarea" />
        </div>
        <div className="panel__container__form__row">
          <InputBox label="Total Spaces" placeholder="" variant="file" />
        </div>
        <button
          className="panel__container__form__button"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}
