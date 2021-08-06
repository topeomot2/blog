import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import "./mystyles.scss"

const IndexPage = ({data}) => {
  return (
    <Layout pageTitle="Home Page">
      <div className="container" style={{ marginTop: "10px" }}>
        <div className="columns">
          <div className="column is-4">
            <StaticImage
              alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
              src="../images/topeomot.jpg"
            />
          </div>
          <div className="column is-8 title is-4">
            Hi, I'm Tope. I am a Software Developer and this is my personal
            blog to share things I have learnt and applied in my journey as a Human and Programmer.
            <hr />
          </div>
        </div>
      </div>
      <div className="container"  style={{ marginTop: "40px" }}>
      {
        data.allMdx.nodes.map(node => (
          <article key={node.id} style={{marginBottom: "40px"}}>
            <div className="title" style={{marginBottom:"2px"}}>
              <Link to={`/blog/${node.slug}`} className="has-text-warning" style={{fontWeight:"bold"}}>
                {node.frontmatter.title}
              </Link>
            </div>
            {node.frontmatter.date}
            <div>{node.frontmatter.description}</div>
          </article>
        ))
      }
      </div>

    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          description
        }
        id
        slug
      }
    }
  }
`


export default IndexPage