import React from "react"
import styled from "styled-components"
import myTheme from "../../styles/myTheme"

import Nav from "./nav"

const StyledMenuWrapper = styled.div`
  position: absolute;
  background-color: white;
  width: 100%;
  flex-direction: column;
  display: ${props => (props.isVisible ? "block" : "none")};
  top: 3.25rem;
  z-index: 1;

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
const StyledBreak = styled.div`
  margin: 0 1rem 1rem 1rem;
  /* margin-right: 1rem;
  margin-bottom: 1.45rem; */
  border-bottom: 1px solid ${myTheme.color["blue-4"]};
`

const Menu = (props, { isVisible }) => {
  return (
    <StyledMenuWrapper {...props} className={isVisible ? "opened" : "closed"}>
      <StyledBreak />
      <Nav />
    </StyledMenuWrapper>
  )
}

export default Menu
