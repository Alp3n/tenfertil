import React from "react"
import styled from "styled-components"
import myTheme from "../../styles/myTheme"
import Img from "gatsby-image"

const circles = [
  {
    color: myTheme.color["portrait-1"],
    left: "-40px",
    height: "100%",
    width: "100%",
    zIndex: 1,
  },
  {
    color: myTheme.color["portrait-2"],
    left: "20px",
    height: "100%",
    width: "100%",
    zIndex: 2,
  },
  {
    color: myTheme.color["portrait-3"],
    left: "-10px",
    height: "80%",
    width: "80%",
    zIndex: 3,
  },
]

const StyledCirclesWrapper = styled.div`
  display: flex;
  height: 200px;
  width: 200px;
  position: relative;
  justify-content: center;
  align-items: center;
`

const StyledCircle = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  border: 2px solid white;
  background-color: white;
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
  margin-left: 10%;
  max-width: 40%;
`

const StyledWrapper = styled.div`
  display: flex;
  margin: 3rem;
  align-items: center;
`

const StyledHeader = styled.h3`
  text-transform: uppercase;
`

const StyledP = styled.p``

const Circles = ({ image, text, header }) => {
  return (
    <StyledWrapper>
      <StyledCirclesWrapper>
        <StyledCircle>{image}</StyledCircle>
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
      </StyledCirclesWrapper>
      <StyledContent>
        <StyledHeader>{header}</StyledHeader>
        <StyledP>{text}</StyledP>
      </StyledContent>
    </StyledWrapper>
  )
}

export default Circles
