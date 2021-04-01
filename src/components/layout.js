import React from "react"
import { css } from "@emotion/react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { rhythm } from "../utils/typography"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)
//This example uses a graphQL STATIC query, that can be used in components like this one!
export default function Layout({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
      <div 
      // style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}
        css={css`
        margin: 0 auto;
        max-width: 700px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
    `}
    >
      <header style={{ marginBottom: `1.5rem` }}>
        <Link to={`/`} style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h3 
            // style={{ display: `inline` }}
            css={css`
              margin-bottom: ${rhythm(2)};
              display: inline-block;
              font-style: normal;
          `}
          >
            {data.site.siteMetadata.title}
          </h3>
        </Link>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to={`/`}>Home</ListLink>
          <ListLink to={`/about/`}>About</ListLink>
          <ListLink to={`/contact/`}>Contact</ListLink>
        </ul>
      </header>
      {children}
    </div>
  )
}
