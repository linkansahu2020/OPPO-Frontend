
import styled from "styled-components"
import { Footer } from "./Footer/Footer"
import Navbar from "./Navbar/Navbar"
import { Slider } from "./Slider/Slider"

export const HomePage = ()=>{
    const SmartDiv = styled.div`
    width: 100%;
    background: #f7f7f7;
    margin-top: 2%;
    padding: 6% 0px;
    border: 1px solid transparent;
    `
    const Explore = styled.div`
    width: 100%;
    background: #c0a69a;
    padding: 6% 0px;
    border: 1px solid transparent;
    `
    const Contact = styled.div`
    width: 100%;
    background: #f9f4ec;
    padding: 4% 0px;
    border: 1px solid transparent;
    `
    const Button1 = styled.button`
    color: white;
    background: black;
    padding: 10px 20px;
    border: 1px solid transparent;
    cursor: pointer;
    `
    const Button2 = styled.button`
    color: black;
    background: transparent;
    padding: 10px 20px;
    border: 1px solid transparent;
    text-decoration: underline;
    cursor: pointer;
    `
    const Span = styled.span`
    font-size: 13px;
    `
    return(
        <div style={{marginTop: '60px'}}>
            <Navbar/>
            <Slider/>
            <div style={{
                width:'65%',
                margin: 'auto',
                display: 'flex',
                justifyContent: 'space-between',
                background: 'black'
            }}>
                <img src="https://image.oppo.com/content/dam/oppo/in/mkt/homepage/in-top-banner/orderdeduction/1.png.thumb.webp" alt="" />
                <div style={{color: 'white',padding:'1%'}}>
                    <h2>Spend points as cash</h2>
                    <span>Save up to 50%</span>
                </div>
                <div style={{ width: '35%'}}>
                    <button style={{padding: '15px 20px',fontSize: '20px',cursor: 'pointer',marginTop:'9%'}}>Learn More</button>
                </div>
            </div>
            <SmartDiv>
                <div style={{
                    width: '65%',
                    margin: 'auto',
                    textAlign: 'left',
                }}>
                    <div style={{fontSize: '40px',marginBottom:'4%'}}>Smartphones</div>
                    <div style={{display: 'flex',width: '100%',columnGap: '40px'}}>
                        <div style={{flex:'2',lineHeight: '30px'}}>
                            <img width={'100%%'} src="https://image.oppo.com/content/dam/oppo/in/mkt/homepage/middle/find-x2-middle-banner-pc.jpg.thumb.webp" alt="" />
                            <div style={{fontSize:'20px'}}>OPPO Find X2</div>
                            <Span>Uncover the Ultimate</Span><br/>
                            <Button1>Learn More</Button1>
                        </div>
                        <div style={{flex:'4',lineHeight: '30px'}}>
                            <img width={'100%%'} src="https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/reno7/middlebanner/Reno7-middlebanner-blue-1600x1068-pc.jpg.thumb.webp" alt="" />
                            <div style={{fontSize:'20px'}}>OPPO Reno7 5G</div>
                            <Span>The Protraict Expert</Span><br/>
                            <Span>₹28,999</Span><br/>
                            <Button1>Learn More</Button1>
                            <Button2>Buy Now</Button2>
                        </div>
                    </div>
                    <div style={{display: 'flex',width: '100%',columnGap: '40px',marginTop:'8%'}}>
                        <div style={{flex:'4',lineHeight: '30px'}}>
                            <img width={'100%%'} src="https://image.oppo.com/content/dam/oppo/in/mkt/homepage/middle/f19s-middle-banner-pc.jpg.thumb.webp" alt="" />
                            <div style={{fontSize:'20px'}}>OPPO F19s</div>
                            <Span>33W Flash Charge, Sleekest Phone With 5000mAh Battery</Span><br/>
                            <Span>₹19,990</Span><br/>
                            <Button1>Learn More</Button1>
                            <Button2>Buy Now</Button2>
                        </div>
                        <div style={{flex:'2',lineHeight: '30px'}}>
                            <img width={'100%%'} src="https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/a76/middlebanner/A76-middlebanner-blue-1340x1786-pc.png.thumb.webp" alt="" />
                            <div style={{fontSize:'20px'}}>OPPO A76</div>
                            <Span>33W SUPERVOOC, 5000mAh Long-Lasting Battery, 90Hz Colour-Rich Punch-Hole Display</Span><br/>
                            <Span>₹17,499</Span><br/>
                            <Button1>Learn More</Button1>
                            <Button2>Buy Now</Button2>
                        </div>
                    </div>
                </div>
            </SmartDiv>
            <SmartDiv style={{background: 'white'}}>
            <div style={{
                    width: '65%',
                    margin: 'auto',
                    textAlign: 'left',
                }}>
                    <div style={{fontSize: '40px',marginBottom:'4%'}}>IoT Products</div>
                    <div style={{display: 'flex',width: '100%',columnGap: '40px'}}>
                        <div style={{flex:'2',lineHeight: '30px'}}>
                            <img width={'100%%'} src="https://image.oppo.com/content/dam/oppo/in/mkt/homepage/middle/watch-free/black_middlebanner-1340x1786-pc.jpg.thumb.webp" alt="" />
                            <div style={{fontSize:'20px'}}>OPPO Find X2</div>
                            <Span>Uncover the Ultimate</Span><br/>
                            <Span>AT ₹5,999</Span><br/>
                            <Button1>Learn More</Button1>
                            <Button2>Buy Now</Button2>
                        </div>
                        <div style={{flex:'4',lineHeight: '30px'}}>
                            <img width={'100%%'} src="https://image.oppo.com/content/dam/oppo/in/mkt/homepage/middle/buds-middle-banner-pc.jpg.thumb.webp" alt="" />
                            <div style={{fontSize:'20px'}}>OPPO Enco Buds</div>
                            <Span>The Best in Class Wireless Earbuds</Span><br/>
                            <Span>₹1,699</Span><br/>
                            <Button1>Learn More</Button1>
                            <Button2>Buy Now</Button2>
                        </div>
                    </div>
                </div>
            </SmartDiv>
            <Explore>
                <div style={{width:'65%',margin: 'auto',textAlign: 'left'}}>
                    <div style={{fontSize: '40px',marginBottom:'4%'}}>Explore OPPO</div>
                    <div style={{display: 'flex',width: '100%',columnGap: '40px'}}>
                        <div style={{flex:'2',lineHeight: '30px'}}>
                            <img width={'100%%'} src="https://image.oppo.com/content/dam/oppo/en/mkt/homepage/universe/OPPO%20Membership-pc.jpg" alt="" />
                            <div style={{fontSize:'20px'}}>OPPO Membership</div>
                            <Button2>Learn More</Button2>
                        </div>
                        <div style={{flex:'2',lineHeight: '30px'}}>
                            <img width={'100%%'} src="https://image.oppo.com/content/dam/oppo/in/mkt/homepage/explore-oppo/Raffle.png.thumb.webp" alt="" />
                            <div style={{fontSize:'20px'}}>Raffle Campaign</div>
                            <Button2>Learn More</Button2>
                        </div>
                        <div style={{flex:'2',lineHeight: '30px'}}>
                            <img width={'100%%'} src="https://image.oppo.com/content/dam/oppo/en/mkt/homepage/universe/Education%20Program-pc.jpg" alt="" />
                            <div style={{fontSize:'20px'}}>Education Program</div>
                            <Button2>Learn More</Button2>
                        </div>
                    </div>
                </div>
            </Explore>
            <Contact>
                <div style={{width:'35%', margin: 'auto'}}>
                    <div style={{fontSize: '35px',marginBottom:'4%'}}>Stay in touch with OPPO</div>
                    <div style={{color: '#999999',marginBottom:'4%'}}>Subscribe to receive news, promotions and recommendations about OPPO products and services from us and our partners.</div>
                    <div style={{
                        display: 'flex',
                        justifyContent:'space-between',
                        width:'100%',
                        border: '1px solid transparent',
                        borderRadius: '5px',
                        background: 'white',
                        marginBottom:'4.5%',
                    }}>
                        <div style={{
                            padding:'3% 2%',
                            borderRight:'1px solid #999999'
                        }}>+91</div>
                        <div>
                            <input type="text" placeholder="Your Telephone Number" style={{width:'400px',height:'50px',border: '1px solid transparent',fontSize:'15px',padding:' 1% 2%'}} name="" id="" />
                        </div>
                        <div style={{
                            paddingTop:'3%',
                            width:'25%',
                            background:'#999999',
                            color:'white',
                        }}>Subscribe</div>
                    </div>
                    <div style={{display: 'flex'}}>
                        <input type="checkbox" required/>
                        <div style={{color: '#999999',fontSize:'13px',textAlign:'left'}}>
                            I want to subscribe to receive news, promotions, product updates and more from OPPO and their partners.<br/>
                            <span style={{textDecoration: 'underline',color:'black'}}>By subscribing you agree to OPPO's Privacy Policy</span>
                        </div>
                    </div>
                </div>
            </Contact>
            <Footer/>
        </div>
    )
}