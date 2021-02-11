import React from "react"
import styled from "styled-components"
import { GrMenu, GrClose } from "react-icons/gr"

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.45rem 1.0875rem;
  border: none;

  .opened {
    animation: fadeOut ease 0.35s;
  }

  .closed {
    animation: fadeIn ease 0.35s;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 100;
    }
  }
  @keyframes fadeOut {
    100% {
      opacity: 100;
    }
    0% {
      opacity: 0;
    }
  }
`

const MenuButton = ({ handleClick, isVisible }) => {
  return (
    <StyledButton
      onClick={() => handleClick()}
      className={isVisible ? "opened" : "closed"}
    >
      {isVisible ? <GrClose size="24px" /> : <GrMenu size="24px" />}
    </StyledButton>
  )
}

export default MenuButton
