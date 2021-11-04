import React from "react";
import { useHistory } from "react-router";
import InputBox from "../Components/InputBox";

export default function EditSpace() {
  const history = useHistory();
  return (
    <div className="panel__container">
      <div className="panel__container__header">Edit Space</div>
      <form className="panel__container__form">
        <div className="panel__container__form__row">
          <InputBox
            label="Owner Name"
            placeholder="Muhammad Fahad"
            type="text"
          />
        </div>
        <div className="panel__container__form__row">
          <InputBox
            label="Area"
            placeholder="46"
            placeholder1="32"
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
              { label: "Sold Out", value: 1 },
              { label: "Available", value: 2 },
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
