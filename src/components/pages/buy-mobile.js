import React from "react"
import styled from "styled-components"
import List from "../list/list"
import { online, offline } from "../../content/data/apteki"
import Product from "../product/product"
import Button from "../button/button"
import myTheme from "../../styles/myTheme"

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 3rem 0;
`

const StyledWrapperBreaker = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin: 2rem 0;
  padding: 3rem 0;
  background-color: ${myTheme.color.background};
  white-space: pre-wrap;
  padding: 1.5rem;
`

const StyledMargin = styled.div`
  width: 90%;
  margin: 0 auto;
`
const StyledH1 = styled.h1`
  font-size: 28px;
  font-weight: 700;
  margin: 1rem 0;
`

const StyledH2 = styled.h2`
  font-size: 20px;
  margin-bottom: 1.45rem;
`

const BuyDesktop = () => {
  return (
    <StyledWrapper>
      <Product width={`300px`} buttonOff />
      <StyledWrapperBreaker>
        <StyledH1>
          Gdzie kupić TENfertil<sup>&reg;</sup>ON?
        </StyledH1>
        <StyledH2>
          {
            "Nasz suplement diety można znaleźć online jak i w aptekach stacjonarnych"
          }
        </StyledH2>
      </StyledWrapperBreaker>
      <StyledMargin>
        <StyledH1>On-Line:</StyledH1>
        <List list={online} online />

        <StyledH1>Stacjonarnie:</StyledH1>
        <List list={offline} offline />
      </StyledMargin>

      <Button to={`/`} label={`WRÓĆ`} />
    </StyledWrapper>
  )
}

export default BuyDesktop
