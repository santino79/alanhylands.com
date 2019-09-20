import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="404: Not Found" />
        <div className="Column">
          <div className="MainContent">
            <div className="u-textLeft">

        <h1>We Can't Find That Page</h1>
        <img src="/mellon-collie.jpg" alt="Mellon Collie and the Infinite Sadness" />
        <p>You just hit a route that doesn&#39;t exist... the infinite sadness.</p>

        </div>
        </div>
      </div>

        
      </Layout>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
