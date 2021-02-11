import React from "react"
import styled from "styled-components"
import myTheme from "../../styles/myTheme"
import Circles from "./circles"

const StyledList = styled.div`
  width: auto;
  margin: 1rem;
`

const StyledListPoint = styled.div`
  display: flex;
  position: relative;
  border-left: 2px solid ${myTheme.color.button};
`
const StyledBullet = styled.div`
  position: absolute;
  left: -1rem;
  justify-self: center;
  width: 2rem;
  height: 2rem;
  /* box-shadow: 3px 3px 5px grey; */
  border-radius: 50%;
`

const StyledTextBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 3rem;
  margin-bottom: 2rem;
  width: 72%;
`

const StyledHeading = styled.h2`
  text-transform: uppercase;
`
const StyledText = styled.p`
  &:last-child {
    margin: 0;
  }
`

const List = ({ list }) => {
  return (
    <StyledList>
      {list.map(item => (
        <StyledListPoint key={item.header}>
          <StyledBullet>
            <Circles />
          </StyledBullet>
          <StyledTextBox>
            <StyledHeading>{item.header}</StyledHeading>
            <StyledText>{item.text}</StyledText>
          </StyledTextBox>
        </StyledListPoint>
      ))}
    </StyledList>
  )
}

export default List
