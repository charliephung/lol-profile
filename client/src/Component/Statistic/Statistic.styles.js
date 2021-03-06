import styled from "styled-components";

export const Card = styled.div`
  height: 150px;
  display: flex;
  align-items: center;
`;

export const BorderRight = styled.div`
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 2px;
    height: 100%;
    background-color: ${props => props.color};
  }
`;

export const Wrapper = styled.div`
  margin-top: 20px;
  margin-left: 10px;
  box-shadow: 3px 4px 14px rgba(59, 43, 91, 0.4);
  border-radius: 5px;
  padding: 10px;
  align-items: center;
  display: flex;
  flex-grow: 1;
`;
