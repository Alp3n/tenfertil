import React from "react"
import styled from "styled-components"
import myTheme from "../../styles/myTheme"
import Img from "gatsby-image"

const circles = [
  {
    color: myTheme.color["portrait-1"],
    left: "-30px",
    height: "100%",
    width: "100%",
    zIndex: 1,
  },
  {
    color: myTheme.color["portrait-2"],
    left: "10px",
    height: "100%",
    width: "100%",
    zIndex: 2,
  },
  {
    color: myTheme.color["portrait-3"],
    left: "-10px",
    height: "90%",
    width: "90%",
    zIndex: 3,
  },
]

const StyledPortraitWrapper = styled.div`
  display: flex;
  height: 250px;
  width: 250px;
  position: relative;
  justify-content: center;
  align-items: center;
  margin-right: 48px;
`

const StyledPortrait = styled(Img)`
  position: absolute;
  border-radius: 100%;
  border: 2px solid white;
  height: 80%;
  width: 80%;
  z-index: 4;
`

const StyledBackground = styled.div`
  position: absolute;
  background-color: ${props => props.color};
  left: ${props => props.left};
  height: ${props => props.height};
  width: ${props => props.width};
  border-radius: 100%;
`

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  /* max-width: 60%; */
`

const StyledWrapper = styled.div`
  display: flex;
  margin: 3rem;
  align-items: center;
`

const StyledHeader = styled.h2`
  font-size: 28px;
  text-transform: uppercase;
`

const StyledP = styled.p`
  font-size: 22px;
`

const PersonPortrait = ({ image, header, text }) => {
  return (
    <StyledWrapper>
      <StyledPortraitWrapper>
        <StyledPortrait fluid={image} />
        {circles.map(circle => (
          <StyledBackground
            key={circle.color}
            color={circle.color}
            left={circle.left}
            height={circle.height}
            width={circle.width}
            zIndex={circle.zIndex}
          />
        ))}
      </StyledPortraitWrapper>
      <StyledContent>
        <StyledHeader>{header}</StyledHeader>
        <StyledP>{text.map(text => text)}</StyledP>
      </StyledContent>
    </StyledWrapper>
  )
}

export default PersonPortrait
