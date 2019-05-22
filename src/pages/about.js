import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

// class AboutPage extends React.Component {
//   render() {
//     const { data } = this.props

export default function About({ data }) {
  const page = data.markdownRemark
  // const siteTitle = page.frontmatter.title

    return (
      <Layout title="About">
        <SEO title="About Alan Hylands" />

        <div className="Column">
          <div className="MainContent">
            <div className="u-textCenter">
              <img
                style={{
                  maxWidth: 240,
                  borderRadius: '50%',
                }}
                src="/alan-tuscany.jpg" alt="Alan Hylands in Tuscany, July 2017"
              />
            </div>
            <div 
              className="u-textLeft"
              dangerouslySetInnerHTML={{ __html: page.html }}
            />
          </div>
      </div>

      </Layout>
    )
  }

// export default AboutPage

export const query = graphql`
  query {
    markdownRemark(frontmatter: { path: { eq: "/about" } }) {
      html
      frontmatter {
        title
        path
      }
    }
  }
`
