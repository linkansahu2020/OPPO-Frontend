import {Route,Routes} from 'react-router-dom'
import { OppoSignIn } from '../OppoSignIn'
import { OppoStore } from '../OppoStore'
export const Routers = ()=>{
    return(
        <>
        <Routes>
            <Route path='/store' element={<OppoStore/>}></Route>
            <Route path='/signup' element={<OppoSignIn/>}></Route>
        </Routes>
        </>
    )
}