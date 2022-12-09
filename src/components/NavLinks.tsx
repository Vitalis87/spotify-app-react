import React, { FC } from 'react'
import { NavLink } from "react-router-dom";
import { links } from "../assets/constants";

interface NavLinksProps {
    handleClick: Function
}


const NavLinks: FC<NavLinksProps> = ({handleClick}) => {
  return (
    <div className="mt-10">
    {links.map((link) => (
      <NavLink
        to={link.to}
        key={link.name}
        onClick={() => handleClick && handleClick()}
        className="flex justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400"
      >
        <link.icon className="w-6 h-6 mr-2" />
        {link.name}
      </NavLink>
    ))}
  </div>
  )
}

export default NavLinks