import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PersonPortrait from "../circles/person-portrait"
import Button from "../button/button"

const AboutPeople = () => {
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
  console.log("MOJE DANE", data)
  return (
    <>
      {data.people.edges.map(person => (
        <PersonPortrait
          key={person.node.id}
          image={person.node.frontmatter.featuredImage.childImageSharp.fluid}
          text={person.node.frontmatter.titles}
          header={person.node.frontmatter.name}
        />
      ))}
      <div
        style={{ display: `flex`, marginLeft: `3rem`, marginBottom: `3rem` }}
      >
        <Button
          href={`http://www.nhinstitute.pl`}
          label={`dowiedz się więcej`}
        />
      </div>
    </>
  )
}
export default AboutPeople
