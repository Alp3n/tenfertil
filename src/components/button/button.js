import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import myTheme from "../../styles/myTheme"
const StyledButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  height: 58px;
  min-width: 250px;
  max-width: 300px;
  border: none;
  background-color: ${myTheme.color.button};
  color: ${myTheme.color.white};
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.2rem;

  &:hover {
    background-color: ${myTheme.color["blue-4"]};
    cursor: pointer;
  }
`
const Button = ({ label, to, href }) => {
  return (
    <StyledButton to={to} href={href} target={href && `_blank`}>
      {label}
    </StyledButton>
  )
}

export default Button