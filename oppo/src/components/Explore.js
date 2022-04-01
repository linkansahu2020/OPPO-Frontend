import React from 'react'
import "./styles/explore.css"
const Explore = () => {
  return (
  
    
      
     <>
    
   <h2>Explore Oppo</h2>
        <div className="container">
        
            <div id="st-box">
                <img className='expimg' src=
"https://image.oppo.com/content/dam/oppo/en/mkt/homepage/universe/OPPO%20Membership-pc.jpg"
               />
              <h3>Oppo Membership</h3>
              <p>Learn More</p>
              <div className='learnbar' ></div>
            </div>
              
            <div id="nd-box">
                <img  className='expimg' src='https://image.oppo.com/content/dam/oppo/in/mkt/homepage/explore-oppo/Raffle.png.thumb.webp'/>
                <h3>Raffle Campaign</h3>
                <p>Learn More</p>
                <div className='learnbar' ></div>
            </div>
              
            <div id="rd-box">
                <img  className='expimg' src="https://image.oppo.com/content/dam/oppo/en/mkt/homepage/universe/Education%20Program-pc.jpg"
                />
                <h3>Education Program</h3>
                <p>Learn more</p>
                <div className='learnbar' ></div>
            </div>
        </div>
      
        </>
       
  )
}

export default Explore
