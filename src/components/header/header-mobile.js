import React, { useState } from "react"
import styled from "styled-components"

import Logo from "../logo/logo"
import Menu from "./menu"
import MenuButton from "./menu-button"

const StyledHeaderSmall = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: space-between;
  align-items: center;
`

const HeaderMobile = ({ isVN }) => {
  const [isVisible, setVisible] = useState(false)

  const handleClick = () => {
    setVisible(isVisible => !isVisible)
  }

  return (
    <>
      <StyledHeaderSmall>
        <Logo width="125px" />
        <MenuButton handleClick={handleClick} isVisible={isVisible} />
      </StyledHeaderSmall>

      <Menu isVisible={isVisible} isVN={isVN} />
    </>
  )
}
export default HeaderMobile
