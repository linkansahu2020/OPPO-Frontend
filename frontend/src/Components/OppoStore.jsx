import style from 'styled-components'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Products } from './Products/Products'
import { Membership } from './Membership/Membership'
import { OfferCard } from './OfferCard/OfferCard'
import { Elements } from './Elements/Elements'
import { Slider } from './Slider/Slider'
import { Footer } from './Footer/Footer'
import Navbar from './Navbar/Navbar'

export const OppoStore = ()=>{
    document.getElementsByTagName('title')[0].innerText = 'OPPO Store';
    const [smartphones,setSmartPhones] = useState([])
    const [audios,setAudios] = useState([])
    const [bundles,setBundles] = useState([])
    const [accessories,setAccessories] = useState([])
    const [watch,setWatch] = useState([])
    useEffect(()=>{
        getData()
    },[]);
    const getData = ()=>{
        axios.get(`https://oppo-backend.herokuapp.com/products/Smartphones`).then(res=>setSmartPhones(res.data))
        axios.get(`https://oppo-backend.herokuapp.com/products/Audio`).then(res=>setAudios(res.data))
        axios.get(`https://oppo-backend.herokuapp.com/products/Bundles`).then(res=>setBundles(res.data))
        axios.get(`https://oppo-backend.herokuapp.com/products/Accessories`).then(res=>setAccessories(res.data))
        axios.get(`https://oppo-backend.herokuapp.com/products/Watch`).then(res=>setWatch(res.data))
    }
    const Main = style.div`
    height: 100%;
    width: 68%;
    margin: auto;
    margin-bottom: 1.5%;
    `
    return(
        <div style={{background: "#fafafa",marginTop: '60px'}}>
            <Navbar/>
            <Slider/>
            <Main>
                <Elements/>
                <div style={{display:'grid', rowGap: "130px"}}>
                    <OfferCard/>
                    <Membership/>
                    <Products name={"phone"} title={"Hot-selling Smartphones"} products={smartphones}/>
                    <Products name={"audio"} title={"OPPO Audio"} products={audios}/>
                    <Products name={"bundles"} title={"Bundles"} products={bundles}/>
                    <Products name={"accessories"} title={"Accessories"} products={accessories}/>
                    <Products name={"wearables"} title={"Wearables"} products={watch}/>
                </div>
            </Main>
            <Footer/>
        </div>
    )
}