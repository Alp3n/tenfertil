import React from "react"
import styled from "styled-components"
import myTheme from "../../styles/myTheme"
import Button from "../button/button"
import CirclesBullet from "./circles-bullet"

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
  border-radius: 50%;
`

const StyledTextBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 3rem;
  margin-bottom: 2rem;
  width: 90%;
`

const StyledHeading = styled.h2`
  text-transform: uppercase;
`
const StyledText = styled.p`
  &:last-child {
    margin: 0;
  }
`

const List = ({ list, online, offline }) => {
  return (
    <StyledList>
      {list.map(item => (
        <StyledListPoint
          key={online ? item.name : offline ? item.address : item.header}
        >
          <StyledBullet>
            <CirclesBullet />
          </StyledBullet>
          {online ? (
            <StyledTextBox>
              <StyledHeading>apteka {item.name}</StyledHeading>
              <Button href={item.href} label={`KUP`} />
            </StyledTextBox>
          ) : offline ? (
            <StyledTextBox>
              <StyledHeading>apteka {item.name}</StyledHeading>
              <StyledText>{item.address}</StyledText>
            </StyledTextBox>
          ) : (
            <StyledTextBox>
              <StyledHeading>{item.header}</StyledHeading>
              <StyledText>{item.text}</StyledText>
            </StyledTextBox>
          )}
        </StyledListPoint>
      ))}
    </StyledList>
  )
}

export default List
