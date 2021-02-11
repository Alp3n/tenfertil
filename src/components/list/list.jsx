import React from "react"
import styled from "styled-components"

const StyledList = styled.div`
  width: 250px;
  margin: auto;
`

const StyledListPoint = styled.div`
  display: flex;
  position: relative;
  border-left: 2px solid blue;
`
const StyledBullet = styled.div`
  position: absolute;
  left: -1rem;
  /* align-self: center; */
  background-color: grey;
  justify-self: center;
  /* padding: auto; */
  width: 2rem;
  height: 2rem;
`
const StyledTextBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 3rem;
`

const StyledHeading = styled.h2``
const StyledText = styled.p`
  &:last-child {
    margin: 0;
  }
`

const items = [
  {
    title: "one",
    text: "Some text if this gonan be much lnger whats gonan happen",
  },
  {
    title: "two",
    text: "Some text if this gonan be much lnger whats gonan happen",
  },
  {
    title: "three",
    text: "Some text if this gonan be much lnger whats gonan happen",
  },
  {
    title: "four",
    text: "Some text if this gonan be much lnger whats gonan happen",
  },
]

const List = ({}) => {
  return (
    <StyledList>
      {items.map(item => (
        <StyledListPoint>
          <StyledBullet />
          <StyledTextBox>
            <StyledHeading>{item.title}</StyledHeading>
            <StyledText>{item.text}</StyledText>
          </StyledTextBox>
        </StyledListPoint>
      ))}
    </StyledList>
  )
}

export default List
