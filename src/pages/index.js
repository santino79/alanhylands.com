import React from "react"
import { graphql } from "gatsby"
import HomePage from "../components/homepage"
import Layout from "../components/layout"
import SEO from "../components/seo"

class AHIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Writer | Builder of online things | Solver of difficult data problems"
          keywords={[`blog`, `data`, `analytics`, `writer`]}
        />

        <HomePage />

      </Layout>
    )
  }
}

export default AHIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
