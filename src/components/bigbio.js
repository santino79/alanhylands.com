/**
 * Bigbio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { rhythm } from "../utils/typography"

function Bigbio() {
  return (
    <StaticQuery
      query={BigbioQuery}
      render={data => {
        return (
          
                  
          <div
            style={{
              display: `fixed`,
              marginBottom: rhythm(2.5),
            }}
          >
            <Image
            fixed={data.avatar.childImageSharp.fixed}
            alt="Alan Hylands"
            style={{
              marginRight: 50,
              marginBottom: 50,
              minWidth: 50,
              borderRadius: `100%`,
            }}
            imgStyle={{
              borderRadius: `50%`,
            }}
          />

            <p>
            Hi, I'm Alan. I am a data consultant and writer from Northern Ireland.
            <br /><br />
            This is my personal blog where I write on a variety of topics including business, personal finance, tech, careers, writing and my quest to build a simple kind of life.
            <br /><br />
            Read <a href="\blog">my blog</a> here.

            <h2>What I Do.</h2>
            Currently, I am Head of Retail Commercial Excellence at Ulster Bank.
            <br /><br /> 
            I help the Retail bank use data to solve difficult business problems and serve our customers better.
            <br /><br />
            <img src="/sa-logo.png" alt="Simple Analytical" />
            <br />
            I share my best lessons, hints, tips and strategies for <strong>data analysts</strong> on <a href="https://simpleanalytical.com">SimpleAnalytical.com.</a>
            <br /><br />
            I help them level up their data science skills and use them to build better, more profitable, data-driven businesses.
            
            <br /><br />
            <img src="/CuraFitnessLogo.jpg" alt="Cura Fitness" />
            <br />
            I use my particular set of skills to help businesses get off the ground and keep growing.
            <br /><br />
            Right now that's as <strong>Technical Director</strong> at boutique fitness studio, <a href="https://curafitness.com">Cura Fitness</a>.

            <br /><br />
            <img src="/san-logo.png" alt="Santinotech" />
            <br />
            I've been a professional writer with clients including <strong>About.com</strong> and <strong>The New York Times Company</strong>.
            <br /><br />
            These days, I am a contributing writer on <a href="https://towardsdatascience.com">Towards Data Science</a>, <a href="https://hackernoon.com/">Hacker Noon</a> and <a href="https://dev.to/alanhylands">Dev.to</a>.
            
            </p>
          </div>
        )
      }}
    />
  )
}

const BigbioQuery = graphql`
  query BigbioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 200, height: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
      }
    }
  }
`

export default Bigbio
