import styled, { createGlobalStyle } from "styled-components";

export const Container = styled.div`
  width: 1000px;
  margin: 0 auto;
`;
export const Flex = styled.div`
  display: flex;
  align-items: flex-start;
  flex: 1;
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: ${props => props.widthPercent}%;
`;

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: 'PT Sans', sans-serif;
        color: #868686;
    }
`;
