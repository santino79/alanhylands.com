import React from 'react'
import { Link } from 'gatsby'

export default function Banner() {
  return (
    <div className="Banner">
      <Link to="/">
        <img src="/ash-logo-blackfishv2.00_200x67.png" className="BannerLogo" alt="Alan Hylands" />
      </Link>
    </div>
  )
}
