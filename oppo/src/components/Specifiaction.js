import React from 'react'
import "./styles/Specification.css"
const Specifiaction = () => {
  return (
      <div>
       <br/>
    <div className='specification-table'>
        <h2>Product Specifications</h2>
        <table>
            <tr className='table-row'>
                <td>Screen size</td>
                <td>6.43" AMOLED</td>
            </tr>
            <tr className='table-row-light'>
            <td>Screen-to-body ratio</td>
                <td>90.8%</td>
            </tr>
            <tr className='table-row'>
            <td>Resolution</td>
                <td>2400 x 1080</td>
            </tr>
            <tr className='table-row-light'>
                <td>Battery</td>
                <td>5000mAh</td>
            </tr>
            <tr className='table-row'>
            <td>Flash Charge</td>
                <td>33W</td>
            </tr>
            <tr className='table-row-light'>
            <td>Length</td>
                <td>about 160.31mm</td>
            </tr>
            <tr className='table-row'>
                <td>Width</td>
                <td>about 73.76mm</td>
            </tr>
            <tr className='table-row-light'>
            <td>Thickness</td>
                <td>about 7.95mm</td>
            </tr>
            <tr className='table-row'>
            <td>Weight</td>
                <td>about 175 g</td>
            </tr>
            
        </table>
          <h5>Learn Enough     <i className='arrow up'></i></h5>
    </div>
    </div>
  )
}

export default Specifiaction
