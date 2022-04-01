import { Link } from 'react-router-dom'
import { FaRegUserCircle,FaShoppingBag,FaSearch } from 'react-icons/fa';
import './Navbar.css'
import { SmartPhones } from './Smartphones';
const Navbar = () => {
  return (
    <div style={{
        position:'fixed',
        width: '100%',
        zIndex:'10'
    }}>
    <div className='navbar'>
        <div>
            <Link to={'/'}>
                <div id="o_logo"></div>
            </Link>
        </div>
        <div id='all_elementes'>
            <div onMouseOver={()=>{
                document.getElementById('info_div').style.display = 'block'
            }} onMouseLeave={()=>{
                // document.getElementById('info_div').style.display = 'none'
            }}>Smatphones</div>
            <div onMouseOver={()=>{
                document.getElementById('info_div').style.display = 'block'
            }} onMouseLeave={()=>{
                document.getElementById('info_div').style.display = 'none'
            }}>IoT Products</div>
            <div>Store</div>
            <div onMouseOver={()=>{
                document.getElementById('info_div').style.display = 'block'
            }} onMouseLeave={()=>{
                document.getElementById('info_div').style.display = 'none'
            }}>About OPPO</div>
            <div>ColorOS</div>
            <div>Support</div>
            <div>Store Locator</div>
        </div>
        <div id='l_icons'>
            <FaSearch/>
            <FaShoppingBag/>
            <FaRegUserCircle/>
        </div>
     {/* <a  className="navlinks" href="/#miphones">Oppo</a>
           <a   className="navlinks"  href="/#oppo">SmartPhones</a>
           <a   className="navlinks" href="/#Iot">Iot Products</a>
           <a   className="navlinks" href="/#about oppo">About OPPO</a>
           <a   className="navlinks" href="/#coloros">ColorOS</a>
           <a  className="navlinks" href="/#support">Support</a>
           <a   className="navlinks" href="/#storelocator">Store Locator</a>
           <div className="searchbox">
              <input type="text" name="search"  placeholder="Search Products"/>
              

          </div> */}
            
    </div>
    <div id='info_div' style={{display:'none'}}>
        <SmartPhones/>
    </div>
    </div>
  )
}

export default Navbar