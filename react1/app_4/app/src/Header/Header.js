import './Header.css';
import Menu from '../Menu/Menu';
import { useState } from 'react';

function Header() {
    const [menuActive, setMenuActive] = useState (false);
    const items=[
        {href: "../App/App.js", value: "Portfolio"},
        {href: "../App/App.js", value: "Budget"},
        {href: "../App/App.js", value: "DesignUs"},
        {href: "../App/App.js", value: "About Us"},
        {href: "../App/App.js", value: "Contact Us"}
    ]
    return (
        <div className='header'>
            <nav>
            <div className="header_burger" onClick={() => setMenuActive(!menuActive)}>
                <span></span>
            </div>
            </nav>
            <Menu active = {menuActive} setActive = {setMenuActive} header={"Menu"} items={items}></Menu>
      </div>
      
    );
    
  }
  
  export default Header;