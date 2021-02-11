import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import myTheme from "../../styles/myTheme"

const StyledImg = styled(Img)`
  min-width: ${props => props.width};
  /* box-shadow: 10px 10px 50px grey; */
  /* height: auto; */
`

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledButton = styled.button`
  margin-top: 2rem;
  height: 58px;
  width: 80%;
  border: none;
  background-color: ${myTheme.color.button};
  color: ${myTheme.color.white};

  &:hover {
    background-color: ${myTheme.color["blue-4"]};
  }
`
const Product = props => {
  const data = useStaticQuery(graphql`
    query {
      imageLogoSmall: file(name: { eq: "tenfertil" }) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <StyledWrapper {...props}>
      <StyledImg
        fluid={data.imageLogoSmall.childImageSharp.fluid}
        width={`400px`}
      />
      <StyledButton>KUP</StyledButton>
    </StyledWrapper>
  )
}

export default Product
