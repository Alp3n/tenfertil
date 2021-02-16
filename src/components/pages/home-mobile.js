import React from "react"
import styled from "styled-components"

import List from "../list/list"
import GalleryMobile from "../gallery/gallery-mobile"

import BreakerMobile from "../breaker/breaker-mobile"
import TipsMobile from "../circles/tips-mobile"
import AboutPeopleMobile from "../about/about-people-mobile"

import { porady } from "../../content/data/porady"
import { facts } from "../../content/data/facts"
import Logo from "../logo/logo"
import Product from "../product/product"
import Button from "../button/button"

import { CgShoppingCart } from "react-icons/cg"
import myTheme from "../../styles/myTheme"
import { Link } from "gatsby"

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;
`

const StyledMargin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* width: 100%; */
  margin: 1rem 24px;
`

const StyledH1 = styled.h1`
  text-align: center;
  font-size: 28px;
  margin: 2rem 0;
`
const StyledH2 = styled.h2`
  font-size: 20px;
`

const StyledP = styled.p`
  font-size: 12px;
`

const StyledP2 = styled.p`
  font-size: 18px;
  font-weight: 400;
  width: 100%;
`

const StyledCart = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: calc(524px - 48px);
  right: 0;
  width: 48px;
  height: 48px;
  border: none;
  padding: 0;

  background-color: ${myTheme.color.button};
  z-index: 999;
`

const subTitle = "Optymalne wsparcie\npłodności"
const break1 = {
  heading: "Jesteś mężczyzną\ni planujesz zdrowe potomstwo?",
  text: ["Czy wiesz, że?"],
}
const HomeDesktop = () => {
  return (
    <>
      <GalleryMobile />

      {/* Refactor cart button */}
      <StyledCart to={"/buy"}>
        <CgShoppingCart size="24px" color={myTheme.color.white} />
      </StyledCart>

      <StyledWrapper>
        <Logo width="280px" />

        <StyledH1>{subTitle}</StyledH1>

        <Product width="300px" />

        <StyledMargin>
          <StyledH2 id="about">
            Jest prostym, innowacyjnym, bezpiecznym, a przede wszystkim
            skutecznym sposobem wspierania zdrowia mężczyzny w wieku rozrodczym.
          </StyledH2>

          <StyledP>
            10 składników: L-karnityna, Cholina, Cynk organiczny, Witamina C,
            Koenzym Q10 (ubichinon), L-arginina, Witamina E, Selen organiczny,
            Witamina B12, Kwas foliowy (L-metylofolian wapnia)
          </StyledP>

          <StyledP2>
            Chcesz, aby twoje życie nabrało kolorytu i prawdziwego sensu? chcesz
            słyszeć jedno z piękniejszych słów – tata? Nic prostszego - postaraj
            się o potomstwo!
          </StyledP2>

          <StyledP2>
            Do tego jakże ważnego faktu musisz jednak odpowiednio się
            przygotować, zarówno pod względem mentalnym jak i fizycznym.
            Pamiętaj, że przygotowanie mężczyzny jest tak samo ważne, jak pomoc
            kobiecie w przygotowaniu do okresu ciąży. Wynika to z faktu, że
            zdrowe plemniki odgrywają kluczową rolę w procesie poczęcia. Zarówno
            odpowiedni styl życia przyszłego ojca oraz jego wiek, mają wpływ na
            poczęcie zdrowego i upragnionego potomstwa.
          </StyledP2>

          <StyledP2>
            Pomoże ci w tym <strong>TENfertil ON</strong>
          </StyledP2>

          <Button to={`/tenfertil-ulotka.pdf`} label={`pobierz ulotkę`} />
        </StyledMargin>

        <BreakerMobile
          heading={break1.heading}
          texts={break1.text}
          id={"facts"}
        />

        <StyledMargin>
          <List list={facts} />
        </StyledMargin>

        <Product width="300px" />

        <BreakerMobile
          heading={`Jesteś mężczyzną\ni planujesz zdrowe potomstwo?`}
          texts={[
            "Nic prostszego - zadbaj o siebie! Przygotuj się do tego ważnego faktu pamiętając o naszych radach:",
          ]}
        />

        <TipsMobile list={porady} />

        <BreakerMobile
          heading={`Nutrition Health Institute`}
          texts={[
            "Nutrition Health Institute to firma, która koncentruje się na opracowywaniu i wytwarzaniu najnowszej generacji wieloskładnikowych preparatów farmaceutycznych, zarówno dla kobiet jak i dla mężczyzn, którzy pragną spełnić swoje największe marzenie – zostać szczęśliwymi rodzicami.",
            "Nutrition Health Institute chce pomóc mężczyznom w wieku rozrodczym w posiadaniu upragnionego potomstwa. Zachęcamy do zapoznania z najnowszej generacji wieloskładnikowym preparatem TENfertil ON, który jest rekomendowany przez najlepszych w Polsce lekarzy- specjalistów zajmujących się leczeniem niepłonności.",
          ]}
        />

        <AboutPeopleMobile />
      </StyledWrapper>
    </>
  )
}

export default HomeDesktop
