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

const AboutPeopleMobile = ({ isVN }) => {
  const data = useStaticQuery(graphql`
    query PeopleMobile($regex: String = "people/") {
      people: allMdx(
        filter: { frontmatter: { slug: { regex: $regex } } }
        sort: { fields: frontmatter___myid, order: ASC }
      ) {
        edges {
          node {
            id
            slug
            frontmatter {
              slug
              name
              titles
              titlesVN
              texts
              featuredImage {
                id
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <StyledWrapper>
      {data.people.edges.map(person => (
        <PersonPortraitMobile
          key={person.node.id}
          image={person.node.frontmatter.featuredImage.childImageSharp.fluid}
          text={
            isVN
              ? person.node.frontmatter.titlesVN
              : person.node.frontmatter.titles
          }
          header={person.node.frontmatter.name}
        />
      ))}
      <Button
        href={`http://www.nhinstitute.pl`}
        label={isVN ? "TÌM HIỂU THÊM " : "dowiedz się więcej"}
      />
    </StyledWrapper>
  )
}
export default AboutPeopleMobile
