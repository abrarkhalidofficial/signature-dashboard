import React from "react";

function BuildInfoHeadingRowEntry({ value, varaint }) {
  if (varaint === "email") {
    return (
      <div className="panel__container__table__entry__reverse__email__heading">
        {value}
      </div>
    );
  } else return <div className="panel__container__table__entry">{value}</div>;
}

export default function BuildInfoHeadingRow({ tableEntryHeading }) {
  return (
    <div className="panel__container__table__headings__container">
      {tableEntryHeading.map((item) => (
        <BuildInfoHeadingRowEntry
          value={item.heading}
          varaint={item.type === "email" ? "email" : null}
        />
      ))}
    </div>
  );
}
