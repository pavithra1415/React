import React from 'react'
import {Link} from 'react-router-dom'
export default function Navigation() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/about">About</Link>
      <Link to="/navigation">Navigation</Link>
    </div>
  )
}
