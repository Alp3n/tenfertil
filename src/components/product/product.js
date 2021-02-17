import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import Button from "../button/button"

const StyledImg = styled(Img)`
  margin-bottom: 4vh;
  min-width: ${props => props.width};
`

const StyledWrapper = styled.div`
  display: flex;
  max-height: auto;
  flex-direction: column;
  align-items: center;
`

const Product = ({ width, height, buttonOff }) => {
  const data = useStaticQuery(graphql`
    query {
      imageLogoSmall: file(name: { eq: "tenfertil" }) {
        childImageSharp {
          fluid(quality: 1) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <StyledWrapper>
      <StyledImg
        fluid={data.imageLogoSmall.childImageSharp.fluid}
        width={width}
        height={height}
      />
      {buttonOff ? null : <Button to={`/buy`} label="GDZIE KUPIĆ" />}
    </StyledWrapper>
  )
}

export default Product
