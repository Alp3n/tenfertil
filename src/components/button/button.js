import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import myTheme from "../../styles/myTheme"

const StyledButtonTo = styled(Link)`
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

const StyledButtonHref = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
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
    <>
      {href ? (
        <StyledButtonHref href={href} target={`_blank`}>
          {label}
        </StyledButtonHref>
      ) : (
        <StyledButtonTo to={to}>{label}</StyledButtonTo>
      )}
    </>
  )
}

export default Button
