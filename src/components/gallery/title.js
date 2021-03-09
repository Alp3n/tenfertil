import React from "react"
import styled from "styled-components"

const StyledWrapper = styled.div`
  margin: 2rem 0;
  padding: 0;
`

const StyledP = styled.p`
  font-size: 18px;
  margin-bottom: 0 !important;
`

const StyledH1 = styled.h1`
  font-size: 48px;
  margin: 0;
`

const Title = ({ heading, paragraph }) => {
  return (
    <StyledWrapper>
      {/* <StyledP>suplement diety dla mężczyzn starających się o dzieci</StyledP>
      <StyledH1>Optymalne wsparcie płodności</StyledH1> */}
      <StyledP>{paragraph}</StyledP>
      <StyledH1>{heading}</StyledH1>
    </StyledWrapper>
  )
}
export default Title
