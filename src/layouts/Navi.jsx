import React from "react";
import {
  MenuMenu,
  MenuItem,
  Menu,
  Container,
} from 'semantic-ui-react'
import CartSummary from "./CartSummary";
import SingedOut from "./SignedOut";
import SingedIn from "./SignedIn";

export default function Navi() {
  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <MenuItem name="home" />
        <MenuItem name="messages" />

        <MenuMenu position="right">
          <CartSummary />

          <SingedOut />
          <SingedIn />
        </MenuMenu>
        </Container>       
      </Menu>
    </div>
  );
}
