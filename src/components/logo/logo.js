import React from "react"
import styled from "styled-components"
import ImageLogo from "../image-logo"
import { Link } from "gatsby"

const StyledLink = styled(Link)`
  text-decoration: none;
`

const Logo = ({ isVN, width }) => {
  return (
    <StyledLink to={isVN ? "/vn" : "/"}>
      <ImageLogo width={width} />
    </StyledLink>
  )
}
export default Logo
