import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Twitter, LinkedIn, GitHub, Email } from '../components/social'

class AboutPage extends React.Component {
  render() {
    const { data } = this.props

// export default function About({ data }) {
//   const page = data.markdownRemark
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
            <div className="u-textLeft">
                  
              <h1>My story.</h1>

              <h2>Who I am.</h2>

              My name is <strong>Alan Hylands</strong> and I am a <strong>writer, data consultant and developer</strong> from Northern Ireland.

              <h2>What I've done.</h2>

              I've worked in <strong>tech, data and analytics</strong> for nearly 20 years - building, reporting, analysing, managing and mentoring.

              <h2>I have:</h2>

              <ul>
                <li>Helped nurses provide better care for their patients by more accurately recording and reporting their treatments.</li>
                <li>Allowed small local businesses to successfully sell their goods to all four corners of the globe from the comfort of their own homes.</li>
                <li>Kept the savings of hundreds of thousands of ordinary people safe when the dark clouds of the financial crash loomed over us all.</li>
                <li>Built Customer Lifetime Value models to segment customer bases and get to know the best customers better.</li>
                <li>And much, much more (that I'm not allowed to tell about. <em>Good old corporate NDAs.</em>)</li>
              </ul>

              <h2>A little more background.</h2>

              I studied <strong>Accounting</strong> at university and planned for a future in finance.
              <br /><br />
              Then I found the <strong>internet, programming and databases</strong>.
              <br /><br />
              I started my first <strong>e-commerce</strong> development agency in 2003. Since then I have worked on a number of small business start-ups in e-commerce, analytics, marketing, online research and content marketing.
              <br /><br />
              <a href="https://alanhylands.com/i-want-to-be-a-football-writer-when-i-grow-up/">I started a successful football website</a> which gave me the opportunity to write professionally for the <strong>New York Times Company</strong>.
              <br /><br />
              Quite unexpectedly, I was seduced into the corporate world of <strong>banking and financial services</strong> in the boom-time mid-noughties.
              <br /><br />
              I spent over twelve years running <strong>Data and Analytics projects</strong> for a large UK and Ireland banking group. I worked my way up through the ranks from senior data analyst to senior analytics manager to <strong>Head of Retail Commercial Excellence</strong>.
              <br /><br />
              We operated as a small, highly skilled mini-consultancy, helping guide the business on getting most value out of their commercial data driven projects and programmes.
              <br /><br />
              Now in my own consulting work at <a href="https://santinotech.com">Santinotech</a>, I bring all of my <strong>technical, analytical and entrepreneurial experience</strong> to the table to get results for our customers.
              <br /><br />
              I am also <strong>Technical Director</strong> at <a href="https://curafitness.com">Cura Fitness</a>, a boutique fitness studio based in County Down, Northern Ireland.

              <h2>Where you can find me.</h2>
              
              I live in the same small town I grew up in with my beautiful and very talented wife and our two equally beautiful and talented daughters.
              <br /><br />
              You can contact or follow me on the sites below:
              
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

export default AboutPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        author
      }
    }
  }
`
