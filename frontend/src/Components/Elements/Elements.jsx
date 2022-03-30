import styled from "styled-components"
import { SingleElement } from "./SingleElement"

export const Elements=()=>{
    const Main = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
    `
    return (
        <Main>
            <SingleElement name={'Phone'} image={'https://opsg-img-cdn-gl.heytapimg.com/epb/202202/21/PnZ8zmfbP1zX35bI.jpg'}/>
            <SingleElement name={'Audio'} image={'https://opsg-img-cdn-gl.heytapimg.com/epb/202202/21/J11GlDMJS5mbMcXm.jpg'}/>
            <SingleElement name={'Wearables'} image={'https://opsg-img-cdn-gl.heytapimg.com/epb/202202/21/46EjMDYql1YC3PSl.jpg'}/>
            <SingleElement name={'Accessories'} image={'https://opsg-img-cdn-gl.heytapimg.com/epb/202202/21/whJ8Sg026pvLqtis.jpg'}/>
        </Main>
    )
}