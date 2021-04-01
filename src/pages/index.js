import * as React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/react"
import { rhythm } from "../utils/typography"
//import Header from "../components/header"
import Layout from "../components/layout"

// styles
const pageStyles = {
  color: "#eee",
  // padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#eee",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const descriptionStyle = {
  color: "#eee",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
}

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

// data
const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
  {
    text: "How to Guides",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#1099A8",
  },
  {
    text: "Reference Guides",
    url: "https://www.gatsbyjs.com/docs/reference/",
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    color: "#BC027F",
  },
  {
    text: "Conceptual Guides",
    url: "https://www.gatsbyjs.com/docs/conceptual/",
    description:
      "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
    color: "#0D96F2",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
    color: "#8EB814",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    badge: true,
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
    color: "#663399",
  },
]

// markup
export default function IndexPage({ data }) {
  return (
    <>
    {/*       <p style={paragraphStyles}>
            Edit <code style={codeStyles}>src/pages/index.js</code> to see this page
            update in real-time.
          </p>
          <ul style={listStyles}>
            <li style={docLinkStyle}>
              <a
                style={linkStyle}
                href={`${docLink.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
              >
                {docLink.text}
              </a>
            </li>
            {links.map(link => (
              <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
                <span>
                  <a
                    style={linkStyle}
                    href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
                  >
                    {link.text}
                  </a>
                  {link.badge && (
                    <span style={badgeStyle} aria-label="New Badge">
                      NEW!
                    </span>
                  )}
                  <p style={descriptionStyle}>{link.description}</p>
                </span>
              </li>
            ))}
          </ul>
          <img
            alt="Gatsby G Logo"
            src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
          />
          <div style={{ color: `purple` }}>
                <Link to="/contact">Contact</Link>
                <Link to="/about">About</Link>

          <Header headerText="Hello Gatsby!"/>
          <p>What a world.</p>
          <img src="https://source.unsplash.com/random/400x200" alt="" />
        </div> */}
        <Layout>
          <main style={pageStyles}>
          <title>Home Page</title>
          {/* <h1 style={headingStyles}> */}
            <h1
                         css={css`
                         display: inline-block;
                         color: magenta;
                       `}>
            Congratulations!!!
            <br />
            <span style={headingAccentStyles}>— you made it to my site! </span>
            <span role="img" aria-label="sign of the horns emojis">
              🤘🤘🤘
            </span>
          </h1>
          <p>
            Well! This was meant to be a Gatsby Cloud deployment of my real portfolio site, but 12 hours later my site is still over on surge, and instead I have here a cute photo of pandas and the beginnings of a second portfolio site. The Gatsby docs are great, but as this long day and late night prove, better tutorials for Gatsby Cloud are needed! But I love Gatsby, and look forward to working this migration out with a good night's sleep.  For now, read a bit more about me, and feel free to [bamboo]shoot me an email. 
          </p>
          <img
              src="https://2.bp.blogspot.com/-BMP2l6Hwvp4/TiAxeGx4CTI/AAAAAAAAD_M/XlC_mY3SoEw/s1600/panda-group-eating-bamboo.jpg"
              alt="Group of pandas eating bamboo"
            />
        <div>
            <h1
              css={css`
                display: inline-block;
                color: magenta;
              `}
            >
              Recent Posts
            </h1>
            {/* <h4
                      css={css`
                      display: inline-block;
                      margin-left: ${rhythm(1 / 4)};
                      color: #999;
                    `}
            >{data.allMarkdownRemark.totalCount} Posts</h4> */}
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
          </div>
          <img
            alt="Gatsby G Logo"
            src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
          />
          </main>
        </Layout>
    </>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 3) {
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