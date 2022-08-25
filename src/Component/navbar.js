import React, { useEffect, useState } from 'react'
import logo from "../images/logo.png"
import avatar from "../images/avatar.png"
import"./Nav.css"

function Navbar() {

    const [show , handleShow] = useState(false);

    useEffect(()=>{
        window.addEventListener("scroll" , () => {
       if(window.scrollY > 100){
        handleShow(true);
       }
       else  handleShow(false);
    });
    return () => {
window.removeEventListener("scroll" , ()=>{
    handleShow(false);
});
    };
    },[]);

  return (
    <div className={`nav ${show && "nav_black" }`}>
      <img className='logo'
       src={logo}
       alt="Netflix Logo"
             />
             <hr className='logo' />

            <img className='avatar'
       src={avatar}
       alt="Netflix Logo"
      />
      <hr className='avatar' />
    </div>
  )
}

export default Navbar
