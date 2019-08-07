import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

// class AboutPage extends React.Component {
//   render() {
//     const { data } = this.props

export default function Projects({ data }) {
  const page = data.markdownRemark
  // const siteTitle = page.frontmatter.title

    return (
      <Layout title="Projects">
        <SEO title="Current and Past Projects" />

        <div className="Column">
          <div className="MainContent">
            <div 
              className="u-textLeft"
              dangerouslySetInnerHTML={{ __html: page.html }}
            />
          </div>
      </div>

      </Layout>
    )
  }

// export default ProjectsPage

export const query = graphql`
  query {
    markdownRemark(frontmatter: { path: { eq: "/projects" } }) {
      html
      frontmatter {
        title
        path
      }
    }
  }
`
