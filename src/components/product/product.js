import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import Button from "../button/button"

const StyledImg = styled(Img)`
  min-width: ${props => props.width};
`

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Product = ({ width, buttonOff }) => {
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
    <StyledWrapper>
      <StyledImg
        fluid={data.imageLogoSmall.childImageSharp.fluid}
        width={width}
        // max-width={`600px`}
      />
      {buttonOff ? null : <Button to={`/buy`} label="KUP" />}
    </StyledWrapper>
  )
}

export default Product
