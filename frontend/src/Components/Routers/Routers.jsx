import {Route,Routes} from 'react-router-dom'
import { CardDetails } from '../Card/Card'
import { Checkout } from '../Checkout/Checkout'
import { HomePage } from '../HomePage'
import { OppoSignUp } from '../OppoSignUp'
import { OppoSignIn } from '../OppoSingIn'
import { OppoStore } from '../OppoStore'
import { Payment } from '../Payment/Payment'
import { PaymentOpt } from '../Paymentoption/Paymentoption'
import { ProductDetalisPage } from '../ProductDetailsPage/ProductDetailsPage'
export const Routers = ()=>{
    return(
        <>
        <Routes>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/store' element={<OppoStore/>}></Route>
            <Route path='/signup' element={<OppoSignUp/>}></Route>
            <Route path='/signin' element={<OppoSignIn/>}></Route>
            <Route path='/:category/:id' element={<ProductDetalisPage/>}></Route>
            <Route path='/checkout/:id' element={<Checkout/>}></Route>
            <Route path='/payment/:item_id/:address_id' element={<Payment/>}></Route>
            <Route path='/paymentoption/:id' element={<PaymentOpt/>}></Route>
            <Route path='/carddetails/:id' element={<CardDetails/>}></Route>
        </Routes>
        </>
    )
}