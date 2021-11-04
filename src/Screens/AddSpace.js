import React from "react";
import { useHistory } from "react-router";
import InputBox from "../Components/InputBox";

export default function AddSpace() {
  const history = useHistory();
  return (
    <div className="panel__container">
      <div className="panel__container__header">Add Space</div>
      <form className="panel__container__form">
        <div className="panel__container__form__row">
          <InputBox label="Owner Name" placeholder="Name" type="text" />
        </div>
        <div className="panel__container__form__row">
          <InputBox
            label="Area"
            placeholder="Width"
            placeholder1="Height"
            type="text"
            variant="two"
          />
        </div>
        <div className="panel__container__form__row">
          <InputBox
            label="Status"
            placeholder="Set Status"
            type="text"
            variant="select"
            options={[
              { label: "Available", value: 2 },
              { label: "Sold Out", value: 1 },
            ]}
          />
        </div>
        <div className="panel__container__form__row">
          <InputBox label="Total Spaces" placeholder="" variant="file" />
          <InputBox variant="file" />
          <InputBox variant="file" />
        </div>
        <button
          className="panel__container__form__button"
          onClick={(e) => {
            e.preventDefault();
            history.push("/dashboard/spaces");
          }}
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}
