/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} siteDescription={data.site.siteMetadata.description} home="Home"  blog="Blog" />
      <div
        style={{
          margin: `auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer style={{
          marginTop: `3rem`,
          

        }}>
          <div style={{
          marginTop: `3rem`,
          textAlign: `center`,
          position: `fixed`,
          bottom: `0`,
          maxWidth: 960,
          width: `95%`,
          height: `60px`,
          
          padding:`20px 20px`,
          }}>

            © {new Date().getFullYear()}, By
          {` `}
            <a id="foot" href="/">My Wonders</a>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
