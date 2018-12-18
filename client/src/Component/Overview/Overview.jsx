import React from "react";
import styled from "styled-components";

const Card = styled.div`
  height: 150px;
  display: flex;
  align-items: center;
`;
const Wrapper = styled.div`
  margin-top: 20px;
  margin-left: 10px;
  box-shadow: 3px 4px 14px rgba(59, 43, 91, 0.4);
  border-radius: 5px;
  padding: 10px;
  align-items: center;
  display: flex;
  flex-grow: 1;
`;

function Overview() {
  return (
    <Wrapper>
      <Card>
        <h1>Hello</h1>
      </Card>
    </Wrapper>
  );
}

export default Overview;
