import React, { useState } from "react"
import styled from "styled-components"
import { useMediaQuery } from "react-responsive"

import LayoutDesktop from "../components/layout-desktop"
import LayoutMobile from "../components/layout-mobile"

import SEO from "../components/seo"

const IndexPage = () => {
  const isBigScreen = useMediaQuery({ query: "(min-width:1201px)" })
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1200px)" })
  return (
    <>
      <SEO title="Home" />
      {isBigScreen && <LayoutDesktop />}
      {isTabletOrMobile && <LayoutMobile />}
    </>
  )
}

export default IndexPage
