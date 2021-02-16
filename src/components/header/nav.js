import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import myTheme from "../../styles/myTheme"

const links = [
  { href: "/#about", name: "O TENFERTIL" },
  { href: "/#facts", name: "FAKTY I PORADY" },
  { href: "#footer", name: "KONTAKT" },
]

const StyledList = styled.ul`
  margin: 0;
  line-height: 1.45rem;

  @media only screen and (min-width: 1201px) {
    display: flex;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 1rem;
  font-weight: 400;
  color: ${myTheme.color.button};

  &:visited {
    color: ${myTheme.color.button};
  }

  &:hover {
    color: ${myTheme.color["blue-4"]};
  }
`

const StyledListPoint = styled.li`
  list-style: none;
  margin: 1rem 1rem;
`

const Nav = props => {
  return (
    <nav>
      <StyledList {...props}>
        {links.map(link => (
          <StyledListPoint key={link.href}>
            <StyledLink to={link.href}>{link.name}</StyledLink>
          </StyledListPoint>
        ))}
      </StyledList>
    </nav>
  )
}

export default Nav
