import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const TemporaryPageList = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              title
              path
            }
          }
        }
      }
    }
  `)
  return (
    <ul style={{ marginTop: "200px" }}>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <li id={node.id}>
          <a href={node.frontmatter.path}>{node.frontmatter.title}</a>
        </li>
      ))}
    </ul>
  )
}

export default TemporaryPageList
