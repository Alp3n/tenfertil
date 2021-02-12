import React from "react"
import styled from "styled-components"
import Button from "../button/button"
import Logo from "../logo/logo"

const StyledWrapper = styled.div`
  margin-top: 5rem;
`

const AboutTenfertil = () => {
  return (
    <StyledWrapper>
      <div style={{ width: `33rem`, margin: `2rem 0` }} id="about">
        <Logo />
      </div>
      <h2 style={{ width: `70%` }}>
        Jest prostym, innowacyjnym, bezpiecznym, a przede wszystkim skutecznym
        sposobem wspierania zdrowia mężczyzny w wieku rozrodczym.
      </h2>
      <p style={{ width: `70%` }}>
        10 składników: L-karnityna, Cholina, Cynk organiczny, Witamina C,
        Koenzym Q10 (ubichinon), L-arginina, Witamina E, Selen organiczny,
        Witamina B12, Kwas foliowy (L-metylofolian wapnia)
      </p>
      <Button to={`/tenfertil-ulotka.pdf`} label={`pobierz ulotkę`} />
    </StyledWrapper>
  )
}

export default AboutTenfertil
