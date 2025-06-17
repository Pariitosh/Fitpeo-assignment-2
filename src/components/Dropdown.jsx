import React, { useState } from 'react';
import '../styles/Dropdown.css'
import home from '../assets/home.svg'
import about from '../assets/about.svg'
import latest from '../assets/latest.svg'
import contact from '../assets/contact.svg'
import global from '../assets/global.svg'
import plus from '../assets/plus.svg'

export default function Dropdown() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMenuClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleOutsideClick = (e) => {
    if (!e.target.closest('.dropup-menu')) {
      setIsExpanded(false);
    }
  };

  return (
    <>
        
          <div className={`dropup-menu ${isExpanded ? 'expanded' : ''}`}>
            <div className="menu-item main" onClick={handleMenuClick}>
              <p>Menu</p>
              <img className='plus' src={plus}/>
            </div>
            
            <div className={`submenu-items ${isExpanded ? 'show' : ''}`}>
              <div className="submenu-item" >
                <img src={home}/>
               Home
              </div>
              <div className="submenu-item" >
                <img src={about}/>
                About
              </div>
              <div className="submenu-item" >
                <img src={latest}/>
                Latest
              </div>
              <div className="submenu-item" >
                <img src={contact}/>
                Contact
              </div>
              <div className="submenu-item" >
                <img src={global}/>
                Choose Global Chapter
              </div>
            </div>
            
            <div className="menu-item declare" >
              Declare Now
            </div>
          </div>
       
     
    </>
  );
}