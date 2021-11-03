import React from "react";
import { useHistory } from "react-router";
import "../Styles/sidebar.scss";

function Accordian({ title, value, children, onChange }) {
  return (
    <>
      <div className="sidebar__link">
        <input
          type="radio"
          onChange={onChange}
          name="sidebar__link__input"
          id=""
          className="sidebar__link__input"
        />
        <div className="sidebar__link__content">
          <div className="sidebar__link__content__svg">
            <svg
              id="files"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 28.962 26.314"
            >
              <path
                id="Path_26"
                data-name="Path 26"
                d="M905.359,2347.677h22.913l3.025-19.154H902.335Zm20.777-2.5H907.5l-2.235-14.154h23.11Z"
                transform="translate(-902.335 -2321.363)"
              />
              <rect
                id="Rectangle_17"
                data-name="Rectangle 17"
                width="10.086"
                height="2.5"
                transform="translate(9.437 12.79)"
              />
              <rect
                id="Rectangle_18"
                data-name="Rectangle 18"
                width="23.925"
                height="2.5"
                transform="translate(2.518 3.58)"
              />
              <rect
                id="Rectangle_19"
                data-name="Rectangle 19"
                width="18.452"
                height="2.5"
                transform="translate(5.255)"
              />
            </svg>
          </div>
          {title}
          {value ? <span>{value}</span> : null}
        </div>
      </div>
      <div className="sidebar__link__list">{children}</div>
    </>
  );
}
export default function Sidebar({ setUser }) {
  const history = useHistory();
  return (
    <div className="sidebar">
      <div className="sidebar__header">Admin Panel</div>
      <div className="sidebar__links">
        <div className="sidebar__link">
          <input
            type="radio"
            name="sidebar__link__input"
            onChange={() => {
              history.push("/");
            }}
            id=""
            className="sidebar__link__input"
          />
          <div className="sidebar__link__content">
            <div className="sidebar__link__content__svg">
              <svg
                id="files"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 28.962 26.314"
              >
                <path
                  id="Path_26"
                  data-name="Path 26"
                  d="M905.359,2347.677h22.913l3.025-19.154H902.335Zm20.777-2.5H907.5l-2.235-14.154h23.11Z"
                  transform="translate(-902.335 -2321.363)"
                />
                <rect
                  id="Rectangle_17"
                  data-name="Rectangle 17"
                  width="10.086"
                  height="2.5"
                  transform="translate(9.437 12.79)"
                />
                <rect
                  id="Rectangle_18"
                  data-name="Rectangle 18"
                  width="23.925"
                  height="2.5"
                  transform="translate(2.518 3.58)"
                />
                <rect
                  id="Rectangle_19"
                  data-name="Rectangle 19"
                  width="18.452"
                  height="2.5"
                  transform="translate(5.255)"
                />
              </svg>
            </div>
            dashboard
          </div>
        </div>
        <div className="sidebar__link">
          <input
            type="radio"
            name="sidebar__link__input"
            onChange={() => {
              history.push("/");
            }}
            id=""
            className="sidebar__link__input"
          />
          <div className="sidebar__link__content">
            <div className="sidebar__link__content__svg">
              <svg
                id="files"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 28.962 26.314"
              >
                <path
                  id="Path_26"
                  data-name="Path 26"
                  d="M905.359,2347.677h22.913l3.025-19.154H902.335Zm20.777-2.5H907.5l-2.235-14.154h23.11Z"
                  transform="translate(-902.335 -2321.363)"
                />
                <rect
                  id="Rectangle_17"
                  data-name="Rectangle 17"
                  width="10.086"
                  height="2.5"
                  transform="translate(9.437 12.79)"
                />
                <rect
                  id="Rectangle_18"
                  data-name="Rectangle 18"
                  width="23.925"
                  height="2.5"
                  transform="translate(2.518 3.58)"
                />
                <rect
                  id="Rectangle_19"
                  data-name="Rectangle 19"
                  width="18.452"
                  height="2.5"
                  transform="translate(5.255)"
                />
              </svg>
            </div>
            Building Information
          </div>
        </div>

        <Accordian title="Applications" value={9}>
          <div className="sidebar__link__list__item">
            <input
              type="radio"
              name="sidebar__link__input"
              onChange={() => {
                history.push("/");
              }}
              id=""
              className="sidebar__link__list__item__input"
            />
            <div className="sidebar__link__list__item__content">
              Contact Form
            </div>
          </div>
          <div className="sidebar__link__list__item">
            <input
              type="radio"
              name="sidebar__link__input"
              onChange={() => {
                history.push("/");
              }}
              id=""
              className="sidebar__link__list__item__input"
            />
            <div className="sidebar__link__list__item__content">
              Call Requests
            </div>
          </div>
        </Accordian>
        <Accordian title="Applications">
          <div className="sidebar__link__list__item">
            <input
              type="radio"
              name="sidebar__link__input"
              onChange={() => {
                history.push("/");
              }}
              id=""
              className="sidebar__link__list__item__input"
            />
            <div className="sidebar__link__list__item__content">
              Contact Form
            </div>
          </div>
          <div className="sidebar__link__list__item">
            <input
              type="radio"
              name="sidebar__link__input"
              onChange={() => {
                history.push("/");
              }}
              id=""
              className="sidebar__link__list__item__input"
            />
            <div className="sidebar__link__list__item__content">
              Call Requests
            </div>
          </div>
        </Accordian>
      </div>
      <div className="sidebar__footer">
        <div className="sidebar__link" style={{ margin: 0 }}>
          <input
            type="radio"
            name="sidebar__link__input"
            id=""
            onChange={() => {
              setUser(false);
              window.localStorage.setItem("user", false);
              history.push("/");
            }}
            className="sidebar__link__input"
          />
          <div className="sidebar__link__content">
            <div className="sidebar__link__content__svg">
              <svg
                id="files"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 28.962 26.314"
              >
                <path
                  id="Path_26"
                  data-name="Path 26"
                  d="M905.359,2347.677h22.913l3.025-19.154H902.335Zm20.777-2.5H907.5l-2.235-14.154h23.11Z"
                  transform="translate(-902.335 -2321.363)"
                />
                <rect
                  id="Rectangle_17"
                  data-name="Rectangle 17"
                  width="10.086"
                  height="2.5"
                  transform="translate(9.437 12.79)"
                />
                <rect
                  id="Rectangle_18"
                  data-name="Rectangle 18"
                  width="23.925"
                  height="2.5"
                  transform="translate(2.518 3.58)"
                />
                <rect
                  id="Rectangle_19"
                  data-name="Rectangle 19"
                  width="18.452"
                  height="2.5"
                  transform="translate(5.255)"
                />
              </svg>
            </div>
            Logout
          </div>
        </div>
      </div>
    </div>
  );
}
