import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 20px;
  width: 350px;
  box-shadow: 3px 4px 14px rgba(59, 43, 91, 0.4);
  border-radius: 5px;
  padding: 10px;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const Card = styled.div`
  height: 150px;
  display: flex;
  align-items: center;
  font-size: 15px;
  font-weight: 600;
`;
export const RankIcon = styled.img`
  width: 120px;
  height: 120px;
  padding-right: 40px;
`;
export const Heading = styled.h1``;
export const textColor = {
  BRONZE: "#683d27",
  CHALLENGER: "#1574f6",
  DIAMOND: "#506b9c",
  GOLD: "#ecc57d",
  GRANDMASTER: "#fe585a",
  IRON: "#595050",
  MASTER: "#a13f8b",
  PLATINUM: "#77dcd6",
  SILVER: "#829ba3"
};
