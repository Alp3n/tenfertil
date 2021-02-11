import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const links = [
  { href: "/somewhere", name: "O TENFERTIL" },
  { href: "/somewhere2", name: "FAKTY I PORADY" },
  { href: "/somewhere3", name: "KONTAKT" },
]

const StyledList = styled.ul`
  display: ${props => props.flex};
  margin: 0;
  line-height: 1.45rem;
  justify-content: space-between;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 0.8rem;

  &:visited {
    color: blue;
  }

  .active {
    color: red;
  }
`

const StyledListPoint = styled.li`
  list-style: none;
  margin: 0 1rem;
`

const Nav = props => {
  return (
    <nav>
      <StyledList {...props}>
        {links.map(link => (
          <StyledListPoint key={link.href}>
            <StyledLink to={link.href} activeClassName={`active`}>
              {link.name}
            </StyledLink>
          </StyledListPoint>
        ))}
      </StyledList>
    </nav>
  )
}

export default Nav
