import React from "react"
import styled from "styled-components"
import Breaker from "../breaker/breaker"
import List from "../list/list"
import { online, offline } from "../../content/data/apteki"

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  margin-top: 3rem;
`
const Styled50 = styled.div`
  width: 50%;
`

const BuyDesktop = () => {
  return (
    <StyledWrapper>
      <Breaker
        heading={`Gdzie kupić TENfertil On?`}
        texts={[
          `Nasz suplement diety można znaleźć online\njak i w aptekach różnych miast`,
        ]}
      />
      <Styled50>
        <h1>On-Line:</h1>
        <List list={online} online />
      </Styled50>
      <Styled50>
        <h1>Off-Line:</h1>
        <List list={offline} offline />
      </Styled50>
    </StyledWrapper>
  )
}

export default BuyDesktop
