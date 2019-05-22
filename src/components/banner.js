import React from 'react'
import { Link } from 'gatsby'

export default function Banner() {
  return (
    <h2 className="Banner">
      <Link to="/">
        <span className="Banner-title">Alan Hylands</span>
      </Link>
    </h2>
  )
}
