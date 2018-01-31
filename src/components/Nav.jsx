import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => (
  <div className='navbar'>
    <ul className='navlink'>
      <li>
        <NavLink to='/' exact className='links' activeClassName='active'>
          About
        </NavLink>
      </li>
      <li>
        <NavLink to='/resume' exact className='links' activeClassName='active'>
          Resume
        </NavLink>
      </li>
      <li>
        <NavLink
          to='/projects'
          exact
          className='links'
          activeClassName='active'
        >
          Projects
        </NavLink>
      </li>
      <li>
        <a className='links' href='http://github.com/bardleware' target='_blank'>
          Github
        </a>
      </li>
    </ul>
  </div>
)

export default Nav
