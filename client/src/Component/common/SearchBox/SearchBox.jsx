import React, { Component } from "react";
import styled from "styled-components";

const Group = styled.div`
  display: flex;
  align-items: center;
  position: "relative";
`;

const Input = styled.input`
  height: 40px;
  padding: 0 10px;
  outline: none;
  border: none;
  border-radius: 10px 0px 0px 10px;
  font-size: 16px;
`;
const Label = styled.label`
  display: flex;
  align-items: center;
`;
const Button = styled.button`
  font-weight: bold;
  color: white;
  font-size: 16px;
  height: 40px;
  margin: 0;
  border: none;
  padding: 5px 20px;
  cursor: pointer;
  border-radius: 0px 10px 10px 0px;
  background-color: transparent;
  background-image: linear-gradient(to right, #00fff2, #5cadff);
`;

export class SearchBox extends Component {
  render() {
    return (
      <Group>
        <Input placeholder="Summoner name" />
        <Label>
          <Button>Search</Button>
        </Label>
      </Group>
    );
  }
}

export default SearchBox;
