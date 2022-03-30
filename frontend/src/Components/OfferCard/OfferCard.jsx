import styled from "styled-components"
import { OfferTemp } from "../OfferTemp/OfferTemp";

export const OfferCard = ()=>{
    const Main = styled.div`
    display: grid;
    gap:30px;
    div>img{
        width:100%;
        border-radius: 10px;
    }
    `
    return(
        <Main>
            <div>
            <div style={
                    {
                        textAlign: 'left',
                        fontSize: '30px',
                        padding: '15px 0px'
                    }
                }>Exicting Offers</div>
                <img src="https://opsg-img-cdn-gl.heytapimg.com/epb/202203/04/ySbI1tncF0NsVs8R.jpg" alt=""/>
            </div>
            <OfferTemp name={'Raffle Campaign'} title={'Raffle of our best-sellings'} button={'Learn more'} background={'https://opsg-img-cdn-gl.heytapimg.com/epb/202203/07/0M0KF8Je0zTmyYgu.jpg'} col={'black'}/>
            <OfferTemp name={'How To Get K10 At The Best Price?'} title={'Exclusive rewards and offers for you'} button={'Join us'} background={'https://opsg-img-cdn-gl.heytapimg.com/epb/202203/24/XeKlUWwhrX3p6orT.jpg'} col={'white'}/>
            <OfferTemp name={'Education Program'} title={`Student can get 5% extra discount on nearly all the OPPO products`} button={'Learn more'} background={'https://opsg-img-cdn-gl.heytapimg.com/epb/202203/07/QSAJ3Zf0lDSdtOd3.jpg'} col={'black'}/>
            <div>
                <div style={
                    {
                        textAlign: 'left',
                        fontSize: '30px',
                        padding: '15px 0px'
                    }
                }>Participate to Win</div>
                <img src='https://opsg-img-cdn-gl.heytapimg.com/epb/202203/17/mHIbFaDiT4ETAYHD.jpg' alt="" />
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
            }}>
                <div style={{width:'49%'}}>
                    <img width={'100%'} src="https://opsg-img-cdn-gl.heytapimg.com/epb/202203/07/KUpEl1GLLKeaciWb.jpg" alt="" />
                </div>
                <div style={{width:'49%'}}>
                    <img width={'100%'} src="https://opsg-img-cdn-gl.heytapimg.com/epb/202203/07/LowE1J8qk3evJE6S.jpg" alt="" />
                </div>
            </div>
        </Main>
    )
}