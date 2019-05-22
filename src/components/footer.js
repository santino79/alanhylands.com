import React from 'react'
//import { Link } from 'gatsby'

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
          © {new Date().getFullYear()} 
          {` Alan Hylands - Powered by `}
          <a href="https://santinotech.com">Santinotech</a>
      </div>
    </footer>
  )
}
