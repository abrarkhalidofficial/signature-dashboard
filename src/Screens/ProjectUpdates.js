import React from "react";
import BuildInfoHeadingRow from "../Components/BuildInfoHeadingRow";
import BuildingInfoEntryRow from "../Components/BuildingInfoEntryRow";

export default function ProjectUpdates() {
  const tableRowEntry = [
    { heading: "Serial#" },
    { heading: "Signature Hotel" },
    { heading: "96%" },
    { heading: "10/03/21" },
    { heading: "View Message", type: "message" },
    { heading: "Edit", type: "image" },
    { heading: "Edit", type: "button" },
  ];
  const tableEntryHead = [
    { heading: "Serial#" },
    { heading: "Project Name" },
    { heading: "Completed" },
    { heading: "Date" },
    { heading: "Discription" },
    { heading: "Image" },
  ];
  return (
    <div className="panel__container">
      <div className="panel__container__header">Project Updates</div>
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
