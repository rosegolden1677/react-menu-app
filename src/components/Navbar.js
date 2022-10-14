import React, { useState } from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import { VscChromeClose } from "react-icons/vsc";
import { Link } from "react-router-dom";

const Navbar = () => {

  const [display, setDisplay] = useState(true);

  return (
    <nav>
      {/* <img className="menu-icon" src="menu.png" alt="menu icon" /> */}
      <button className='nav-btn' onClick={() => setDisplay(!display)}>
        {
          display ? <VscChromeClose className='menu-icon' /> : <AiOutlineMenu className='menu-icon' />
        }
      </button>
      <h3>
        <Link to='/'>Breakfast Bar</Link>
      </h3>

      {
        display && 
        <div className='nav-links'>
          <Link to='/menu'>Menu</Link>
          <Link to='/reviews'>Reviews</Link>
          <Link to='/about'>About</Link>
        </div>
      }
    </nav>
  );
}

export default Navbar;