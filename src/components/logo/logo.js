import React from "react"
import styled from "styled-components"
import ImageLogo from "../image-logo"
import { Link } from "gatsby"

const StyledLink = styled(Link)`
  text-decoration: none;
`

const Logo = ({ width }) => {
  return (
    <StyledLink to="/">
      <ImageLogo width={width} />
    </StyledLink>
  )
}
export default Logo
