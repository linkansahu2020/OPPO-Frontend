export const SliderInfo = ({name,title,content,discount,price,col,small})=>{
    return(
        <div style={{
            position: 'absolute',
            top: '15%',
            textAlign: 'left',
            fontSize: '17px',
            width:'40%',
            height: 'auto',
            lineHeight: '45px',
            margin: '5% 15%',
            color: `${col}`
        }}>
            <div style={{
                fontSize: '40px'
            }}>{name}</div>
            <div style={{
                fontSize: '25px'
            }}>{title}</div>
            <div style={{color:"#5c5959"}}>{content}</div>
            <div style={{
                fontSize: '20px'
            }}>{discount} <span style={{
                fontSize: '15px',
                color: '#5c5959'
            }}>{price}</span></div>
            <div style={{display:'flex',columnGap:'20px'}}>
                <button style={{
                    fontWeight: 'bold',
                    padding: '10px 20px',
                    border: '1px solid transparent',
                    borderRadius: '3px',
                    background:`${col==='black'?'black':'white'}`,
                    color: `${col==='black'?'white':'black'}`,
                }}>Buy Now</button>
                <span style={{color:"#5c5959"}}>{small}</span>
            </div>
        </div>
    )
}