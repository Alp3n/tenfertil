import React from "react"
import styled from "styled-components"
import BreakerMobile from "../breaker/breaker-mobile"
import List from "../list/list"
import { online, offline } from "../../content/data/apteki"
import Product from "../product/product"
import Button from "../button/button"

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 3rem 0;
`
const StyledMargin = styled.div`
  width: 90%;
  margin: 0 auto;
`

const StyledH2 = styled.h2`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 36px;
`

const BuyDesktop = () => {
  return (
    <StyledWrapper>
      <Product width={`300px`} buttonOff />
      <BreakerMobile
        heading={"Gdzie kupić TENfertil&reg;ON?"}
        texts={[
          `Nasz suplement diety można znaleźć online jak i w aptekach różnych miast`,
        ]}
      />
      <StyledMargin>
        <StyledH2>On-Line:</StyledH2>
        <List list={online} online />

        <StyledH2>Off-Line:</StyledH2>
        <List list={offline} offline />
      </StyledMargin>

      <Button to={`/`} label={`WRÓĆ`} />
    </StyledWrapper>
  )
}

export default BuyDesktop
