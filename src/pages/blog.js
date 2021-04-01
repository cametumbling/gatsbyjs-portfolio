import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/react"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
import Header from "../components/header";

export default function blogPosts({ data }) {
  return (
    <Layout>
        <Header headerText="Blog Posts" />
        {data.allMarkdownRemark.edges.map(({ node }) => (
              <div key={node.id}>
                <Link
                  to={node.fields.slug}
                  css={css`
                    text-decoration: none;
                    color: #eee;
                  `}
                >
                <h3
                  css={css`
                    margin-bottom: ${rhythm(1 / 4)};
                    color: #eee;
                  `}
                >
                  {node.frontmatter.title}{" "}
                  <span
                    css={css`
                      color: #999;
                    `}
                  >
                    — {node.frontmatter.date}
                  </span>
                </h3>
                <p                 
                    css={css`
                      color: #bbb;
                    `}
                  >{node.excerpt}</p>
                </Link>
              </div>
            ))}
    </Layout>
  )
}
export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`