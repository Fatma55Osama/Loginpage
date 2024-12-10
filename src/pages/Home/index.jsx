import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function HomePage() {
    const navigat =useNavigate()
    useEffect(()=>{
        let token = localStorage.getItem("token")
        if(token){
           axios.get("https://support.israaosman.com/php/index.php/api/courses",
            {
                headers:
                {
                    Authorization:`Bearer ${token}`
                }
            }).then((res)=>{
                console.log(res)
            }).catch((err)=>{
                localStorage.clear()
                navigat("login")
            })
        }else{
          navigat("login")
        }
    },[])
  return (
    <div>HomePage</div>
  )
}
