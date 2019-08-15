import React from 'react'
import { Link } from 'gatsby'

export default function Navigation() {
  return (
    <nav>
        <Link className="NavigationItem" to="/articles/">Articles</Link>
        <Link className="NavigationItem" to="/about">About</Link>
    </nav>
  )
}