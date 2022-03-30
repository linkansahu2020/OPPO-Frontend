import {Route,Routes} from 'react-router-dom'
import { OppoStore } from '../OppoStore'
export const Routers = ()=>{
    return(
        <>
        <Routes>
            <Route path='/' element={<OppoStore/>}></Route>
        </Routes>
        </>
    )
}