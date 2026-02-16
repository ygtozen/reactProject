import React from 'react'
import { Dropdown, DropdownItem, DropdownMenu, Image, MenuItem } from 'semantic-ui-react'

export default function SingedIn({signOut}) {
  return (
    <div>
      <MenuItem>
        <Image avatar spaced="right" src="https://upload.wikimedia.org/wikipedia/commons/6/6a/Mona_Lisa.jpg" />
        <Dropdown pointing="top left" text="Yiğit">
          <DropdownMenu>
            <DropdownItem text="Bilgilerim" icon="info" />
            <DropdownItem onClick={signOut} text="Çıkış Yap" icon="sign-out" />
          </DropdownMenu>
        </Dropdown>
      </MenuItem>
    </div>
  )
}
