import './ProductBar.css'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
export const ProductBar = ({id,price}) => {
    const navigate = useNavigate()
    const {user} = useSelector((store)=>store)
  return (
    <div className='product-common-bar'>
        <div className='floor'>
            <div className='introduce-right'>
                <div className='introduce-right-top'>
                    <span style={{fontSize:'20px',fontWeight:'bold'}}>₹ {price}</span><br/>
                    <span className='span-tag'>(incl. of all taxes)</span>
                </div>
            </div>
            <div className='btn-box'>
                <button id='st-btn'>
                    <div >Add to Cart</div>
                </button>
                <div onClick={()=>{
                    if(!user){
                        alert('Please Signin your account')
                        navigate('/signin');
                    } else navigate(`/checkout/${id}`)
                }}>
                    <button id='nd-btn'>
                        <div>Buy Now</div>
                    </button>
                </div>
            </div>
        </div>
    
    </div>
  )
}