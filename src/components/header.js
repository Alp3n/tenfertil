import { Link } from "gatsby"
import styled from "styled-components"
import PropTypes from "prop-types"
import React from "react"

import Apple from "../images/svg/apple.svg"
import ImageLogo from "./imageLogo"

const StyledHeader = styled.header`
  background-color: white;
  margin-bottom: 1.45rem;
`
const StyledLogoWrapper = styled.div`
  margin: 0 auto;
  max-width: 1520;
  padding: 1.45rem 1.0875rem;
`

const StyledLogo = styled.h1`
  margin: 0;
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <StyledLogoWrapper>
      <StyledLogo>
        <ImageLogo />
        <Link
          to="/"
          style={{
            color: `Blue`,
            textDecoration: `none`,
          }}
        >
          {/* siteTitle */}
        </Link>
      </StyledLogo>
    </StyledLogoWrapper>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
