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
  background-color: ${myTheme.color["portrait-2"]};
  white-space: pre-wrap;
  margin: 2rem 0;
`

const Styled50 = styled.div`
  width: 50%;
  margin-right: 5%;
  z-index: 666;
`

const Breaker = ({ heading, texts, id }) => {
  return (
    <StyledWrapper id={id}>
      <Styled50>
        <h1>{heading}</h1>
        {texts.map(text => (
          <h2 key={text}>{text}</h2>
        ))}
      </Styled50>
    </StyledWrapper>
  )
}

export default Breaker
