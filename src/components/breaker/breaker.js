import React from "react"
import styled from "styled-components"
import myTheme from "../../styles/myTheme"

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  height: auto;
  padding: 5rem 0;
  background-color: ${myTheme.color.background};
  white-space: pre-wrap;
  margin: 2rem 0;
`

const Styled50 = styled.div`
  width: 50%;
  margin-right: 5%;
  z-index: 666;
`

const StyledH1 = styled.h1`
  font-size: 48px;
`
const StyledH2 = styled.h2`
  font-size: 30px;
`

const Breaker = ({ children, texts, heading, id }) => {
  return (
    <StyledWrapper id={id}>
      <Styled50>
        <StyledH1>{heading}</StyledH1>
        {texts.map(text => (
          <StyledH2 key={text}>{text}</StyledH2>
        ))}
        {children}
      </Styled50>
    </StyledWrapper>
  )
}

export default Breaker
