import {Route,Routes} from 'react-router-dom'
import { HomePage } from '../HomePage'
import { OppoSignUp } from '../OppoSignUp'
import { OppoSignIn } from '../OppoSingIn'
import { OppoStore } from '../OppoStore'
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
        </Routes>
        </>
    )
}