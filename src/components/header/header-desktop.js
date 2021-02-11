import React from "react"
import styled from "styled-components"

import Logo from "../logo/logo"

import Nav from "./nav"

const StyledHeader = styled.header`
  display: flex;
  width: 80%;
  justify-content: space-between;
  align-items: center;
`

const HeaderDesktop = ({}) => {
  return (
    <StyledHeader>
      <Logo width="200px" />
      <Nav
        flex="flex"
        //links
      />
    </StyledHeader>
  )
}

export default HeaderDesktop
