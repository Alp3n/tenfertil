import React from "react"
import styled from "styled-components"
import myTheme from "../../styles/myTheme"

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin: 2rem 0;
  padding: 3rem 0;
  background-color: ${myTheme.color["portrait-2"]};
  white-space: pre-wrap;
  padding: 1.5rem;
`

const StyledH1 = styled.h1`
  font-size: 2rem;
  margin: 1rem 0;
`
const StyledH2 = styled.h2`
  font-size: 1.25rem;
`

const BreakerMobile = ({ heading, texts, id }) => {
  return (
    <StyledWrapper id={id}>
      <StyledH1>{heading}</StyledH1>
      {texts.map(text => (
        <StyledH2 key={text}>{text}</StyledH2>
      ))}
    </StyledWrapper>
  )
}

export default BreakerMobile
