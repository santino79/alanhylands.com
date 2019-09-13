/**
 * Homepage component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

function HomePage() {
  return (
    <StaticQuery
      query={HomePageQuery}
      render={data => {
        return (
        <div className="Column">
          <div className="MainContent">
            <div className="u-textCenter">
    
          <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt="Alan Hylands"
              style={{
                marginRight: 50,
                marginBottom: 0,
                minWidth: 50,
                borderRadius: `100%`,
              }}
              imgStyle={{
                borderRadius: `50%`,
              }}
            />
            </div>

            

          
          <div className="u-textLeft">
            <h2 className="bigText">Solver of difficult data problems.</h2>
            
            I am the founder of <a href="https://santinotech.com">Santinotech</a>
            
            <h2 className="bigText">Builder of online (and offline) things.</h2>
            
            Technical director at <a href="https://curafitness.com">Cura Fitness</a> 
            
            <h2 className="bigText">Writer.</h2>
            
            and a freelance writer.
            
            <p>
            This is my personal website where I write <a href="/articles">articles</a> on a variety of topics including business, personal finance, tech, careers, writing and my quest to build a simple kind of life.
            </p>
            <p>
            I share my best lessons, hints, tips and strategies for <strong>data analysts</strong> on <a href="https://simpleanalytical.com">SimpleAnalytical.com.</a>
            <br />
            I help them level up their data science skills and use them to build better, more profitable, data-driven businesses.
            </p>
            <p>
            I've been a professional writer with clients including <strong>About.com</strong> and <strong>The New York Times Company</strong>.
            <br />
            These days, I am a contributing writer on <a href="https://towardsdatascience.com">Towards Data Science</a>, <a href="https://hackernoon.com/">Hacker Noon</a> and <a href="https://dev.to/alanhylands">Dev.to</a>.
            </p>
          </div>
        </div>
      </div>
        )
      }}
    />
  )
}

const HomePageQuery = graphql`
  query HomePageQuery {
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

export default HomePage
