import React, { useState } from "react"
import styled from "styled-components"

import Logo from "../logo/logo"
import Menu from "./menu"
import MenuButton from "./menu-button"

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f0f0f0;
`

const StyledHeaderSmall = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background-color: #f0f0f0;
`

const HeaderMobile = ({}) => {
  const [isVisible, setVisible] = useState(false)

  const handleClick = () => {
    setVisible(isVisible => !isVisible)
  }

  return (
    <>
      <StyledHeader>
        <StyledHeaderSmall>
          <Logo width="125px" />
          <MenuButton handleClick={handleClick} isVisible={isVisible} />
        </StyledHeaderSmall>
      </StyledHeader>
      <Menu
        isVisible={isVisible}
        //  links={links}
      />
    </>
  )
}
export default HeaderMobile
