import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import "../pages/mystyles.scss"

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <nav className="navbar is-dark" style={{ borderBottom: "1px solid #9aa0a6", justifyContent: "center" }} role="navigation" aria-label="main navigation">

        <div className="navbar-brand column is-2" data-target="navbarMenu">
          <a className="navbar-item is-size-3 is-pulled-left" style={{ fontFamily: "'Exo 2', sans-serif" }} href="https://topeomot.com">
            TOPEOMOT
          </a>
          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div className="navbar-menu column is-4" id="navbarMenu">

          <div className="navbar-end">
            <Link className="navbar-item" to="/">
              Home
            </Link>
            <a className="navbar-item" to="/blog">
              Twitter
            </a>
          </div>
        </div>
      </nav>

      <div className="columns">
        <div className="column  is-6-widescreen is-offset-3-widescreen is-4-until-widescreen is-offset-4-until-widescreen">
          <main>
            {children}
          </main>
        </div>
      </div>

    </div>
  )
}

export default Layout