import React from "react"
import styled from "styled-components"

import List from "../list/list"
import GalleryDesktop from "../gallery/gallery-desktop"
import Title from "../gallery/title"
import Breaker from "../breaker/breaker"
import Tips from "../circles/tips"
import LeftBorderP from "../paragraph/left-border-paragraph"
import AboutTenfertil from "../about/about-tenfertil"
import AboutPeople from "../about/about-people"
// import { porady } from "../../content/data/porady"
// import { facts } from "../../content/data/facts"
import { pageDataVN } from "../../content/data/page-data-vn"
import { pageDataPL } from "../../content/data/page-data-pl"

const StyledGalleryWrapper = styled.div`
  width: 55%;
  padding-right: 5%;
  z-index: 999;
`
const Styled50 = styled.div`
  width: 55%;
  z-index: 999;
`

const HomeDesktop = ({ isVN }) => {
  const myPageData = isVN ? pageDataVN : pageDataPL
  return (
    <>
      <StyledGalleryWrapper>
        <GalleryDesktop />
      </StyledGalleryWrapper>
      <Styled50>
        <Title
          heading={myPageData.title.heading}
          paragraph={myPageData.title.paragraph}
        />
      </Styled50>
      <Styled50>
        <AboutTenfertil
          heading={myPageData.aboutTenferil.heading}
          paragraph={myPageData.aboutTenferil.paragraph}
          buttonLabel={myPageData.aboutTenferil.buttonLabel}
        />
      </Styled50>
      <Styled50>
        <LeftBorderP texts={myPageData.leftBorderP} />
      </Styled50>
      <Breaker
        // heading={`Jesteś mężczyzną\ni planujesz zdrowe potomstwo?`}
        // texts={["Czy wiesz, że?"]}
        // id="facts"
        heading={myPageData.breakerFacts.heading}
        texts={myPageData.breakerFacts.texts}
        id={myPageData.breakerFacts.id}
      />
      <Styled50>
        <List list={myPageData.facts} />
      </Styled50>
      <Breaker
        // heading={`Jesteś mężczyzną\ni planujesz zdrowe potomstwo?`}
        // texts={[
        //   "Nic prostszego - zadbaj o siebie!\nPrzygotuj się do tego ważnego faktu pamiętając o naszych radach:",
        // ]}
        heading={myPageData.breakerTips.heading}
        texts={myPageData.breakerTips.texts}
      />
      <Styled50>
        <Tips list={myPageData.tips} width="260px" />
      </Styled50>
      <Breaker
        heading={myPageData.breakerNhi.heading}
        texts={myPageData.breakerNhi.texts}
      />
      <Styled50>
        <AboutPeople isVN={isVN} />
      </Styled50>
    </>
  )
}

export default HomeDesktop
