import styled from "styled-components";

export const Nav = styled.nav`
  background-image: linear-gradient(to right, #667eea, #764ba2);
`;

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  width: 1000px;
  height: 60px;
  align-items: center;
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  margin-left: ${props => (props.floatLeft ? "auto" : "")}
  margin-right: ${props => (props.floatRight ? "auto" : "")}
  
`;
export const Item = styled.li`
  color: white;
  font-size: 26px;
  padding: 0 20px;
`;
