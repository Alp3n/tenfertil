import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import myTheme from "../styles/myTheme"
import S1weight from "../images/svg/s1weight.svg"
import S2apple from "../images/svg/s2apple.svg"
import S3rope from "../images/svg/s3rope.svg"
import S4body from "../images/svg/s4body.svg"
import S5drugs from "../images/svg/s5drugs.svg"

import List from "../components/list/list"
import GalleryDesktop from "../components/gallery/gallery-desktop"
import HeaderDesktop from "./header/header-desktop"
import Product from "./product/product"

import "./layout.css"
import Title from "./gallery/title"
import Logo from "./logo/logo"
import Circles from "./circles/Circles"
import PersonPortrait from "./circles/PersonPortrait"

const list = [
  {
    header: "Niemal 1/3 pacjentów ",
    text:
      "cierpiących z powodu braku dzieci ma niepłodność idiopatyczną (30%), co oznacza, że nie ustalono przyczyn ?",
  },
  {
    header: "stres oksydacyjny",
    text:
      "Wykazano, że istotny wpływ na potencjał płodności mężczyzny (jakość nasienia) ma stres oksydacyjny. Dowody naukowe wskazują, że składniki zawarte w preparacie TENfertil ON skutecznie zmniejszają stres oksydacyjny.",
  },
  {
    header: "L-Karnityna ",
    text:
      "w postaci winianu - pełni funkcje ochronne wobec błon komórkowych i DNA plemników przed wolnymi rodnikami, zapobiega obumieraniu komórek, poprawia ruchliwość, koncentracje i morfologię plemników. Udowodniono, że właściwy poziom wchłaniania uzyskuje się stosując podaż 2 x dziennie. Efekt leczniczy widoczny jest przy przyjęciu co najmniej 1 g/ dobę. Wyższe dawki powodują uszkodzenie przewodu pokarmowego. TENfertil ON w 4 kapsułkach zawiera łącznie 1500 mg. Schemat podania wg schematu 2x 2 kapsułki na dobę, zapewnia optymalne stężenie L-Karnityny.",
  },
  {
    header: "cholina",
    text:
      "Niezbędna do prawidłowego metabolizmu cholina reguluje gospodarkę lipidową, jest składnikiem fosfolipidów, wchodzących w skład błony komórkowej plemników; działa synergistycznie w kompleksie z witaminą B12, dodatkowo korzystnie poprawia koncentrację,Stąd też w preparacie TENfertil ON zastosowano takie połączenie",
  },
  {
    header: "KOENZYM Q10 ",
    text:
      "ubichion, endogenny antyoksyndant -występuje w mitochondriach  komórek roślinnych i zwierzęcych. Jest odpowiedzialny za przenoszenie elektronóww łańcuchu oddechowym. Suplementacja CoQ10 przez trzy miesiące może już poprawić parametry nasienia (ruchliwość, koncentracja i morfologia plemników), obniżyć poziom markerów stresu oksydacyjnego i zmniejszyć fragmentację DNA u niepłodnych mężczyzn z niepłodnością idiopatyczną.",
  },
  {
    header: "selen organiczny",
    text:
      "Zastosowany związek L-selenometionina (selen  organiczny) jest łatwiej wchłanialny przez człowieka w porównaniu ze związkami nieorganicznymi. Celowo zastosowano niską dawkę – 40 mcg - uwagi na łatwość kumulacji selenu w organizmie. Często pojawia się efekt toksyczny - selenoza (biegunki, mdłości, czosnkowy oddech, zmęczenie, apatia, wypadanie włosów, łysienie, kruchość, łamliwość oraz odbarwienia paznokci, bóle stawów, promocja cukrzycy typu II).",
  },
]

const porady = [
  {
    image: <S1weight />,
    header: "zadbaj",
    text:
      "o prawidłową wagę swojego ciała! Jeśli masz nadwagę, to zrzuć zbędne kilogramy!",
  },
  {
    image: <S2apple />,
    header: "stosuj",
    text: "odpowiednią i zrównoważoną dietę ! Jedz zdrowe produkty!",
  },

  {
    image: <S3rope />,
    header: "ćwicz",
    text: "regularnie – 3 razy w tygodniu! Dużo spaceruj!",
  },
  {
    image: <S4body />,
    header: "noś",
    text:
      "luźne ubrania z naturalnych tkanin! Unikaj obcisłej bielizny i spodni!",
  },
  {
    image: <S5drugs />,
    header: "unikaj",
    text: "wszelkich używek!",
  },
]

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  max-width: 1520px;
  margin: 2rem auto;
`

const StyledWrapperBig = styled.div`
  display: flex;
  align-items: flex-start;
  height: 100vh;
`

const FixedProduct = styled.div`
  position: fixed;
  top: 20%;
  width: auto;
  z-index: 999;
  padding-left: 5%;
`

const StyledRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

// const StyledFooter = styled.footer`
//   position: sticky;
//   bottom: 0;
//   width: 100%;
//   background-color: #f0f0f0;
// `

const StyledButton = styled.button`
  margin-top: 2rem;
  height: 58px;
  width: 40%;
  border: none;
  background-color: ${myTheme.color.button};
  color: ${myTheme.color.white};

  &:hover {
    background-color: ${myTheme.color["blue-4"]};
  }
`

const LayoutDesktop = ({ children }) => {
  const data = useStaticQuery(graphql`
    query ImagesPortraits {
      portraits: allFile(
        filter: { relativeDirectory: { eq: "portrait" } }
        sort: { fields: name }
      ) {
        nodes {
          id
          name
          childImageSharp {
            fluid(quality: 60) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)
  return (
    <div>
      <StyledLayout>
        <FixedProduct>
          <Product />
        </FixedProduct>
        <StyledWrapperBig>
          <HeaderDesktop />
          <StyledRight>
            <GalleryDesktop />
            <Title />
            <div style={{ width: `33rem`, margin: `2rem 0` }}>
              <Logo />
            </div>

            <h2 style={{ width: `72%` }}>
              Jest prostym, innowacyjnym, bezpiecznym, a przede wszystkim
              skutecznym sposobem wspierania zdrowia mężczyzny w wieku
              rozrodczym.
            </h2>
            <p style={{ width: `72%` }}>
              10 składników: L-karnityna, Cholina, Cynk organiczny, Witamina C,
              Koenzym Q10 (ubichinon), L-arginina, Witamina E, Selen organiczny,
              Witamina B12, Kwas foliowy (L-metylofolian wapnia)
            </p>
            <StyledButton>POBIERZ ULOTKĘ</StyledButton>
            <div
              style={{
                margin: `2rem 0`,
                paddingLeft: "3rem",
                width: `72%`,
                borderLeft: `1px solid ${myTheme.color.button}`,
              }}
            >
              <p>
                Chcesz, aby twoje życie nabrało kolorytu i prawdziwego sensu?
                chcesz słyszeć jedno z piękniejszych słów – tata? Nic prostszego
                - postaraj się o potomstwo!{" "}
              </p>
              <p>
                Do tego jakże ważnego faktu musisz jednak odpowiednio się
                przygotować, zarówno pod względem mentalnym jak i fizycznym.
                Pamiętaj, że przygotowanie mężczyzny jest tak samo ważne, jak
                pomoc kobiecie w przygotowaniu do okresu ciąży. Wynika to z
                faktu, że zdrowe plemniki odgrywają kluczową rolę w procesie
                poczęcia. Zarówno odpowiedni styl życia przyszłego ojca oraz
                jego wiek mają wpływ na poczęcie zdrowego i upragnionego
                potomstwa.
              </p>
              <p>Pomoże ci w tym TENfertil-ON</p>
            </div>
            {/* TODO extract div with background header text */}
            <div
              style={{
                display: `flex`,
                flexDirection: "column",
                // alignItems: `center`,
                justifyContent: "center",
                width: `100%`,
                height: `300px`,
                backgroundColor: `${myTheme.color["portrait-2"]}`,
                position: ``,
                paddingTop: `0.8rem`,
              }}
            >
              <h2>
                Jesteś mężczyzną <br /> i planujesz zdrowe potomstwo?
              </h2>
              <p>Czy wiesz że?</p>
            </div>
            {/*  */}
            <List list={list} />
            {/* TODO extract div with background header text */}
            <div
              style={{
                display: `flex`,
                flexDirection: "column",
                width: `100%`,
                height: `300px`,
                backgroundColor: `${myTheme.color["portrait-2"]}`,
              }}
            >
              <h2>
                Jesteś mężczyzną <br /> i planujesz zdrowe potomstwo?
              </h2>
              <p>
                Nic prostszego - zadbaj o siebie! przygotuj się do tego ważnego
                faktu pamiętając o naszych radach:
              </p>
            </div>
            {/*  */}
            {/* TODO extract div with porady */}
            <div>
              {porady.map(porada => (
                <Circles
                  key={porada.header}
                  header={porada.header}
                  image={porada.image}
                  text={porada.text}
                />
              ))}
            </div>
            {/*  */}
            {/* TODO extract div with background header text */}
            <div
              style={{
                display: `flex`,
                flexDirection: "column",
                width: `100%`,
                height: `auto`,
                backgroundColor: `${myTheme.color["portrait-2"]}`,
                position: ``,
                paddingTop: `0.8rem`,
              }}
            >
              <h2>Nutrition Health Institute</h2>
              <p>
                Nutrition Health Institute – to firma, która koncentruje się na
                opracowywaniu i wytwarzaniu najnowszej generacji
                wieloskładnikowych preparatów farmaceutycznych zarówno dla
                kobiet jak i dla mężczyzn, którzy pragną spełnić największe
                swoje marzenie – zostać szczęśliwymi rodzicami. <br />
                <br />
                Nutrition Health Institute chcę pomóc mężczyznom w wieku
                rozrodczym w posiadaniu upragnionego potomstwa. Zachęcamy do
                zapoznania z najnowszej generacji wieloskładnikowym preparatem
                TENfertilON, który jest rekomendowany przez najlepszych w Polsce
                lekarzy- specjalistów zajmujących się leczeniem niepłonności.
              </p>
            </div>
            {/*  */}
            {data.portraits.nodes.map(image => (
              <PersonPortrait
                key={image.id}
                image={image.childImageSharp.fluid}
                text={`something`}
                header={`something`}
              />
            ))}
          </StyledRight>
        </StyledWrapperBig>
        {/* <StyledFooter>© {new Date().getFullYear()} Nhinstitute</StyledFooter> */}
      </StyledLayout>
    </div>
  )
}

export default LayoutDesktop
