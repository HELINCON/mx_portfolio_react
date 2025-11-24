import React from 'react'
import './menus.css'
import { FcHome } from "react-icons/fc";
const Menus = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <div className='navebar-profile-pic'>
            <img src="/my_profile_pic.jpg" alt="Profile pic" />
          </div>
          <div className='nav-items'>
            <div className='menu-box'><FcHome size={40} />Home</div>
            <div className='menu-box'><FcHome size={40} />About</div>
            <div className='menu-box'><FcHome size={40} />Document</div>
            <div className='menu-box'><FcHome size={40} />Education</div>
            <div className='menu-box'><FcHome size={40} />Random</div>
            <div className='menu-box'><FcHome size={40} />Home2</div>
            <div className='menu-box'><FcHome size={40} />Home3</div>
            <div className='menu-box'><FcHome size={40} />Home4</div>
          </div>
        </>
      ) : (
        <h1>.</h1>
      )}

    </>
  )
}

export default Menus