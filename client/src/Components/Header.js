import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Header() {
  return <div>
      <p>Header</p>
      <NavLink to="/Home"></NavLink>
    </div>
}
