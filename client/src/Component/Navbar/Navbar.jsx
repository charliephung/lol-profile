import React from "react";
import { Nav, List, Item, Container } from "./Navbar.style.js";
import SearchBox from "./SearchBox/SearchBox";

function Navbar() {
  return (
    <Nav>
      <Container>
        <List floatRight>
          <Item>LoL Profile</Item>
        </List>
        <List floatLeft>
          <Item>
            <SearchBox />
          </Item>
        </List>
      </Container>
    </Nav>
  );
}

export default Navbar;
