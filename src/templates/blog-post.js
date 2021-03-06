import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import Bio from "../components/bio"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    // const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />

      <div className="Column">
          <div className="MainContent">
            <div className="u-textLeft">

        <h1 className="u-textCenter">{post.frontmatter.title}</h1>
        <p
          style={{
            ...scale(-1 / 5),
            display: `block`,
            marginBottom: "50px",
            marginTop: rhythm(-1),
          }}
          
        >
        </p>
        <div className="u-textLeft"  dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
            style={{
              marginBottom: rhythm(1),
            }}
          />
        <Bio />

          </div>
        </div>
      </div>


      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description 
      }
    }
  }
`
