import React from "react"
import { graphql } from "gatsby"
// import Image from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Twitter, LinkedIn, GitHub, Email } from '../components/social'


class Index extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Data Analyst | Software Developer | Writer | Solver of difficult data problems"
          keywords={[`blog`, `data`, `analytics`, `writer`]}
        />

      <div className="Column">
          <div className="MainContent">
            <div className="u-textCenter">

          <h2 className="home__section__header">Analyst | Developer | Writer</h2>
            
            <h3>Founder at Santinotech.</h3>
            I run tech consultancy <a href="https://santinotech.com">Santinotech</a>. I specialise in helping small teams harness the power of data and technology to build ethical, data-driven businesses.
            <h3>Technical Director at Cura Fitness.</h3>
            <a href="https://curafitness.com">Cura Fitness</a> is a boutique fitness studio based in County Down, Northern Ireland. 
            I run the back office operations including finance, data, technology, systems and administration.  
            
            <h3>Writer at Simple Analytical.</h3>
           
            I share my best lessons, hints, tips and strategies for <strong>data analysts</strong> on <a href="https://simpleanalytical.com">SimpleAnalytical.com.</a>
            <br />
            I help them level up their data analysis skills and use them to build better, more profitable, data-driven businesses.
            
            <h3>Online Course Instructor at SQL Crash Course.</h3>
            I created an <a href="https://sqlcrashcourse.com">online SQL course</a> to help people build the solid groundwork they need to get up to speed quickly with SQL.

            <h3>Writer here and elsewhere.</h3>
            This is my personal website where I write <a href="/articles">articles</a> on a variety of topics including business, personal finance, tech, careers, writing and my quest to build a simple kind of life.
            <br /><br />
            I've been a professional writer with clients including <strong>About.com</strong> and <strong>The New York Times Company</strong>.
            These days, I am a contributing writer on <a href="https://towardsdatascience.com">Towards Data Science</a>, <a href="https://hackernoon.com/">Hacker Noon</a> and <a href="https://dev.to/alanhylands">Dev.to</a>.
            
            <div className="social-holder">
              <Email />
              <Twitter />
              <LinkedIn />
              <GitHub />
            </div>

          </div>
        </div>
      </div>

      </Layout>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query {
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
