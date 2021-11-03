import React from "react";
import { Chart } from "react-charts";
import "../Styles/dashboard.scss";

export default function Dashboard() {
  return (
    <div className="dashbaord__container">
      <div className="dashbaord__container__chart">
        <div className="dashbaord__container__chart__heading">Traffic</div>
        <Chart
          data={[
            {
              label: "Series 1",
              data: [
                [0, 1],
                [1, 2],
                [2, 4],
                [3, 2],
                [4, 7],
              ],
            },
            {
              label: "Series 2",
              data: [
                [0, 3],
                [1, 1],
                [2, 5],
                [3, 6],
                [4, 4],
              ],
            },
          ]}
          series={{ showPoints: false }}
          axes={[
            { primary: true, type: "time", position: "bottom" },
            { type: "linear", position: "left" },
          ]}
          tooltip
          dark
        />
      </div>
      <div className="dashbaord__container__chart">
        <div className="dashbaord__container__chart__heading">Involvement</div>
        <Chart
          data={[
            {
              label: "Series 1",
              data: [
                [0, 1],
                [1, 2],
                [2, 4],
                [3, 2],
                [4, 7],
              ],
            },
            {
              label: "Series 2",
              data: [
                [0, 3],
                [1, 1],
                [2, 5],
                [3, 6],
                [4, 4],
              ],
            },
          ]}
          series={{ showPoints: false, type: "bar" }}
          axes={[
            { primary: true, type: "linear", position: "left" },
            { position: "bottom", type: "linear", stacked: true },
          ]}
          tooltip
          dark
        />
      </div>
      <div className="dashbaord__container__chart">
        <div className="dashbaord__container__chart__heading">
          Traffic Sources
        </div>
        <Chart
          data={[
            {
              label: "Series 1",
              data: [
                [0, 1],
                [1, 2],
                [2, 4],
                [3, 2],
                [4, 7],
              ],
            },
            {
              label: "Series 2",
              data: [
                [0, 3],
                [1, 1],
                [2, 5],
                [3, 6],
                [4, 4],
              ],
            },
          ]}
          series={{ showPoints: false, type: "area" }}
          axes={[
            { primary: true, type: "time", position: "bottom" },
            { type: "linear", position: "left" },
          ]}
          tooltip
          dark
        />
      </div>
      <div className="dashbaord__container__chart" style={{ maxWidth: 500 }}>
        <div className="dashbaord__container__chart__heading">Time Spent</div>
        <Chart
          data={[
            {
              label: "Series 1",
              data: [
                [0, 1],
                [1, 2],
                [2, 4],
                [3, 2],
                [4, 7],
              ],
            },
            {
              label: "Series 2",
              data: [
                [0, 3],
                [1, 1],
                [2, 5],
                [3, 6],
                [4, 4],
              ],
            },
          ]}
          series={{ showPoints: false, type: "bar" }}
          axes={[
            { primary: true, type: "time", position: "bottom" },
            { type: "linear", position: "left" },
          ]}
          tooltip
          dark
        />
      </div>
    </div>
  );
}
