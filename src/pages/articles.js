import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class ArticleIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All Articles"
          keywords={[`blog`, `articles`]}
        />

      <div className="Column">
          <div className="MainContent">
            <div className="u-textLeft">

        <h1>All Articles.</h1>
        <blockquote>
        This is my personal blog where I write articles on a variety of topics including 
        business, personal finance, tech, careers, writing and my quest to build a simple kind of life.
        <br /><br />
        For my writing on data and analytics, check out <a href="https://simpleanalytical.com">Simple Analytical.</a>
        </blockquote>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug}>
              
                <Link to={node.fields.slug}>
                  {title}
                </Link>
              
            </div>
          )
        })}


        </div>
        </div>
      </div>

      </Layout>
    )
  }
}

export default ArticleIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { date: { ne: null } } }
      ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
