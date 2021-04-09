import React from "react"
import styled from "styled-components"

import List from "../list/list"
import GalleryMobile from "../gallery/gallery-mobile"

import BreakerMobile from "../breaker/breaker-mobile"
import TipsMobile from "../circles/tips-mobile"
import AboutPeopleMobile from "../about/about-people-mobile"

import Logo from "../logo/logo"
import Product from "../product/product"
import Button from "../button/button"

import { CgShoppingCart } from "react-icons/cg"
import myTheme from "../../styles/myTheme"
import { Link } from "gatsby"

import { useTranslation } from "react-i18next"

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

const HomeDesktop = () => {
  const { t } = useTranslation()
  return (
    <>
      <GalleryMobile />

      <StyledCart to={"/buy"}>
        <CgShoppingCart size="24px" color={myTheme.color.white} />
      </StyledCart>

      <StyledWrapper>
        <Logo width="280px" />

        <StyledH1>{t("title.heading")}</StyledH1>

        <Product width="300px" />

        <StyledMargin>
          <StyledH2 id="about">{t("aboutTenferil.heading")}</StyledH2>

          <StyledP>{t("aboutTenferil.paragraph")}</StyledP>

          {t("leftBorderP").map(text => (
            <StyledP2 key={text}>{text}</StyledP2>
          ))}

          <Button to={t("leaflet")} label={t("aboutTenferil.buttonLabel")} />
        </StyledMargin>

        <BreakerMobile
          heading={t("breakerFacts.heading")}
          texts={t("breakerFacts.texts")}
          id={t("breakerFacts.id")}
        />

        <StyledMargin>
          <List list={t("facts")} />
        </StyledMargin>

        <div style={{ marginTop: "30px" }}>
          <Product width="300px" />
        </div>

        <BreakerMobile
          heading={t("breakerTips.heading")}
          texts={t("breakerTips.texts")}
          id={t("breakerTips.id")}
        />

        <TipsMobile list={t("tips")} />

        <BreakerMobile
          heading={t("breakerNhi.heading")}
          texts={t("breakerNhi.texts")}
        />

        <AboutPeopleMobile people={t("people")} label={t("learnMore")} />
      </StyledWrapper>
    </>
  )
}

export default HomeDesktop
