import React from 'react'
import './menus.css'
import { FcHome, FcAbout, FcBriefcase, FcStackOfPhotos, FcVideoProjector, FcBusinessContact } from "react-icons/fc";
import { HiMiniAcademicCap } from "react-icons/hi2";
const Menus = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <div className='navebar-profile-pic'>
            <img src="/my_profile_pic.jpg" alt="Profile pic" />
          </div>
          <div className='nav-items'>
            <div className='menu-box'><FcHome size={25} />Home</div>
            <div className='menu-box'><FcAbout size={25} />About</div>
            <div className='menu-box'><FcBriefcase size={25} />Experience</div>
            <div className='menu-box'><FcStackOfPhotos size={25} />Tech stack</div>
            <div className='menu-box'><HiMiniAcademicCap size={25} />Education</div>
            <div className='menu-box'><FcVideoProjector size={25} />Projects</div>
            <div className='menu-box'><FcHome size={25} />Testimonial</div>
            <div className='menu-box'><FcBusinessContact size={25} />Contact</div>
          </div>
        </>
      ) : (
        <>
          <div className='nav-items'>
            <div className='toggled-menu'><FcHome size={30} title='Home'/></div>
            <div className='toggled-menu'><FcAbout size={30} title= 'About'/></div>
            <div className='toggled-menu'><FcBriefcase size={30} title= 'Experience'/></div>
            <div className='toggled-menu'><FcStackOfPhotos size={30} title= 'Tech stack'/></div>
            <div className='toggled-menu'><HiMiniAcademicCap size={30} title= 'Education'/></div>
            <div className='toggled-menu'><FcVideoProjector size={30} title= 'Projects'/></div>
            <div className='toggled-menu'><FcHome size={30} title= 'Testimonial'/></div>
            <div className='toggled-menu'><FcBusinessContact size={30} title= 'Contact'/></div>
          </div>
        </>
      )}

    </>
  )
}

export default Menus