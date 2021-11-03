import React from "react";
import BuildInfoHeadingRow from "../Components/BuildInfoHeadingRow";
import BuildingInfoEntryRow from "../Components/BuildingInfoEntryRow";

export default function CallRequests() {
  const tableRowEntry = [
    { heading: "1" },
    { heading: "Muhammad Ayaaz" },
    { heading: "232 343 3248" },
    {
      heading: "View Message",
      type: "message",
      data: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae natus qui perferendis reprehenderit sit, repellat non sunt ex hic repudiandae neque animi voluptatibus officiis dolorem rem minus iste, nostrum illum!",
    },
  ];
  const tableEntryHead = [
    { heading: "Serial No." },
    { heading: "Name" },
    { heading: "Phone" },
    { heading: "Status" },
  ];
  return (
    <div className="panel__container">
      <div className="panel__container__header">Call Requests</div>
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
        <BuildingInfoEntryRow tableEntry={tableRowEntry} />
        <BuildingInfoEntryRow tableEntry={tableRowEntry} />
        <BuildingInfoEntryRow tableEntry={tableRowEntry} />
        <BuildingInfoEntryRow tableEntry={tableRowEntry} />
        <BuildingInfoEntryRow tableEntry={tableRowEntry} />
      </div>
    </div>
  );
}
