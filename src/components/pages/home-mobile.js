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
  width: 90%;
  margin: 1rem auto;
`

const StyledH1 = styled.h1`
  text-align: center;
  font-size: 2rem;
  margin: 1rem 0;
`
const StyledH2 = styled.h2`
  font-size: 1.5rem;
`

const StyledP = styled.p`
  font-size: 0.8rem;
`

const StyledP2 = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  width: 100%;
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

      <StyledWrapper>
        <Logo width="310px" />

        <StyledH1>{subTitle}</StyledH1>

        <Product width="350px" />

        <StyledMargin>
          <StyledH2>
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

        <Product width="350px" />

        <BreakerMobile
          heading={`Jesteś mężczyzną\ni planujesz zdrowe potomstwo?`}
          texts={[
            "Nic prostszego - zadbaj o siebie! przygotuj się do tego ważnego faktu pamiętając o naszych radach:",
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
