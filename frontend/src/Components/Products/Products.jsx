import {ProductCard} from '../ProductCard/ProductCard'

export const Products = ({name,title,products})=>{
    return(
        <div id={name}>
        <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '15px 0px'
                }}>
                    <div style={
                        {
                            textAlign: 'left',
                            fontSize: '30px',
                        }
                    }>{title}</div>
                    <div style={{
                        textDecoration:'underline',
                        color:'#2ec84e',
                    }}>More</div>
                </div>
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent:'space-between',
                    rowGap:'40px',
                    columnGap: '15px'
                }}>
                    {products.map((ele)=><ProductCard key={ele._id} element={ele} />)}
                </div>
        </div>
    )
}