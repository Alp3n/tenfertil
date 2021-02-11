import React from "react"
import styled from "styled-components"

import { Link } from "gatsby"
import Nav from "./nav"

const links = [
  { href: "/somewhere", name: "Somewhere" },
  { href: "/somewhere2", name: "Somewhere2" },
  { href: "/somewhere3", name: "Somewhere3" },
]

const StyledMenuWrapper = styled.div`
  position: absolute;
  background-color: white;
  display: flex;
  width: 100%;
  flex-direction: column;
  display: ${props => (props.isVisible ? "block" : "none")};

  z-index: 2;

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
  margin-left: 1.0875rem;
  margin-right: 1.0875rem;
  margin-bottom: 1.45rem;
  border-bottom: 1px solid blue;
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
