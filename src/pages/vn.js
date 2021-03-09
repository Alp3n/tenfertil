import React from "react"
import { useMediaQuery } from "react-responsive"

import LayoutDesktop from "../components/layout-desktop"
import LayoutMobile from "../components/layout-mobile"
import HomeDesktop from "../components/pages/home-desktop"
import HomeMobile from "../components/pages/home-mobile"

import SEO from "../components/seo"

const IndexPageVN = () => {
  const isBigScreen = useMediaQuery({ query: "(min-width:1201px)" })
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1200px)" })
  return (
    <>
      <SEO title="TENfertil ON to suplement diety dla mężczyzn starających się o dzieci" />
      {isBigScreen && (
        <LayoutDesktop isVN={true}>
          <HomeDesktop isVN={true} />
        </LayoutDesktop>
      )}
      {isTabletOrMobile && (
        <LayoutMobile isVN={true}>
          <HomeMobile isVN={true} />
        </LayoutMobile>
      )}
    </>
  )
}

export default IndexPageVN
