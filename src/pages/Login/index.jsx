import React, { useRef } from 'react'
import logo from '../../photo/logo-lg-light.png'
import qr from '../../photo/qr-code.jpg'
import backgroun from '../../photo/login-bg-3.jpg'
import facebook from '../../photo/facebook.png'
import twiter from '../../photo/twitter.png'
import google from '../../photo/social.png'
import './index.scss'
import Swal from 'sweetalert2'
import axios from 'axios'
import { use } from 'react'
import { useNavigate ,Link } from 'react-router-dom'



export default function Loginpage() {

    const userphoneinput = useRef()
    const usercodeinput = useRef()
    const keepMeSignedInRef= useRef()
    const navigat =useNavigate()

    const handelSubmite = (event) => {
        event.preventDefault()
        let userphone = userphoneinput.current.value;
        let usercode = usercodeinput.current.value;
        const phoneRegex = /^\+\d+$/
        const codeRegex = /^.+$/
        let userphonecheck = phoneRegex.test(userphone)
        let usercodecheck = codeRegex.test(usercode)

        if (usercodecheck && userphonecheck) {
            axios.post("https://support.israaosman.com/php/index.php/api/auth/login",
                {
                    "user_phone":userphone,
                    "user_code": usercode
                }
            ).then((res)=>{
                console.log(res.data.err)
                if(res.data.err){
                    Swal.fire({
                        icon: "error",
                        text: "Wrong username or password"
                    })
                }else{

                    if(keepMeSignedInRef){
                        localStorage.setItem("token",res.data.data[0].user_token)
                    }else{
                        sessionStorage.setItem("token",res.data.data[0].user_token)
                    }
                    
                    navigat("/")
                }

            }).catch((err)=>{
                Swal.fire({
                    icon: "error",
                    text: "Connection problem"
                })
            })

        } else {
            Swal.fire({
                icon: "Error",
                text: "Wrong username or password"
            })
        }
    }


    return (

        <div className='backimg col-12 h-100 '>
            <div className='filters col-12 d-flex  justify-content-center '>
                <div className='parentdiv col-10  d-flex '>
                    <div className='Qr col-12 col-md-6   d-flex justify-content-center align-items-center'>
                        <div className=' div1  col-10   d-flex flex-column align-items-center justify-content-center '>
                            <img className='mb-4' src={logo} width="116px" height="46px" alt="Logo" />
                            <h1 className='text-white mb-5 '>We are glad to see you again!</h1>
                            <img src={qr} width="180px" height="180px" alt="" />
                            <p className='text-white mt-4 mb-0'>Log In with QR Code</p>
                            <p className='text-white col-md-12 col-lg-8 text-center text-5 mx-lg-5'>Scan this with your camera or our mobile app to login instantly.</p>
                        </div>
                    </div>
                    <div className='sign1  col-12 col-md-7 col-lg-6   d-flex align-content-center justify-content-center align-items-center'>
                        <div className='div2  col-12 px-3 py-4 bg-white d-flex justify-content-center align-items-center align-content-center'>
                            <div className='div3  col-12 col-md-11  '>
                                <div className='div4 mt-4 d-flex flex-column  align-items-center align-content-around'>
                                    <h1 className='mb-3'>Sign In</h1>
                                    <p>New to Oxyy? <Link to="/register" >Create an Acount</Link></p>
                                </div>
                                <form onSubmit={handelSubmite} className='mt-2 d-flex flex-column justify-content-center gap-3 '>

                                    <div className='user d-flex flex-column ' >
                                        <label htmlFor="">Userphone</label>
                                        <input ref={userphoneinput} type="text" placeholder='Enter Your Phone ' />
                                    </div>

                                    <div className='pass d-flex flex-column '>
                                        <label htmlFor="">Usercode</label>
                                        <input ref={usercodeinput} type="text" placeholder='Enter your Code' />
                                    </div>

                                    <div className='ckeck d-flex flex-row '>
                                        <input  ref={keepMeSignedInRef} className=' form-check-input' type="checkbox" />
                                        <span>Keep me signed in</span>
                                    </div>

                                    <button className='btn1 bg-dark text-white '>Sign In</button>
                                </form>

                                <div className='d-flex flex-row mt-4'>
                                    <hr className='flex-grow-1' />
                                    <span className='mx-2' >Or sign in with </span>
                                    <hr className='flex-grow-1' />
                                </div>

                                <div className='btnall  mt-4 d-flex flex-row justify-content-between'>
                                    <button className='facebook py-lg-2 px-lg-4 d-flex align-items-center'><img className='me-1' src={facebook} width="20px" height="20px" alt="" />Facebook</button>
                                    <button className='google py-lg-2 px-lg-5 d-flex align-items-center'><img className='me-2' src={google} width="14px" height="15px" alt="" />Google</button>
                                    <button className='twiter py-lg-2 px-lg-5 d-flex align-items-center'><img className='me-2' src={twiter} width="14px" height="13px" alt="" />twitter</button>
                                </div>

                                <div>
                                    <p className='text-center mt-md-4 '>Need to find <a href="">your username</a>or <a href="">your password</a>?</p>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}


