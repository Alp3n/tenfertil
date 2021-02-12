import React from "react"
import styled from "styled-components"
import myTheme from "../../styles/myTheme"

const StyledWrapper = styled.div`
  margin: 2rem 0;
  padding-left: 3rem;
  width: 70%;
  border-left: 1px solid ${myTheme.color.button};
  white-space: pre-wrap;
`

const LeftBorderP = ({ text }) => {
  return (
    <StyledWrapper>
      <p>{text}</p>
      <p>
        Chcesz, aby twoje życie nabrało kolorytu i prawdziwego sensu? chcesz
        słyszeć jedno z piękniejszych słów – tata? Nic prostszego - postaraj się
        o potomstwo!
      </p>
      <p>
        Do tego jakże ważnego faktu musisz jednak odpowiednio się przygotować,
        zarówno pod względem mentalnym jak i fizycznym. Pamiętaj, że
        przygotowanie mężczyzny jest tak samo ważne, jak pomoc kobiecie w
        przygotowaniu do okresu ciąży. Wynika to z faktu, że zdrowe plemniki
        odgrywają kluczową rolę w procesie poczęcia. Zarówno odpowiedni styl
        życia przyszłego ojca oraz jego wiek mają wpływ na poczęcie zdrowego i
        upragnionego potomstwa.
      </p>
      <p>
        Pomoże ci w tym <strong>TENfertil ON</strong>
      </p>
    </StyledWrapper>
  )
}

export default LeftBorderP
