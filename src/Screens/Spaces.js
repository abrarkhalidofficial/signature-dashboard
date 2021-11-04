import React from "react";
import { useHistory } from "react-router";
import BuildInfoHeadingRow from "../Components/BuildInfoHeadingRow";
import BuildingInfoEntryRow from "../Components/BuildingInfoEntryRow";

export default function Spaces() {
  const history = useHistory();
  const tableRowEntry = [
    { heading: "Floor#" },
    { heading: "Floor Name" },
    { heading: "11232" },
    { heading: "56321" },
    { heading: "Edit", type: "image-more" },
    {
      heading: "Edit",
      type: "button",
      path: "/dashboard/spaces-edit",
    },
  ];
  const tableEntryHead = [
    { heading: "Floor" },
    { heading: "Floor Name" },
    { heading: "Total Spaces" },
    { heading: "Booked Spaces" },
    { heading: "Image" },
    { heading: "" },
  ];
  return (
    <div className="panel__container">
      <div className="panel__container__header">
        Spaces
        <button
          className="panel__container__form__button"
          style={{ width: "150px" }}
          onClick={() => {
            history.push("/dashboard/spaces-new");
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
