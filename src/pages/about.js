import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => {
    return (
        <Layout>
            <SEO title="About" />  
            <h1>About</h1>
            <p>My name is Ayman and this page is about me.</p>  
            <Link to="/"> Go Home</Link>

        </Layout>
    )
}

export default About