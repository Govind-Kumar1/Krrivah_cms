// components/Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="absolute top-0 z-20 w-full flex justify-between items-center px-[5.5vw] pt-[2.5vh] text-white">
      <div className="flex items-center gap-2">
        <img src="/Logo (2).png" alt="Logo" className="h-12 w-[200px] object-contain" />
         {/* <p className=' w-full -ml-10 text-2xl'>KRRIVAH</p> */}
      </div>

      <div className="flex gap-[4vw] font-sans font-semibold text-[12px] leading-[100%] tracking-[2px] uppercase">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `px-4 py-3 rounded-full transition-all duration-200 ${
              isActive
                ? "bg-white text-black"
                : "hover:bg-white hover:text-black"
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
                ? "bg-white text-black"
                : "hover:bg-white hover:text-black"
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
                ? "bg-white text-black"
                : "hover:bg-white hover:text-black"
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
                ? "bg-white text-black"
                : "hover:bg-white hover:text-black"
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
                ? "bg-white text-black"
                : "hover:bg-white hover:text-black"
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