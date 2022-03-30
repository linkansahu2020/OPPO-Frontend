import styled from "styled-components"


export const OfferTemp = ({name,title,button,background,col})=>{

    const Main = styled.div`
    background-image: url(${background});
        background-position: center;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        padding: 100px;
        text-align: left;
    `
    return(
        <Main>
                <div>
                    <div style={{
                        fontSize:'35px',
                        marginBottom: '10px',
                        color: `${col}`
                    }}>{name}</div>
                    <div style={{
                        fontSize:'20px',
                        marginBottom: '70px',
                        color:`${col}`
                    }}>{title}</div>
                    <button style={{
                        padding: '15px 25px',
                        background: '#2ec84e',
                        border: '1px solid transparent',
                        color: 'white',
                        borderRadius: '5px',
                        fontWeight: 'bold',
                    }}>{button}</button>
                </div>
            </Main>
    )
}