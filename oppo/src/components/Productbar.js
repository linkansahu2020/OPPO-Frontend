import React from 'react'
import "./styles/Productbar.css"
const Productbar = () => {
  return (
    <div className='product-common-bar'>
        <div className='floor'>
            <div className='introduce-right'>
                <div className='introduce-right-top'>
                    <h5>₹ 19,990</h5>
                    <p className='span-tag'>(incl. of all taxes)</p>
                </div>
            </div>
            <div className='btn-box'>
                <button id='st-btn'>
                    <div >Add to Cart</div>
                </button>
                <button id='nd-btn'>
                    <div>Buy Now</div>
                </button>
            </div>
        </div>
    
    </div>
  )
}

export default Productbar
