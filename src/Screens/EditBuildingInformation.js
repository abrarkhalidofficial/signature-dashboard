import React from "react";
import "../Styles/buildingInformation.scss";

export default function EditBuildingInformation() {
  return (
    <div className="panel__container">
      <div className="panel__container__header">Floor 4</div>
      <form className="panel__container__form">
        <div className="panel__container__form__row">
          <div className="panel__container__form__input">
            <div className="panel__container__form__input__label">
              Floor Name
            </div>
            <input
              type="text"
              placeholder="Gym Floor"
              className="panel__container__form__input__field"
            />
          </div>
          <div className="panel__container__form__input">
            <div className="panel__container__form__input__label">
              Floor Name
            </div>
            <input
              type="text"
              placeholder="Gym Floor"
              className="panel__container__form__input__field"
            />
          </div>
          <button className="panel__container__form__button">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
