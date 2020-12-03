import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import { useAuth0 } from "@auth0/auth0-react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./blog.css"

const Blog = () => {

    const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0()

    const data = useStaticQuery(graphql`
    {
      allContentfulBlog(sort: {fields: publishedDate, order: DESC}) {
        edges {
          node {
            title
            author
            publishedDate(fromNow: true)
            slug
          }
        }
      }
    }
  `)
    return (
        <Layout>

            {
                !isAuthenticated && (
                    <button class="buttonEnterClasses vertical-center"  onClick={() => loginWithRedirect()}>Log In</button>
                )
            }
            {
                isAuthenticated && (
                    <div>
                        <SEO title="blog" />
                        <h1 style={{textAlign:"center"}}>Blogs</h1>
                        <div>
                            {
                                data.allContentfulBlog.edges.map((post, i) => {
                                    return (
                                        <div key={i}>
                                            <h1 style={{textAlign:"center"}}>{post.node.title}</h1>
                                            <p style={{ fontWeight: 200, fontSize: "0.8rem" }}>Published {post.node.publishedDate}</p>
                                            <p style={{ fontWeight: 300, fontSize: "0.9rem" }}>Written By {post.node.author}</p>
                                            <Link id="foot" to={`/blog/${post.node.slug}`}>Read More...</Link>
                                            <hr style={{ height: "3px" }} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <button class="buttonEnterClasses vertical-center" style={{textAlign:"center"}} onClick={() => logout()}>Sign Out</button>
                    </div>
                )
            }


        </Layout>
    )
}

export default Blog