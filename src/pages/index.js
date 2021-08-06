import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import "./mystyles.scss"

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <div className="container" style={{marginTop:"10px"}}>
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
          <hr/>
        </div>
      </div>
      </div>
      
    </Layout>
  )
}

export default IndexPage