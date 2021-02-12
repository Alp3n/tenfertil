import React from "react"
import styled from "styled-components"

import Logo from "../logo/logo"

import Nav from "./nav"

const StyledHeader = styled.header`
  position: fixed;
  display: flex;
  width: 40%;
  justify-content: space-between;
  align-items: center;
  top: 2rem;
  margin-left: 5%;
`

const HeaderDesktop = () => {
  return (
    <StyledHeader>
      <Logo width="200px" />
      <Nav flex="flex" />
    </StyledHeader>
  )
}

export default HeaderDesktop
