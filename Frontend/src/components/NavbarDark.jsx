// components/Navbar.jsx
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      className=" fixed border-b border-gray-200  
    top-0 z-20 w-full flex justify-between items-center px-[5.5vw] pt-[2.5vh] py-3 "
    >
      <div className="flex items-center gap-2">
        <img
          src="/Logo.png"
          alt="Logo"
          className="h-12 w-[200px] object-contain "
        />
      </div>

      <div className="flex gap-[4vw] font-sans font-semibold text-[12px] leading-[100%] tracking-[2px] uppercase">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `px-4 py-3 rounded-full transition-all duration-200 ${
              isActive
                ? "bg-black text-white"
                : "hover:bg-black hover:text-white"
            }`
          }
        >
          ABOUT
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `px-4 py-3 rounded-full transition-all duration-200 ${
              isActive
                ? "bg-black text-white"
                : "hover:bg-black hover:text-white"
            }`
          }
        >
          PROJECTS
        </NavLink>
        <NavLink
          to="/design"
          className={({ isActive }) =>
            `px-4 py-3 rounded-full transition-all duration-200 ${
              isActive
                ? "bg-black text-white"
                : "hover:bg-black hover:text-white"
            }`
          }
        >
          DESIGN
        </NavLink>
        <NavLink
          to="/blogs"
          className={({ isActive }) =>
            `px-4 py-3 rounded-full transition-all duration-200 ${
              isActive
                ? "bg-black text-white"
                : "hover:bg-black hover:text-white"
            }`
          }
        >
          BLOGS
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `px-4 py-3 rounded-full transition-all duration-200 ${
              isActive
                ? "bg-black text-white"
                : "hover:bg-black hover:text-white"
            }`
          }
        >
          CONTACT
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;