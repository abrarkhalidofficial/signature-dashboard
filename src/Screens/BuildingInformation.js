import React from "react";
import BuildInfoHeadingRow from "../Components/BuildInfoHeadingRow";
import BuildingInfoEntryRow from "../Components/BuildingInfoEntryRow";

export default function BuildingInformation() {
  const tableRowEntry = [
    { heading: "Floor#" },
    { heading: "Floor Name" },
    { heading: "11232" },
    { heading: "56321" },
    { heading: "Details", type: "button" },
    { heading: "Edit", type: "button" },
  ];
  const tableEntryHead = [
    { heading: "Floor" },
    { heading: "Floor Name" },
    { heading: "Total Spaces" },
    { heading: "Booked Spaces" },
    { heading: "" },
    { heading: "" },
  ];
  return (
    <div className="panel__container">
      <div className="panel__container__header">
        Building Information
        <button
          className="panel__container__form__button"
          style={{ width: "150px" }}
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          Add Space
        </button>
      </div>
      <div className="panel__container__table">
        <BuildInfoHeadingRow tableEntryHeading={tableEntryHead} />
        <BuildingInfoEntryRow tableEntry={tableRowEntry} />
        <BuildingInfoEntryRow tableEntry={tableRowEntry} />
        <BuildingInfoEntryRow tableEntry={tableRowEntry} />
        <BuildingInfoEntryRow tableEntry={tableRowEntry} />
        <BuildingInfoEntryRow tableEntry={tableRowEntry} />
        <BuildingInfoEntryRow tableEntry={tableRowEntry} />
        <BuildingInfoEntryRow tableEntry={tableRowEntry} />
        <BuildingInfoEntryRow tableEntry={tableRowEntry} />
      </div>
    </div>
  );
}
