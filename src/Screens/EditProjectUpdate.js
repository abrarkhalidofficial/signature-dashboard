import React from "react";
import { useHistory } from "react-router";
import InputBox from "../Components/InputBox";

export default function EditProjectUpdate() {
  const history = useHistory();
  return (
    <div className="panel__container">
      <div className="panel__container__header">Edit Project Updates</div>
      <form className="panel__container__form">
        <div className="panel__container__form__row">
          <InputBox label="Floor Name" placeholder="Name" type="text" />
        </div>
        <div className="panel__container__form__row">
          <InputBox label="Date" placeholder="Name" type="date" />
        </div>
        <div className="panel__container__form__row">
          <InputBox
            label="Status"
            placeholder="Set Status"
            type="text"
            variant="select"
            options={[
              { label: "Sold Out", value: 1 },
              { label: "Sold Out", value: 2 },
            ]}
          />
        </div>
        <div className="panel__container__form__row">
          <InputBox label="Image" placeholder="" variant="file" />
        </div>
        <div className="panel__container__form__row">
          <InputBox
            label="Message"
            placeholder="Write Message"
            variant="textarea"
          />
        </div>

        <button
          className="panel__container__form__button"
          onClick={(e) => {
            e.preventDefault();
            history.push("/dashboard/project-updates");
          }}
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}
