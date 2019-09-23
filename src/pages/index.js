import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
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
          title="Writer | Data Consultant "
          keywords={[`blog`, `data`, `analytics`, `writer`]}
        />

    <div className="MainStripe1">
          <div className="MainContent">

            <div className="u-textCenter">
              
              <h1 className="bigText">
               Writer and Data Consultant.
               </h1>
               <Image
            fixed={data.avatar.childImageSharp.fixed}
            alt="Alan Hylands"
            style={{
              
              marginBottom: 10,
              minWidth: 50,
              borderRadius: `100%`,
            }}
            imgStyle={{
              borderRadius: `50%`,
            }}
          />

            <div className="social-holder">
              <Email />
              <Twitter />
              <LinkedIn />
              <GitHub />
            </div>


            </div>

        </div>
      </div>


      <div className="Column">
          <div className="MainContent">
            <div className="u-textLeft">
              <h2>What am I doing now?</h2>

            <h3>Need a data expert to help push your business on to the next level?</h3>
            Give me a shout at <a href="https://santinotech.com/contact/">Santinotech</a>.

            <h3>Want to build your data analyst skills?</h3>
            Come on over to <a href="https://simpleanalytical.com">Simple Analytical</a> for hints, tips, strategies and 
            tales from the analytics coalface.

            <h3>Missing out on data jobs because you don't know SQL?</h3>
            Try my <strong>FREE</strong> <a href="https://sqlcrashcourse.com">SQL Crash Course</a> and get your foot on the analytics ladder.
            
            
            <h2>Want to know some more?</h2>
              <ul>
                <li>See my <a href="/about/">About page</a> for some back story.</li>
                <li>Check out my <a href="/projects/">Projects</a> page for more current and past projects.</li>
              </ul>

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
        fixed(width: 150, height: 150) {
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
