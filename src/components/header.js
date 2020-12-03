import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import headerStyles from "../components/header.module.css"

const Header = ({ siteTitle, siteDescription, home, blog }) => (
  <header
    style={{
      background: `#333`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: "0 0 0 0.9rem" }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
        <h3 style={{color: 'rgba(223,223,223,0.3)', margin: '0 0 0 0.9rem'}}>{siteDescription}</h3>
        
        <div style={{margin: '0 auto',maxWidth: 960, padding: '1.45rem 1.08rem', display: 'flex'}}>
        
          <h4 style={{marginRight: '0.9rem', textDecoration:'none'}}>
        <Link to="/" className={headerStyles.link}>{home}</Link>
          </h4>

          <h4 style={{marginRight: '0.9rem', textDecoration:'none'}}>
        <Link to="/blog" className={headerStyles.link}>{blog}</Link>
          </h4>
        
        </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  home: PropTypes.string,
  
  blog: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
