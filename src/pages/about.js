import React from "react"
import { graphql } from "gatsby"
import Header from "../components/header";
import Layout from "../components/layout"

//This example uses a graphQL PAGE query, used in pages only
export default function About({ data }) {
  return (
    <Layout>
      <div>
          {/* <Link to="/">Home</Link> */}
        <Header headerText={data.site.siteMetadata.description}/>
        {/* <h1>About {data.site.siteMetadata.title}</h1> */}

        <Header headerText="About me" />
        <p style={{ color: `#ccc`}}>      Hi! I'm Jill, a JavaScript-based web developer from California, working with technologies such as React, Node.js, Express, and SQL. In a previous life, I was a GIS Data Analyst, so I am great with databases of all kinds. In addition to building web apps, I love visualizing data and making maps.

I hold two master's degrees, one in Anthropology & Archaeology, and the most recent in Cuneiform Studies from the University of Oxford, where I have developed several sites and am involved with Oxford Women in Computer Science.

My last job was at the Metropolitan Museum of Art in New York, where I got my start in front-end web development and Agile project management, joining the dev team for UX work, testing, and making responsive sites.
      </p>
      <img src="../images/profile.jpg" alt="me"/>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`