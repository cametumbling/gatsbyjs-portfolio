import React from "react"
import { graphql } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"
import ProfileImage from "../images/profile.jpg"

//This example uses a graphQL PAGE query, used in pages only
export default function About({ data }) {
  return (
    <Layout>
      <div>
        <Header headerText={data.site.siteMetadata.description}/>
        {/* <Header headerText="About me" /> */}
        <p style={{ color: `#ccc`}}>      
        Hi! I'm Jill, a JavaScript-based web developer from California, working with technologies such as React, Node.js, Express, and PostgreSQL. (This site was built using Gatsby!) In a previous life, I was a GIS Data Analyst, so I'm great with data and I love maps--analog or digital! 
        <br/>
        I hold two masters degrees, one in Anthropology/Archaeology from CUNY Hunter in New York, and the second in Cuneiform Studies from the University of Oxford in England. At Oxford, I organized several conferences, served as a cross-departmental liaison and social chair, acted as the webmaster for my boat club (go Wolfson!), volunteered for a trauma helpline, and was involved with Oxford Women of Computer Science. 
        <br/>
        My last permanent role was at the Metropolitan Museum of Art in New York, where I got my start in front-end web development and Agile project management, joining the dev team for UX work, testing, and making responsive sites.
        <br />
        Most recently I have been working on an app to bring social justice to historically non-diverse spaces in the educational system.
      </p>
      <img src={ProfileImage} alt="Photo of me sitting on a rock in the middle of a stream"/>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        description
      }
    }
  }
`