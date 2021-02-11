import React from "react"
import styled from "styled-components"

const StyledWrapper = styled.div`
  margin: 2rem 0;
  padding: 0;
`

const StyledP = styled.p`
  margin-bottom: 0 !important;
`

const StyledH1 = styled.h1`
  margin: 0;
`

const Title = ({ title, subTitle }) => {
  return (
    <StyledWrapper>
      <StyledP>suplement diety dla mężczyzn starających się o dzieci</StyledP>
      <StyledH1>Optymalne wsparcie płodności</StyledH1>
    </StyledWrapper>
  )
}
export default Title
