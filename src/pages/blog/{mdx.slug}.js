import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../../components/layout'

const BlogPost = ({data}) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <div className="title has-text-warning"  style={{ marginTop: "20px",marginBottom:"5px" }}>{data.mdx.frontmatter.title}</div>
      {data.mdx.frontmatter.date}
      <div>{data.mdx.frontmatter.tags.map(tag => (
              <>
              <span class="tag is-success">#{tag}</span><span> </span>
              </>
            ))}</div>
      <div className="content" style={{marginTop:"40px"}}>
      <MDXRenderer>
        {data.mdx.body}
      </MDXRenderer>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        tags
      }
      body
    }
  }
`

export default BlogPost