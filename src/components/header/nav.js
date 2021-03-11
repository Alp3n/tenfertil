import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import myTheme from "../../styles/myTheme"
import { pageDataVN } from "../../content/data/page-data-vn"
import { pageDataPL } from "../../content/data/page-data-pl"

const StyledList = styled.ul`
  margin: 0;
  line-height: 1.45rem;

  @media only screen and (min-width: 1201px) {
    display: flex;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  font-size: 16px;
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
  margin: 0 1.2rem;
`

const Nav = props => {
  const pageData = props.isVN ? pageDataVN : pageDataPL
  return (
    <nav>
      <StyledList {...props}>
        {pageData.navbar.links.map(link => (
          <StyledListPoint key={link.href}>
            <StyledLink to={link.href}>{link.name}</StyledLink>
          </StyledListPoint>
        ))}
      </StyledList>
    </nav>
  )
}

export default Nav
