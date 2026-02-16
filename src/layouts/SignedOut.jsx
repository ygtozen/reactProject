import React from "react";
import { Button, Menu } from "semantic-ui-react";

export default function SingedOut({signIn}) {
  return (
    <div>
      <Menu>
        <Button onClick={signIn} primary>Giriş Yap</Button>
        <Button primary style={{marginLeft:"0.5em"}}>Kayıt Ol</Button>
      </Menu>
    </div>
  );
}
