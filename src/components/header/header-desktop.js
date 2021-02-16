import React, { useState } from "react"
import styled from "styled-components"
import { useMediaQuery } from "react-responsive"
import Logo from "../logo/logo"

import Nav from "./nav"
import Menu from "./menu"
import MenuButton from "./menu-button"

const StyledHeader = styled.header`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: space-between;
  align-items: center;
  top: 2rem;
`

const StyledBox = styled.div`
  position: fixed;
  display: flex;
  width: 40%;
  justify-content: space-between;
  align-items: center;
  padding-right: 1rem;
`

const HeaderDesktop = () => {
  const [isVisible, setVisible] = useState(false)
  const openMenu = useMediaQuery({ query: "(max-width: 1630px)" })
  const handleClick = () => {
    setVisible(isVisible => !isVisible)
  }

  return (
    <StyledHeader>
      <StyledBox>
        <Logo width="200px" />
        {openMenu ? (
          <MenuButton handleClick={handleClick} isVisible={isVisible} />
        ) : (
          <Nav flex="flex" />
        )}
      </StyledBox>

      <Menu isVisible={isVisible} />
    </StyledHeader>
  )
}

export default HeaderDesktop
