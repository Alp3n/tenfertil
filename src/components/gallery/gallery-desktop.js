import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import GalleryImage from "./galleryImage"

const StyledGalleryBig = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(1fr, 400px));
  grid-template-rows: repeat(2, minmax(1fr, 340px));
  grid-gap: 0.5rem;
  grid-template-areas:
    "img6 img6 img1 img2"
    "img3 img3 img5 img4";

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
  .p-5 {
    grid-area: img5;
  }
  .p-6 {
    grid-area: img6;
  }
`

const GalleryDesktop = () => {
  const data = useStaticQuery(graphql`
    query ImagesGalleryDesktop {
      imagesBig: allFile(
        filter: { relativeDirectory: { eq: "jpg" } }
        limit: 6
      ) {
        nodes {
          id
          name
          childImageSharp {
            fluid(quality: 60) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  return (
    <StyledGalleryBig>
      {data.imagesBig.nodes.map(image => (
        <GalleryImage
          key={image.id}
          image={image.childImageSharp.fluid}
          area={image.name}
        />
      ))}
    </StyledGalleryBig>
  )
}

export default GalleryDesktop
