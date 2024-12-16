import React, { useRef } from 'react'
import './index.scss'
import axios from 'axios'

export default function Registerpage() {
  const usernsme =useRef()
  const userphon =useRef()
  const usercod =useRef()
  const uselect =useRef()
  let token =""     //token belongs to the person registered on the system.Only the peron registered in the system is the one who can add people
  const handelform=(event)=>{
    event.preventDefault()
    let name =usernsme.current.value;
    let phone =userphon.current.value;
    let code =usercod.current.value;
    let select =uselect.current.value;
    axios.post("https://support.israaosman.com/php/index.php/api/use",{
      "user_name":name,
      "user_phone":phone,
      "user_code":code,
      "role_id":select

    },{
      headers:{
        Authorization:`Bearer ${token}`
      }
    }).then((res)=>{
      Swal.fire({

      })
    })
  }
  return (
    <div className='backimg'>
      <div className='filters d-flex justify-content-center align-content-center align-items-center'>

        <div className='signup  col-5 bg-white'>
          <div className='container h-100 col-10  d-flex flex-column gap-3'>
            <div className='text-center mt-5'>
              <h2>Sign Up</h2>
            </div>
            <div>
              <form onSubmit={handelform} className='mt-2 d-flex flex-column justify-content-center gap-4 '>

              <div className='name d-flex flex-column col-11 gap-2'>
                  <label htmlFor="">Name</label>
                  <input ref={usernsme} type="text" placeholder='Enter Your Name' />
                 </div>

                <div className='user d-flex flex-column col-11 gap-2' >
                  <label htmlFor="">Userphone</label>
                  <input ref={userphon} type="text" placeholder='Enter Your Phone ' />
                </div>

                <div className='pass d-flex flex-column col-11 gap-2'>
                  <label htmlFor="">Usercode</label>
                  <input ref={usercod} type="text" placeholder='Enter your Code' />
                </div>

               
                 <select ref={uselect} className='col-2' name="" id="">
                  <option value="1">Admin</option>
                  <option value="2">User</option>
                 </select>
                        
                <button className=' text-center rounded-5 py-2 '>Sign Up</button>

              </form>
            </div>

          </div>

        </div>

      </div>
    </div>
  )
}
