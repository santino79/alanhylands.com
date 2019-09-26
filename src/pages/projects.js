import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"


class Projects extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Current and Past Projects" 
          keywords={[`projects`, `Alan`, `Hylands`, `writer`]}
        />

      <div className="Column">
          <div className="MainContent">
            <div className="u-textLeft">
            <h1>Projects.</h1>
            
            <h3>Founder at Santinotech.</h3>
            I run tech consultancy <a href="https://santinotech.com">Santinotech</a>. I help small teams 
            use their data and technology to build stronger, more ethical, data-informed businesses.
            
            <h3>Technical Director at Cura Fitness.</h3>

            <a href="https://curafitness.com">Cura Fitness</a> is a boutique fitness studio based in County Down, Northern Ireland. 
            I run the back office operations including finance, data, technology, systems and administration.  
            
            <h3>Writer at Simple Analytical.</h3>
           
            I share my best lessons, hints, tips and strategies for <strong>data analysts</strong> on <a href="https://simpleanalytical.com">SimpleAnalytical.com</a>.  
            I help them level up their data analysis skills and use them to build better, more profitable, data-driven businesses.
            
            <h3>Course Creator at SQL Crash Course.</h3>

            I created an <a href="https://sqlcrashcourse.com">online SQL course</a> to help people build the solid groundwork they need to get up to speed quickly with SQL.

            <h3>Writer here and elsewhere.</h3>

            This is my personal website where I write <a href="/articles">articles</a> on a variety of topics including business, personal finance, tech, careers, writing and my quest to build a simple kind of life.
            <br /><br />
            I've been a professional writer with clients including <strong>About.com</strong> and <strong>The New York Times Company</strong>.
            These days, I am a contributing writer on <a href="https://towardsdatascience.com">Towards Data Science</a>, <a href="https://hackernoon.com/">Hacker Noon</a> and <a href="https://dev.to/alanhylands">Dev.to</a>.
            

            <h2><em>Past Projects.</em></h2>

            <h3>Liz's Lockets.</h3>

            <strong>Liz's Lockets</strong> was my wife's e-commerce business which sold memory lockets and costume jewellery. I built and ran the e-commerce store.

            I also appeared regularly as her "Lovely Debbie McGee" at craft fairs and markets when we took the business out on the road. Soon to be re-launched with our 9 year old daughter at the helm as her first taste of entrepreneurship.

            <h3>Sports Boffin.</h3>

            <strong>Sports Boffin</strong> was a sports betting prediction engine.

            I started with football (of course) and built a full data platform on MS SQL Server. Match results and betting odds were scraped and loaded daily. I built a predictive algorithm that compared each game to the two sides' previous form in similarly matched encounters (based on my modified homespun version of Rateform).

            <h3>Liquid Gem.</h3>

            <strong>Liquid Gem</strong> was a Business Intelligence and Marketing Strategy consultancy I set up in 2011 with some old comrades.

            We did some great work in Irish banking and made some contacts in New York. We parked it in late 2012 when a "too good to turn down" offer to go in-house at our main client came up.

            <h3>Liquid Voices.</h3>

            <strong>Liquid Voices</strong> was one of the projects we spun out from Liquid Gem back in 2012. A B2C membership site which let members complete online surveys for companies and compete to win prizes and earn rewards.

            <h3>State Of The Game.</h3>

            <strong>State of the Game</strong> was a football blog I started in 2005. It grew massively for a few years and gave me the opportunity to become a professional football writer for About.com and The New York Times Company.

            I covered more of the back story in an article called <a href="https://alanhylands.com/i-want-to-be-a-football-writer-when-i-grow-up/">I Want To Be A Football Writer When I Grow Up</a>.

            <h3>White Storm.</h3>

            <strong>White Storm</strong> was my first e-commerce development agency, started in 2003. 
            
            It stayed with me either as my full-time focus or as a vehicle for my side projects until 2007 when I set it aside and joined the big bad world of banking.






          </div>
        </div>
      </div>

      </Layout>
    )
  }
}

export default Projects

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        author
      }
    }
  }
`
