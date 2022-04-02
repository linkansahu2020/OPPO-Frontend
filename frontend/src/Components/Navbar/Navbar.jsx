import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import { FiSearch } from "react-icons/fi";
import { FaUserCircle,FaAngleRight } from "react-icons/fa";

// IoBagHandleOutline
import { IoBagHandleOutline,IoPersonCircleOutline, } from "react-icons/io5";
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../Redux/action';


const NavDiv = styled.div`
width: 100%;
top: 0;
height: 60px;
display: flex;
background-color: white;
justify-content: space-evenly;
// border-bottom: 1px solid #999999;
position: fixed;
z-index: 10;
`

const LogoDiv = styled.div`
width: 8%;
height: 45px;
margin-top: 0.5%;
cursor: pointer;
/* border: 1px solid black; */
`
const Cats = styled.div`
width: 60%;
height: 100%;
display: flex;
/* justify-content: space-evenly; */
gap: 4%;
/* border: 1px solid black; */
`

const CatsType = styled.div`
font-size: 18px;
font-weight: 600;
height: 100%;
width: auto;
:hover{
    border-bottom: 2px solid #0bd36c;

}
`
const DropDiv = styled.div`
/* width:100%;
margin-left: 0;
height: 300px;
border: 1px solid black;
div{
    width:50px;
    height: 50px;
    border: 1px solid black;
} */
`


const IconsDiv = styled.div`
width: 12%;
height: 100%;
/* border: 1px solid black; */
display: flex;
justify-content: space-evenly;
#Users:hover{
    .UserLogin{
        visibility: visible;
    }
}
`


const Icons = styled.div`
width:30%;
height:100%;
font-size: 20px;
/* border: 1px solid black;; */
:hover{
    border-bottom: 1px solid #0bd36c;
}
`
const IconsDrop = styled.div`
height: 150px;
width: 300px;
/* border: 1px solid black; */
margin-left: -250px;
/* display: flex; */
background-color: white;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
margin-top: 11px;
z-index: 1000;
visibility: hidden;
border-radius: 10px;
.beforeLogin{
    width:100%;
    height: 100%;
    /* border: 1px solid black; */
    z-index: 1000;
    display: block;
    display: flex;
    div{
        height: 20%;
        width: 20%;
        margin: auto;
        /* border: 1px solid black; */
        font-size: 13px;
        border: 1px solid #bbb4b4;
        border-radius: 20px;
        cursor: pointer;
        p{
            margin-top: 10%;
        }
    }
}
.afterLogin{
    width:100%;
    height: 100%;
    /* border: 1px solid black; */
    z-index: 1000;
    display: block;
    color: black;
}
`

const Navbar = () =>{
    const dispatch = useDispatch();
    const {user} = useSelector((store)=>store);
    useEffect(()=>{
        const userInfo = JSON.parse(localStorage.getItem('user'))
        dispatch(addUser(userInfo))
    },[])
  return (
    <NavDiv>
        <LogoDiv>
            <Link to={'/'}>
                <img src="https://www.knowyourmobile.com/wp-content/uploads/2020/09/oppo-logo.jpg" alt="" style={{width:"100%",height:"100%"}}/>
            </Link>
        </LogoDiv>
        <Cats>
        <CatsType style={{marginLeft:"1%"}}>
            <div>
            <p>Smartphones</p>
            </div>
            <DropDiv style={{display:"flex"}}>
                <div></div>
                <div></div>
            </DropDiv>
        </CatsType>
        <CatsType>
            <div>
        <p>IoT Products</p>
            </div>
            <DropDiv></DropDiv>
        </CatsType>
        <CatsType>
        <div>
        <Link to={'./store'} style={{textDecoration:'none',color:'black'}}>
            <p>Store</p>
        </Link>
        </div>
        </CatsType>
        <CatsType>
        <div>
        <p>About OPPO</p>
        </div>
        <DropDiv></DropDiv>
        </CatsType>
        <CatsType>
        <div>
        <p>ColorOS</p>
        </div>
        </CatsType>
        <CatsType>
        <div>
        <p>Support</p>
        </div>
        </CatsType>
        <CatsType>
        <div>
        <p>Store Locator</p>
        </div>
        </CatsType>

        </Cats>
        <IconsDiv>
            <Icons>
                <FiSearch style={{marginTop:"22px"}}/>
            </Icons>
            <Icons>
                <div>
            <IoBagHandleOutline style={{marginTop:"22px"}}/>
                </div>
            </Icons>
            <Icons id='Users'>
                <div>
                <IoPersonCircleOutline style={{marginTop:"22px"}}/>
                </div>
                <IconsDrop className='UserLogin'>
                    {user?
                        <div className='afterLogin'>
                            <div className='UprDiv'>
                                <div className='usrLogo'>
                                    <FaUserCircle/>
                                </div>
                                <div className='usDetails'>
                                    <div className='bx1'>
                                        <p>Hello, <span>{user.user.email.trim().split("@")[0]}</span><br /> Member</p>
                                    </div>
                                    <div className='bx2'>
                                    <p>User Center</p>
                                    <p style={{paddingLeft:"40px"}}>Order</p>
                                    </div>
                                </div>
                            </div>
                            <div className='LwrDiv'>
                                <div onClick={()=>{
                                    localStorage.setItem('user',null);
                                    dispatch(addUser(null))
                                }}>
                                    <p>SignOut</p>
                                </div>
                            </div>
                        </div> : <div className='beforeLogin'>
                                    {/* <p>Sign Up</p>
                                    <p>Login</p> */}
                                    <div><Link to={'/signup'} style={{textDecoration:'none',color:'black'}}><p>Sign up</p></Link></div>
                                    <div><Link to={'/signin'} style={{textDecoration:'none',color:'black'}}><p>Sign in</p></Link></div>
                                </div> }
                </IconsDrop>
            </Icons>
        </IconsDiv>
    </NavDiv>
  )
}

export default Navbar