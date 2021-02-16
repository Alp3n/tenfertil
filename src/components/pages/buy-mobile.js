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

const BuyDesktop = () => {
  return (
    <StyledWrapper>
      <Product width={`300px`} buttonOff />
      <BreakerMobile
        heading={`Gdzie kupić TENfertil On?`}
        texts={[
          `Nasz suplement diety można znaleźć online\njak i w aptekach różnych miast`,
        ]}
      />
      <StyledMargin>
        <h1>On-Line:</h1>
        <List list={online} online />

        <h1>Off-Line:</h1>
        <List list={offline} offline />
      </StyledMargin>
      <Button to={`/`} label={`WRÓĆ`} />
    </StyledWrapper>
  )
}

export default BuyDesktop
