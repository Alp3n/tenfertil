import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import PersonPortraitMobile from "./person-portrait-mobile"
import Button from "../button/button"

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const AboutPeopleMobile = ({ people, label }) => {
  const data = useStaticQuery(graphql`
    query PeopleMobile {
      rokicki: file(relativePath: { eq: "portrait/p1rokicki.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      grodzicka: file(relativePath: { eq: "portrait/p2grodzicka.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <StyledWrapper>
      
        <PersonPortraitMobile
       key={people.rokicki.id}
       image={data.rokicki.childImageSharp.fluid}
       text={people.rokicki.titles}
       header={people.rokicki.name}
     /> 
      <PersonPortraitMobile
        key={people.grodzicka.id}
        image={data.grodzicka.childImageSharp.fluid}
        text={people.grodzicka.titles}
        header={people.grodzicka.name}
      />

      <Button href={`https://www.nhinstitute.pl`} label={label} />
    </StyledWrapper>
  )
}
export default AboutPeopleMobile
