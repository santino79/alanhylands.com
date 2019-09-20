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
          title="Writer | Data Nerd | Developer"
          keywords={[`blog`, `data`, `analytics`, `writer`]}
        />

    <div className="MainStripe1">
          <div className="MainContent">

            <div className="u-textCenter">
              <h1 className="bigText">Writer. Data Nerd. Developer.</h1>
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
          <br /><br />

          <a href="/about/" className="button">Find out more.</a>

            </div>
        </div>
      </div>


      <div className="Column">
          <div className="MainContent">
            <div className="u-textCenter">
            
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
