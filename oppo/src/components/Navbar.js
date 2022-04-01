import React from 'react'
import "./styles/Navbar.css"
const Navbar = () => {
  return (
    <div className='navbar'>
     <h3>oppo</h3>
     {/* <div>Smatphones</div>
     <div>Iot Products</div>
     <div>About OPPO</div>
     <div>ColorOS</div>
     <div>Support</div>
     <div>Store Locator</div> */}
     <a  className="navlinks" href="/#miphones">Oppo</a>
           <a   className="navlinks"  href="/#oppo">SmartPhones</a>
           <a   className="navlinks" href="/#Iot">Iot Products</a>
           <a   className="navlinks" href="/#about oppo">About OPPO</a>
           <a   className="navlinks" href="/#coloros">ColorOS</a>
           <a  className="navlinks" href="/#support">Support</a>
           <a   className="navlinks" href="/#storelocator">Store Locator</a>
           <div className="searchbox">
              <input type="text" name="search"  placeholder="Search Products"/>
              

          </div>
            

    </div>
  )
}

export default Navbar
