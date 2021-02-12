/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import styled from "styled-components"

import Header from "./header/header"
import "./layout.css"

const StyledBody = styled.div`
  justify-self: center;
  margin: 0 auto;
  max-width: 1520px;
  /* padding: 0 1.0875rem 1.45rem; */
  /* height: 700px; */
  overflow: hidden;
`

const StyledFooter = styled.footer`
  bottom: 0;
  margin-top: 2rem;
  background-color: #f0f0f0;
`
const LayoutMobile = ({ children }) => {
  return (
    <>
      <Header />
      <StyledBody>
        <main>{children}</main>
      </StyledBody>
      <StyledFooter>© {new Date().getFullYear()} Nhinstitute</StyledFooter>
    </>
  )
}

export default LayoutMobile
