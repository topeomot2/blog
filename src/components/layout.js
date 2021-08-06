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
      <nav className="navbar is-dark" style={{borderBottom: "1px solid #9aa0a6", justifyContent:"center"}} role="navigation" aria-label="main navigation">

        <div className="navbar-brand column is-2" data-target="navbarMenu">
          <a className="navbar-item is-size-3 is-pulled-left" style={{fontFamily: "'Exo 2', sans-serif"}} href="https://bulma.io">
            TOPEOMOT
          </a>
          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div class="navbar-menu column is-4" id="navbarMenu">

          <div class="navbar-end">
          <Link className="navbar-item" to="/">
            Home
          </Link>
          <Link className="navbar-item" to="/about">
            About
          </Link>
          <Link className="navbar-item" to="/blog">
            Blog
          </Link>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="columns is-mobile">
          <div className="column is-three-fifths is-offset-one-fifth">
          <header className="title is-2">{data.site.siteMetadata.title}</header>
      
          <main>
        <h1 className="title">{pageTitle}</h1>
            {children}
            </main>
            </div>
        </div>
        </div>
      
    </div>
  )
}

export default Layout