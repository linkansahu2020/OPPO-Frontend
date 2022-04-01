import styled from "styled-components"
import './Navbar.css'
export const SmartPhones = ()=>{
    const Main = styled.div`
    width: 100%;
    border: 1px solid red;
    `
    return(
        <Main>
            <div id="all_elements">
                <div id="l_elements_name">
                    <div className="single_element_name">Find X Series</div>
                    <div className="single_element_name">Reno Series</div>
                    <div className="single_element_name">F Series</div>
                    <div className="single_element_name">A Series</div>
                    <div className="single_element_name">K Series</div>
                </div>
                <div>phones</div>
                <div>pic</div>
            </div>
        </Main>
    )
}