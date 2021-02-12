import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import List from "./list/list"
import GalleryDesktop from "./gallery/gallery-desktop"
import HeaderDesktop from "./header/header-desktop"
import Product from "./product/product"

import "./layout.css"
import Title from "./gallery/title"

import Breaker from "./breaker/breaker"
import Tips from "./circles/tips"

import LeftBorderP from "./paragraph/left-border-paragraph"
import AboutTenfertil from "./about/about-tenfertil"
import FooterDesktop from "./footer/footer-desktop"
import AboutPeople from "./about/about-people"

import { porady } from "../content/data/porady"
import { facts } from "../content/data/facts"

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const StyledWrapperBig = styled.div`
  display: flex;
  flex-direction: column;
`

const FixedProduct = styled.div`
  position: fixed;
  top: 20%;
  width: 50%;
  z-index: 999;
`

const StyledRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 2rem;
`

const Styled50 = styled.div`
  width: 55%;
`

const LayoutDesktop = ({ children }) => {
  return (
    <StyledLayout>
      <HeaderDesktop />
      <FixedProduct>
        <Product />
      </FixedProduct>
      <StyledRight>{children}</StyledRight>

      <FooterDesktop
        email={`info@nhinstitute.pl`}
        number={`+48 666 368 005`}
        company={`Sp.z.o.o. Białozora 9, 02-817 Warszawa, Polska KRS: 0000861627. REGON: 38710727. NIP: 9512507706.`}
      />
    </StyledLayout>
  )
}

export default LayoutDesktop
