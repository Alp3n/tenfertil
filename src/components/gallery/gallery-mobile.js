import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import GalleryImage from "./galleryImage"

const StyledGallerySmall = styled.div`
  margin-top: 3.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, 1fr);
  grid-template-rows: repeat(2, minmax(200px, 230px));
  grid-gap: 0.5rem;
  grid-template-areas:
    "img1 img2"
    "img3 img4";

  .p-1 {
    grid-area: img1;
  }
  .p-2 {
    grid-area: img2;
  }
  .p-3 {
    grid-area: img3;
  }
  .p-4 {
    grid-area: img4;
  }
`

const GalleryMobile = () => {
  const data = useStaticQuery(graphql`
    query ImagesGalleryMobile {
      imagesSmall: allFile(
        filter: { relativeDirectory: { eq: "jpg" } }
        sort: { fields: name }
        limit: 4
      ) {
        nodes {
          id
          name
          childImageSharp {
            fluid(quality: 45) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  return (
    <StyledGallerySmall>
      {data.imagesSmall.nodes.map(image => (
        <GalleryImage
          key={image.id}
          image={image.childImageSharp.fluid}
          area={image.name}
        />
      ))}
    </StyledGallerySmall>
  )
}

export default GalleryMobile
