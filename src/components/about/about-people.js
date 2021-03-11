import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import PersonPortrait from "./person-portrait"
import Button from "../button/button"

import myTheme from "../../styles/myTheme"

const StyledWrapper = styled.div`
  padding-left: 3rem;
  border-left: 1px solid ${myTheme.color.button};
`

const AboutPeople = ({ isVN }) => {
  const data = useStaticQuery(graphql`
    query People($regex: String = "people/") {
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
    <>
      <StyledWrapper>
        {data.people.edges.map(person => (
          <PersonPortrait
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
      </StyledWrapper>
      <div style={{ marginTop: `90px` }}>
        <Button
          href={`https://www.nhinstitute.pl`}
          label={isVN ? "TÌM HIỂU THÊM" : "dowiedz się więcej"}
        />
      </div>
    </>
  )
}
export default AboutPeople
