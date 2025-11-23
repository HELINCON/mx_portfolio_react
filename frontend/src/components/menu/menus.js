import React from 'react'
import './menus.css'
import { FcHome } from "react-icons/fc";
const Menus = ({toggle}) => {
  return (
    <>
    {toggle ? (
      <>
       <div className='navebar-profile-pic'>
        <img src = "/my_profile_pic.jpg" alt = "Profile pic"/>
    </div>
    <div className='nav-items'>
      <div className='nav-item'>
        <div className='nav-link'>
          <FcHome/>
          Home</div>
      </div>
    </div>
    </>
    ) : (
      <h1>.</h1>
    )}

    </>
  )
}

export default Menus