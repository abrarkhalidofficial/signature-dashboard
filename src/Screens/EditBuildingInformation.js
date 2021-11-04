import React from "react";
import { useHistory } from "react-router";
import InputBox from "../Components/InputBox";

export default function EditBuildingInformation() {
  const history = useHistory();
  return (
    <div className="panel__container">
      <div className="panel__container__header">Edit Building Info</div>
      <form className="panel__container__form">
        <div className="panel__container__form__row">
          <InputBox label="Floor Name" placeholder="Name" type="text" />
        </div>
        <div className="panel__container__form__row">
          <InputBox label="Total Spaces" placeholder="36" type="text" />
        </div>
        <button
          className="panel__container__form__button"
          onClick={(e) => {
            e.preventDefault();
            history.push("/dashboard/building-information");
          }}
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}
