import React from "react"


import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    
    <div>
    <h1 style={{textAlign:"center"}}>MY WONDERS!</h1>
    <hr/>
    <br/>
    <h3>Welcome to my blog!</h3>
    <p>My name is Ayman Mazzal and I am from Morocco. I moved to the US about three years ago, so I can finish my studies and live the "American Dream". I love cooking. I also have other hobbies like making videos and short movies. I am getting my associates in Multimedia technology from Richland next semester. Then I'm planning on transfering to UNT and get my bachelor in Media Arts.</p>
    <hr/>
    <br/>
    <h3>Why this blog?</h3>
    <p>I love traveling and trying new food, which made me create this blog. In this blog, I am going to share some of the things that I have done, and tell you about them.</p>
    </div>

  </Layout>
)

export default IndexPage
