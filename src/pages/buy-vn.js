import React from "react"
import { useMediaQuery } from "react-responsive"
import LayoutDesktop from "../components/layout-desktop"
import LayoutMobile from "../components/layout-mobile"
import BuyDesktop from "../components/pages/buy-desktop"
import BuyMobile from "../components/pages/buy-mobile"

import SEO from "../components/seo"

const SecondPage = () => {
  const isBigScreen = useMediaQuery({ query: "(min-width:1201px)" })
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1200px)" })
  return (
    <>
      <SEO title="Kup TENfertil ON" />
      {isBigScreen && (
        <LayoutDesktop isVN={true}>
          <BuyDesktop isVN={true} />
        </LayoutDesktop>
      )}
      {isTabletOrMobile && (
        <LayoutMobile isVN={true}>
          <BuyMobile isVN={true} />
        </LayoutMobile>
      )}
    </>
  )
}

export default SecondPage
