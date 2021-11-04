import React from "react";
import { useHistory } from "react-router";
import "../Styles/sidebar.scss";

function Accordian({ title, value, children, onChange, svg }) {
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
          <div className="sidebar__link__content__svg">{svg}</div>
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
              history.push("/dashboard/");
            }}
            id=""
            className="sidebar__link__input"
          />
          <div className="sidebar__link__content">
            <div className="sidebar__link__content__svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 97.547 98.115"
                fill="currentColor"
              >
                <g
                  id="Group_10422"
                  data-name="Group 10422"
                  transform="translate(-9030 -2607)"
                >
                  <rect
                    id="Rectangle_7125"
                    data-name="Rectangle 7125"
                    width="43.106"
                    height="54.122"
                    transform="translate(9030 2607.05)"
                  />
                  <rect
                    id="Rectangle_7126"
                    data-name="Rectangle 7126"
                    width="42.88"
                    height="54.316"
                    transform="translate(9084.614 2650.754)"
                  />
                  <rect
                    id="Rectangle_7127"
                    data-name="Rectangle 7127"
                    width="42.948"
                    height="32.444"
                    transform="translate(9084.6 2607)"
                  />
                  <rect
                    id="Rectangle_7128"
                    data-name="Rectangle 7128"
                    width="42.923"
                    height="32.561"
                    transform="translate(9030.034 2672.553)"
                  />
                </g>
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
              history.push("/dashboard/building-information");
            }}
            id=""
            className="sidebar__link__input"
          />
          <div className="sidebar__link__content">
            <div className="sidebar__link__content__svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 123.356 113.774"
              >
                <g
                  id="Group_10421"
                  data-name="Group 10421"
                  transform="translate(-9094.751 -2790.207)"
                >
                  <path
                    id="Path_2409"
                    data-name="Path 2409"
                    d="M80.822,183.206H131.21a2.15,2.15,0,0,1,1.491,2.409c-.035,11.646-.021,23.291-.021,34.937V222h43.2c2.417,0,2.717.295,2.717,2.681q0,28.673,0,57.346v1.694h9.508V296.98c-.558-.035-1.115-.1-1.672-.1q-60.006-.008-120.013,0H64.751v-13.1H79.434v-1.809q0-48.008-.015-96.017c0-1.21.153-2.225,1.4-2.741m44.351,51.944q0-21.211,0-42.422c0-1.752-.3-2.049-2.007-2.049q-17.177,0-34.354,0c-1.7,0-1.983.271-1.983,1.932q0,42.543,0,85.086c0,1.657.289,1.928,1.987,1.928h34.113c2.04,0,2.245-.208,2.245-2.294q0-21.091,0-42.182M171.042,254.5q0-11.564,0-23.127c0-1.771-.268-2.041-2.012-2.041q-17.108,0-34.214,0c-1.81,0-2.123.3-2.123,2.08q0,23.067,0,46.133c0,1.785.307,2.082,2.1,2.082h34.094c1.945,0,2.153-.2,2.153-2.121q0-11.5,0-23.007"
                    transform="translate(9030 2607.001)"
                  />
                  <path
                    id="Path_2411"
                    data-name="Path 2411"
                    d="M129.793,343.625c0,1.888-.022,3.776.01,5.663.014.818-.292,1.167-1.124,1.161q-4.58-.031-9.16,0c-.812.007-1.162-.28-1.157-1.121q.034-5.664,0-11.328c-.007-.915.388-1.175,1.239-1.166,2.972.03,5.946.041,8.919,0,1.03-.016,1.32.408,1.291,1.37-.053,1.806-.015,3.615-.015,5.422"
                    transform="translate(9003.16 2530.085)"
                  />
                  <path
                    id="Path_2412"
                    data-name="Path 2412"
                    d="M164.557,343.626c0,1.888-.022,3.776.01,5.663.014.818-.294,1.165-1.125,1.16q-4.579-.031-9.159,0c-.814.007-1.161-.286-1.156-1.124q.033-5.664,0-11.327c-.007-.918.393-1.172,1.242-1.164,2.972.029,5.946.041,8.918,0,1.032-.016,1.317.412,1.289,1.372-.053,1.806-.015,3.615-.015,5.422"
                    transform="translate(8985.755 2530.085)"
                  />
                  <path
                    id="Path_2414"
                    data-name="Path 2414"
                    d="M153.131,322.464c0-7.127.033-14.257-.014-21.38-.025-3.834.241-5.526,1.291-5.439a59.619,59.619,0,0,0,8.917.014c.973-.064,1.249,1.452,1.241,5.141q-.049,22.353,0,44.705c.006,3.454-.255,4.94-1.173,4.889a86.3,86.3,0,0,0-9.159,0c-.864.044-1.121-1.38-1.11-4.6.027-7.773.009-15.548.008-23.323"
                    transform="translate(8985.758 2509.53)"
                  />
                  <path
                    id="Path_2415"
                    data-name="Path 2415"
                    d="M129.789,271.538c0,4.641-.034,9.283.014,13.92.025,2.4-.351,3.168-1.28,3.137-2.972-.1-5.945-.112-8.916.005-.964.038-1.26-.886-1.252-3.2q.047-13.92,0-27.842c-.009-2.389.344-3.131,1.272-3.1q4.458.167,8.917,0c.94-.034,1.288.779,1.263,3.152-.05,4.637-.015,9.279-.015,13.92"
                    transform="translate(9003.163 2571.325)"
                  />
                  <path
                    id="Path_2417"
                    data-name="Path 2417"
                    d="M129.793,220.051c0,1.807-.03,3.615.013,5.421.021.9-.246,1.317-1.224,1.3q-4.518-.062-9.036,0c-.9.011-1.192-.338-1.185-1.205q.042-5.6,0-11.2c-.006-.886.326-1.2,1.21-1.189q4.517.055,9.036,0c.892-.01,1.214.336,1.2,1.211-.037,1.886-.011,3.774-.011,5.662"
                    transform="translate(9003.159 2591.996)"
                  />
                  <path
                    id="Path_2419"
                    data-name="Path 2419"
                    d="M209.471,343.58c0-1.848.032-3.7-.013-5.542-.022-.9.339-1.2,1.209-1.2q4.519.043,9.038,0c.9-.01,1.18.349,1.173,1.217q-.047,5.6,0,11.2c.008.889-.314,1.205-1.194,1.2q-4.519-.049-9.038,0c-.888.009-1.209-.333-1.188-1.215.044-1.886.013-3.775.013-5.662"
                    transform="translate(8957.55 2530.08)"
                  />
                  <path
                    id="Path_2420"
                    data-name="Path 2420"
                    d="M255.628,343.725c0,1.848-.032,3.7.013,5.542.023.9-.324,1.2-1.2,1.191q-4.518-.048-9.037,0c-.9.009-1.19-.348-1.183-1.221q.046-5.6,0-11.2c-.007-.9.35-1.2,1.216-1.19q4.518.043,9.036,0c.908-.01,1.186.361,1.166,1.223-.042,1.887-.012,3.775-.012,5.662"
                    transform="translate(8940.145 2530.081)"
                  />
                  <path
                    id="Path_2421"
                    data-name="Path 2421"
                    d="M220.863,303.562c0,3.537-.025,7.076.012,10.613.015,1.52-.247,2.163-1.1,2.145-3.051-.065-6.1-.07-9.154,0-.919.023-1.167-.684-1.161-2.29q.046-10.387,0-20.774c-.008-1.724.273-2.429,1.239-2.4q4.456.125,8.912,0c.935-.027,1.3.531,1.271,2.321-.052,3.46-.015,6.924-.015,10.386"
                    transform="translate(8957.55 2553.105)"
                  />
                  <path
                    id="Path_2422"
                    data-name="Path 2422"
                    d="M255.628,297.7c0,1.886-.02,3.773.01,5.659.012.766-.263,1.078-1.05,1.071q-4.636-.039-9.274,0c-.869.009-1.094-.374-1.089-1.168q.036-5.6,0-11.2c-.007-.872.288-1.219,1.187-1.209,3.051.036,6.1.03,9.153,0,.778-.007,1.082.288,1.071,1.061-.026,1.926-.008,3.853-.008,5.78"
                    transform="translate(8940.144 2553.102)"
                  />
                </g>
              </svg>
            </div>
            Building Information
          </div>
        </div>

        <Accordian
          title="Applications"
          value={9}
          svg={
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
          }
        >
          <div className="sidebar__link__list__item">
            <input
              type="radio"
              name="sidebar__link__input"
              onChange={() => {
                history.push("/dashboard/contacts");
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
                history.push("/dashboard/call-requests");
              }}
              id=""
              className="sidebar__link__list__item__input"
            />
            <div className="sidebar__link__list__item__content">
              Call Requests
            </div>
          </div>
        </Accordian>
        <Accordian
          title="Upcoming Projects"
          svg={
            <svg
              id="Group_10424"
              data-name="Group 10424"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 87.738 108.337"
              fill="currentColor"
            >
              <defs>
                <clipPath id="clip-path">
                  <rect
                    id="Rectangle_7129"
                    data-name="Rectangle 7129"
                    width="87.738"
                    height="108.337"
                    fill="none"
                  />
                </clipPath>
              </defs>
              <g
                id="Group_10423"
                data-name="Group 10423"
                clip-path="url(#clip-path)"
              >
                <path
                  id="Path_2423"
                  data-name="Path 2423"
                  d="M0,97.9H50.073c-5.481-17.5,9.6-32.659,27.171-27.208V28.225c-7.887,0-15.611,0-23.336,0-4.629,0-4.925-.3-4.927-4.977,0-7.72,0-15.439,0-23.245H0Z"
                  transform="translate(0 0)"
                  fill="#fff"
                />
                <path
                  id="Path_2424"
                  data-name="Path 2424"
                  d="M83.62,24.815h19.365L83.62,5.446Z"
                  transform="translate(-29.32 -1.91)"
                  fill="#fff"
                />
                <path
                  id="Path_2425"
                  data-name="Path 2425"
                  d="M77.244,28.224V70.692C59.674,65.242,44.593,80.4,50.073,97.9H0V0H48.98c0,7.806,0,15.526,0,23.245,0,4.673.3,4.974,4.928,4.977"
                />
                <path
                  id="Path_2426"
                  data-name="Path 2426"
                  d="M97.535,111.141A18.083,18.083,0,1,1,79.42,129.186a18.121,18.121,0,0,1,18.115-18.045m2.586,15.5c-3.761,0-6.772.006-9.783,0-1.962-.005-4.3-.227-4.356,2.519s2.221,2.669,4.224,2.657c3.125-.019,6.249-.005,9.929-.005-.82.949-1.077,1.294-1.382,1.591-1.346,1.313-1.966,2.981-.222,4.061.858.532,2.881.134,3.806-.581a29.947,29.947,0,0,0,5.675-5.7,4.067,4.067,0,0,0,.076-3.826,35.518,35.518,0,0,0-6.125-6.164c-.778-.619-2.41-.163-3.651-.2a28.114,28.114,0,0,0,.179,3.722c.087.512.754.927,1.631,1.925"
                  transform="translate(-27.847 -38.97)"
                />
                <path
                  id="Path_2427"
                  data-name="Path 2427"
                  d="M83.62,24.815V5.446l19.365,19.369Z"
                  transform="translate(-29.32 -1.91)"
                />
              </g>
            </svg>
          }
        >
          <div className="sidebar__link__list__item">
            <input
              type="radio"
              name="sidebar__link__input"
              onChange={() => {
                history.push("/dashboard/project-updates");
              }}
              id=""
              className="sidebar__link__list__item__input"
            />
            <div className="sidebar__link__list__item__content">
              Projects Updates
            </div>
          </div>
          <div className="sidebar__link__list__item">
            <input
              type="radio"
              name="sidebar__link__input"
              onChange={() => {
                history.push("/dashboard/gallery");
              }}
              id=""
              className="sidebar__link__list__item__input"
            />
            <div className="sidebar__link__list__item__content">Gallery</div>
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
