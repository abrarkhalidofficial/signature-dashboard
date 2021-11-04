import React from "react";
import { useHistory } from "react-router-dom";
import BuildInfoHeadingRow from "../Components/BuildInfoHeadingRow";
import BuildingInfoEntryRow from "../Components/BuildingInfoEntryRow";

export default function ProjectUpdates() {
  const history = useHistory();
  const tableRowEntry = [
    { heading: "Serial#" },
    { heading: "Signature Hotel" },
    { heading: "96%" },
    { heading: "10/03/21" },
    {
      heading: "View Message",
      type: "message",
      data: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae natus qui perferendis reprehenderit sit, repellat non sunt ex hic repudiandae neque animi voluptatibus officiis dolorem rem minus iste, nostrum illum!",
    },
    { heading: "Edit", type: "image" },
    {
      heading: "Edit",
      type: "button",
      path: "/dashboard/project-updates-edit",
    },
  ];
  const tableEntryHead = [
    { heading: "Serial#" },
    { heading: "Project Name" },
    { heading: "Completed" },
    { heading: "Date" },
    { heading: "Discription" },
    { heading: "Image" },
    { heading: "" },
  ];
  return (
    <div className="panel__container">
      <div className="panel__container__header">
        Project Updates
        <button
          className="panel__container__form__button"
          style={{ width: "150px" }}
          onClick={() => {
            history.push("/dashboard/project-updates-new");
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
