import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header class="inner">
    <h2><a href="index.html"><i class="fas fa-code"></i>
        CodeGig</a></h2>
    <nav>
      <ul>
        <li>
      <Link to='/'><a>All Gigs</a></Link>
        </li>
        
        <li>
      <Link to='/add'><a>Add Gig</a></Link>
        </li>
      </ul>
    </nav>
  </header>
  )
}

export default Header