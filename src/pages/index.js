import React from "react"
import { useMediaQuery } from "react-responsive"

import LayoutDesktop from "../components/layout-desktop"
import LayoutMobile from "../components/layout-mobile"
import HomeDesktop from "../components/pages/home-desktop"

import SEO from "../components/seo"

const IndexPage = () => {
  const isBigScreen = useMediaQuery({ query: "(min-width:1201px)" })
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1200px)" })
  return (
    <>
      <SEO title="Home" />
      {isBigScreen && (
        <LayoutDesktop>
          <HomeDesktop />
        </LayoutDesktop>
      )}
      {isTabletOrMobile && <LayoutMobile></LayoutMobile>}
    </>
  )
}

export default IndexPage
