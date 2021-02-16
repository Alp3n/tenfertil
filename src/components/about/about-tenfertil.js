import React from "react"
import styled from "styled-components"
import Button from "../button/button"
import Logo from "../logo/logo"

const StyledWrapper = styled.div`
  margin-top: 5rem;
`

const StyledH2 = styled.h3`
  font-size: 30px;
  width: 70%;
`

const StyledP = styled.p`
  font-size: 16px;
  width: 70%;
`

const AboutTenfertil = () => {
  return (
    <StyledWrapper>
      <div style={{ width: `33rem`, margin: `2rem 0` }} id="about">
        <Logo />
      </div>
      <StyledH2>
        Jest prostym, innowacyjnym, bezpiecznym, a przede wszystkim skutecznym
        sposobem wspierania zdrowia mężczyzny w wieku rozrodczym.
      </StyledH2>
      <StyledP>
        10 składników: L-karnityna, Cholina, Cynk organiczny, Witamina C,
        Koenzym Q10 (ubichinon), L-arginina, Witamina E, Selen organiczny,
        Witamina B12, Kwas foliowy (L-metylofolian wapnia)
      </StyledP>
      <Button to={`/tenfertil-ulotka.pdf`} label={`pobierz ulotkę`} />
    </StyledWrapper>
  )
}

export default AboutTenfertil
