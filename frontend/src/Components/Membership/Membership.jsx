import styled from "styled-components"
import './Membership.css'
export const Membership = ()=>{
    const Main =styled.div`
    width:100%;
    display:flex;
    justify-content:space-between;
    `
    return (
        <div>
            <div id="title">Membership</div>
            <Main>
                <div className="imageLink">
                    <img src="https://opsg-img-cdn-gl.heytapimg.com/epb/202203/07/m5GYYCscXYRLRxJL.jpg" alt="" className="image"/>
                </div>
                <div className="imageLink">
                    <img src="https://opsg-img-cdn-gl.heytapimg.com/epb/202203/07/Z9hIyU5uLoArA4rP.jpg" alt="" className="image"/>
                </div>
                <div className="imageLink">
                    <img src="https://opsg-img-cdn-gl.heytapimg.com/epb/202203/07/qJJNcmbWQdAAHYHN.jpg" alt="" className="image"/>
                </div>
            </Main>
        </div>
    )
}