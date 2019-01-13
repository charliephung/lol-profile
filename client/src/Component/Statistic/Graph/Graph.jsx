import React from "react";
import { Doughnut } from "react-chartjs-2";

function Graph({ winMatches, lostMatches }) {
  var data;
  if (winMatches === undefined && lostMatches === undefined) {
    data = {
      labels: ["Loading"],
      datasets: [
        {
          backgroundColor: ["#bebebe"]
        }
      ]
    };
  } else {
    data = {
      labels: [`${winMatches} W`, `${lostMatches} L`],
      datasets: [
        {
          label: "KDA",
          data: [winMatches, lostMatches],
          backgroundColor: ["rgba(92, 172, 255, 1)", "rgba(255, 99, 122, 1)"]
        }
      ]
    };
  }
  return <Doughnut width={180} data={data} />;
}

export default Graph;
