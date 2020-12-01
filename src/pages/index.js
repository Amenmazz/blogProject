import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    
    <h1>Welcome!</h1>
    <h2>My name is Ayman and this is my blog!</h2>
    <p>Need an instructor? <Link to="/contact">Click Here!</Link></p>


  </Layout>
)

export default IndexPage
