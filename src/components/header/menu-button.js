import React from "react"
import styled from "styled-components"
import { GrMenu, GrClose } from "react-icons/gr"
import myTheme from "../../styles/myTheme"

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin: 0 1.0875rem; */
  border: none;
  background-color: transparent;

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
      {isVisible ? (
        <GrClose size="24px" color={myTheme.color["blue-4"]} />
      ) : (
        <GrMenu size="24px" color={myTheme.color["blue-4"]} />
      )}
    </StyledButton>
  )
}

export default MenuButton
