import React from "react";
import { useHistory } from "react-router-dom";
import ProjectUpdateEntryImg from "../Assets/ProjectUpdateEntryImg.png";

function BuildingInfoEntryRowEntry({ value, varaint, data, path }) {
  const history = useHistory();
  console.log(path);
  if (varaint === "button") {
    return (
      <div className="panel__container__table__entry__reverse">
        <button
          className="panel__container__table__entry__reverse__button"
          onClick={() => {
            history.push(path);
          }}
        >
          {value}
        </button>
      </div>
    );
  } else if (varaint === "message") {
    return (
      <div className="panel__container__table__entry__reverse__massage">
        {value}
        <div className="panel__container__table__entry__reverse__massage__data">
          {data}
        </div>
      </div>
    );
  } else if (varaint === "email") {
    return (
      <div className="panel__container__table__entry__reverse__email">
        {value}
      </div>
    );
  } else if (varaint === "image") {
    return (
      <div className="panel__container__table__entry__reverse">
        <img
          src={ProjectUpdateEntryImg}
          alt="ProjectUpdateEntryImg"
          className="panel__container__table__entry__reverse__img"
        />
      </div>
    );
  } else if (varaint === "image-more") {
    return (
      <div className="panel__container__table__entry__reverse">
        <img
          src={ProjectUpdateEntryImg}
          alt="ProjectUpdateEntryImg"
          className="panel__container__table__entry__reverse__img"
        />

        <img
          src={ProjectUpdateEntryImg}
          alt="ProjectUpdateEntryImg"
          className="panel__container__table__entry__reverse__img"
        />
        <img
          src={ProjectUpdateEntryImg}
          alt="ProjectUpdateEntryImg"
          className="panel__container__table__entry__reverse__img"
        />
      </div>
    );
  } else
    return (
      <div className="panel__container__table__entry__reverse">{value}</div>
    );
}

export default function BuildingInfoEntryRow({ tableEntry }) {
  return (
    <div className="panel__container__table__headings__container__reverse">
      {tableEntry.map((item, i) => (
        <BuildingInfoEntryRowEntry
          key={i}
          value={item.heading}
          varaint={
            item.type === "button"
              ? "button"
              : item.type === "message"
              ? "message"
              : item.type === "image"
              ? "image"
              : item.type === "image-more"
              ? "image-more"
              : item.type === "email"
              ? "email"
              : null
          }
          data={item.data && item.data}
          path={item.path}
        />
      ))}
    </div>
  );
}
