import React from "react"
import styled from "styled-components"
import Button from "../button/button"
import Logo from "../logo/logo"

const StyledWrapper = styled.div`
  /* margin-top: 1rem; */
`

const StyledLogoWrapper = styled.div`
  width: 33rem;
  margin-bottom: 1rem;
`

const StyledH2 = styled.h3`
  font-size: 30px;
  width: 70%;
`

const StyledP = styled.p`
  font-size: 16px;
  width: 70%;
`

const AboutTenfertil = ({ heading, paragraph, buttonLabel, isVN }) => {
  return (
    <StyledWrapper>
      <StyledLogoWrapper id="about">
        <Logo />
      </StyledLogoWrapper>
      <StyledH2>{heading}</StyledH2>
      <StyledP>{paragraph}</StyledP>
      <Button
        to={isVN ? "/tenfertil-ulotka-vn.pdf" : "/tenfertil-ulotka.pdf"}
        label={buttonLabel}
      />
    </StyledWrapper>
  )
}

export default AboutTenfertil
