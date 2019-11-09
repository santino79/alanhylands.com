import React from 'react'
// import SEO from './seo'
import { StaticQuery, graphql } from 'gatsby'

import Footer from './footer'
import Header from './header'


import '../graphql/fragments'

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
      
        <div className="Header">
          <Header />
        </div>
        <div className="BodyContent">
          {children}
        </div>
        <div className="Footer">
          <Footer />
        </div>
      </>
    )}
  />
)
