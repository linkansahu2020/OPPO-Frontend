export const SingleElement = ({name,image})=>{
    return (
        <div style={{
            position: 'relative',
            textAlign: 'center',
            width:'24%'
        }}>
            <img width={'100%'} src={image} alt="" />
            <div style={{
                position: 'absolute',
                top: '15%',
                textAlign: 'center',
                width: '100%',
                fontSize: '17px'
            }}>{name}</div>
        </div>
    )
}