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

import { porady } from "../../content/data/porady"
import { facts } from "../../content/data/facts"

const StyledGalleryWrapper = styled.div`
  width: 55%;
  padding-right: 5%;
`
const Styled50 = styled.div`
  width: 55%;
`

const HomeDesktop = () => {
  return (
    <>
      <StyledGalleryWrapper>
        <GalleryDesktop />
      </StyledGalleryWrapper>
      <Styled50>
        <Title />
      </Styled50>
      <Styled50>
        <AboutTenfertil />
      </Styled50>
      <Styled50>
        <LeftBorderP />
      </Styled50>
      <Breaker
        heading={`Jesteś mężczyzną\ni planujesz zdrowe potomstwo?`}
        texts={["Czy wiesz że?"]}
        id="facts"
      />
      <Styled50>
        <List list={facts} />
      </Styled50>
      <Breaker
        heading={`Jesteś mężczyzną\ni planujesz zdrowe potomstwo?`}
        texts={[
          "Nic prostszego - zadbaj o siebie! przygotuj się do tego ważnego faktu pamiętając o naszych radach:",
        ]}
      />
      <Styled50>
        <Tips list={porady} />
      </Styled50>
      <Breaker
        heading={`Nutrition Health Institute`}
        texts={[
          "Nutrition Health Institute to firma, która koncentruje się naopracowywaniu i wytwarzaniu najnowszej generacji wieloskładnikowych preparatów farmaceutycznych zarówno dla kobiet jak i dla mężczyzn, którzy pragną spełnić największe swoje marzenie – zostać szczęśliwymi rodzicami.",
          "Nutrition Health Institute chcę pomóc mężczyznom w wieku rozrodczym w posiadaniu upragnionego potomstwa. Zachęcamy do zapoznania z najnowszej generacji wieloskładnikowym preparatem TENfertilON, który jest rekomendowany przez najlepszych w Polsce lekarzy- specjalistów zajmujących się leczeniem niepłonności.",
        ]}
      />
      <Styled50>
        <AboutPeople />
      </Styled50>
    </>
  )
}

export default HomeDesktop
