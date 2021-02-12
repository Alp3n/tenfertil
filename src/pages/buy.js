import React from "react"
import { useMediaQuery } from "react-responsive"
import LayoutDesktop from "../components/layout-desktop"
import LayoutMobile from "../components/layout-mobile"
import BuyDesktop from "../components/pages/buy-desktop"

import SEO from "../components/seo"

const SecondPage = () => {
  const isBigScreen = useMediaQuery({ query: "(min-width:1201px)" })
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1200px)" })
  return (
    <>
      <SEO title="Buy" />
      {isBigScreen && (
        <LayoutDesktop>
          <BuyDesktop />
        </LayoutDesktop>
      )}
      {isTabletOrMobile && <LayoutMobile />}
    </>
  )
}

export default SecondPage
