import React from "react";
import { Wrapper, Card } from "./Overview.styles";
import { Doughnut } from "react-chartjs-2";

function Overview() {
  return (
    <Wrapper>
      <Card>
        <Doughnut
          width={150}
          data={{
            labels: ["W", "L"],
            datasets: [
              {
                label: "KDA",
                data: [2, 3],
                backgroundColor: [
                  "rgba(92, 172, 255, 1)",
                  "rgba(255, 99, 122, 1)"
                ]
              }
            ]
          }}
        />
      </Card>
    </Wrapper>
  );
}

export default Overview;
