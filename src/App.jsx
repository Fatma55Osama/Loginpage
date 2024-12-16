import React from 'react' 
import logo from './photo/logo-lg-light.png'
import qr from './photo/qr-code.jpg'
import backgroun from './photo/login-bg-3.jpg'
import facebook from './photo/facebook.png'
import twiter from './photo/twitter.png'
import google from './photo/social.png'
import HomePage from './pages/Home'
import Registerpage from './pages/Regist'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Loginpage from './pages/Login'




export default function App() {
  return (
    
  

       <BrowserRouter>
          <Routes>
            <Route path='/'>
              <Route index element={<HomePage/>}/>
              <Route path='login' element={<Loginpage/>}/>
              <Route path='register' element={<Registerpage/>}/>
              <Route path='*' element={<h1>Error 404</h1>}></Route>
            </Route>
          </Routes>
       </BrowserRouter>

  )
}


