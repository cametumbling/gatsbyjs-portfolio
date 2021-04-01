import React from "react"
// import { Link } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"


export default function Contact() {
  return (
    <Layout>
      <div>
        <Header headerText="Contact" />
        <p style={{ color: `#ccc`}}>Send me a message! <br/> <span style={{color:`#eee`}}>jill dot marcum at gmail dot com </span><br/>A classic.</p>
      </div>
    </Layout>
  )
}