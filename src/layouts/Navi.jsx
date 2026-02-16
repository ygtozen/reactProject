import React, { useState } from "react";
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
  const [isAuthenticated, setIsAuthenticated] = useState(true) // ya authenti cadir yada değildir default false

  function handleSignOut() { // Bunu çağıracak olan alt component, alt componente bu fonk. yollamak lazım
    setIsAuthenticated(false)
  }

  function handleSignIn() {
    setIsAuthenticated(true)
  }

  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <MenuItem name="home" />
          <MenuItem name="messages" />

        <MenuMenu position="right">
          <CartSummary />

          {isAuthenticated ? <SingedIn signOut={handleSignOut} bisey="1" /> : <SingedOut signIn={handleSignIn} />}
                    
        </MenuMenu>
        </Container>       
      </Menu>
    </div>
  );
}
