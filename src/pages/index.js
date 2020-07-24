import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Twitter, LinkedIn, GitHub, Email } from '../components/social'
import Image from "gatsby-image"

class Index extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Data Analyst | Writer"
          keywords={[`blog`, `data`, `analytics`, `writer`]}
        />

      <div className="Column">
          <div className="MainContent">

            <div className="u-textLeft">


            <Image
            fixed={data.avatar.childImageSharp.fixed}
            alt="Alan Hylands" 
            style={{
              
              marginBottom: 10,
              marginRight: 10,
              minWidth: 50,
              borderRadius: `100%`,
              float: `left`,
            }}
            imgStyle={{
              borderRadius: `50%`,
            }}
          />

            I am a senior decision scientist at <a href="https://zapier.com">Zapier</a>.

            I write hints, tips, strategies and tales from the analytics coalface for data analysts at <a href="https://simpleanalytical.com">Simple Analytical</a>.
            And I help them get started learning SQL with my online <a href="https://sqlcrashcourse.com">SQL Crash Course</a>. 
            <br /><br />
            I am also technical director at our family boutique fitness studio <a href="https://curafitness.com">Cura Fitness</a>.
            <br /><br />
            This is my personal site where I write <a href="/articles/">articles</a> on a variety of topics including business, personal finance, tech, careers, writing and my quest to build a simple kind of life. 

            <h2>Want to know more?</h2>
              <ul>
                <li>See my <a href="/about/">About page</a> for some back story.</li>
                <li>Check out my <a href="/projects/">Projects</a> page for more info on my current and past projects.</li>
              </ul>

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
        fixed(width: 100, height: 100, grayscale: true) {
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