import style from 'styled-components'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Products } from './Products/Products'
import { Membership } from './Membership/Membership'
import { OfferCard } from './OfferCard/OfferCard'
import { Elements } from './Elements/Elements'
import { Slider } from './Slider/Slider'

export const OppoStore = ()=>{
    const [smartphones,setSmartPhones] = useState([])
    const [audios,setAudios] = useState([])
    const [bundles,setBundles] = useState([])
    useEffect(()=>{
        getData()
    },[]);
    const getData = ()=>{
        axios.get(`https://oppo-backend.herokuapp.com/products/Smartphones`).then(res=>setSmartPhones(res.data))
        axios.get(`https://oppo-backend.herokuapp.com/products/Audio`).then(res=>setAudios(res.data))
        axios.get(`https://oppo-backend.herokuapp.com/products/Bundles`).then(res=>setBundles(res.data))
    }
    const Main = style.div`
    height: 100%;
    width: 68%;
    margin: auto;
    `
    return(
        <div style={{background: "#fafafa"}}>
            <Slider/>
            <Main>
                <Elements/>
                <div style={{display:'grid', rowGap: "130px"}}>
                    <OfferCard/>
                    <Membership/>
                    <Products title={"Hot-selling Smartphones"} products={smartphones}/>
                    <Products title={"OPPO Audio"} products={audios}/>
                    <Products title={"Bundles"} products={bundles}/>
                </div>
            </Main>
        </div>
    )
}