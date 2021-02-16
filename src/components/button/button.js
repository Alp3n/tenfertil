import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import myTheme from "../../styles/myTheme"

const StyledButtonTo = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  /* min-width: 250px;*/
  max-width: 300px;
  width: 90%;
  border: none;
  background-color: ${myTheme.color.button};
  color: ${myTheme.color.white};
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  padding: 1rem;
  &:hover {
    background-color: ${myTheme.color["blue-4"]};
    cursor: pointer;
  }
`

const StyledButtonHref = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  /* min-width: 250px;*/
  max-width: 250px;
  /* width: 50%; */
  border: none;
  background-color: ${myTheme.color.button};
  color: ${myTheme.color.white};
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  padding: 1rem;

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
