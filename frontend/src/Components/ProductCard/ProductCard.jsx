import './ProductCard.css'
export const ProductCard = ({element:{_id,title,price,offer,color,image,category,model}})=>{
    return(
        <>
        <div className='main'>
            <div className='imgDiv'>
                <img className='image' src={image} alt="" />
            </div>
            <div className='infoDiv'>
                <div className='title'>{title}</div>
                <div className='offer'>{offer}% 0FF</div>
                <div className='price'>₹{(Math.floor(price-(price*(offer/100)))).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}<span className='oPrice'>₹{price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</span></div>
            </div>
        </div>
        </>
    )
}