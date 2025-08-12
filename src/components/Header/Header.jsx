import React from 'react'
import { NavLink } from 'react-router'

const Header = () => {
  return (
    <div>
        <NavLink className="mr-[20px]" to={"/"}>Home</NavLink>
        <NavLink to={"/login"}>Login</NavLink>
    </div>
  )
}

export default Header