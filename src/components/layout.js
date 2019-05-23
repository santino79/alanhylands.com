import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Banner from './banner'
import Navigation from './navigation'
import Footer from './footer'
// import Meta from './meta'
// import PersonSchema from './schema/person'

import '../graphql/fragments'
// import '../styles/index.scss'

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          ...Index_siteMetadata
        }
      }
    `}
    render={data => (
      <>
        <Helmet>
          <meta name="google-site-verification" 
          content="sMd20Bbu-a1WQy1w6iQm4frw8Zu9HAAuxdfLJXG86_k" />
        </Helmet>
        <div className="Column">
          <Navigation />
          <Banner />
        </div>
        <div className="MainContent u-textLeft">
          {children}
        </div>
        <div className="Footer">
          <Footer />
        </div>
      </>
    )}
  />
)
