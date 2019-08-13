import React from 'react'
import { Link } from 'gatsby'

export default function Banner() {
  return (
    <div className="Banner">
      <Link to="/">
        <img className="Banner-logo" src="/ash-logo-blackfishv4.00_360x60.png" alt="Alan Hylands" />
      </Link>
    </div>
  )
}
