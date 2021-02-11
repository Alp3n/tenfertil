import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const StyledImage = styled(Img)`
  /* width: 100%;
  height: 100%; */
`

const GalleryImage = ({ image, area }) => {
  return <StyledImage fluid={image} className={area} />
}

export default GalleryImage
