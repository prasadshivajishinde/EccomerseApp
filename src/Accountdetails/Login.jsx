
import React, { useState } from 'react'
 import { Toaster, toast } from 'react-hot-toast';
import './form.css'
import {  NavLink, useNavigate } from 'react-router-dom'
import {useAuth} from '../Context/AuthProvider'
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigate()

  //context use here
  const {login} = useAuth()
  
   const handleSubmit = (event) => {
        event.preventDefault();
        const storeduser = JSON.parse(localStorage.getItem('user'))
        if(storeduser)
        {
          if(email === storeduser.email && password ===storeduser.password)
          {
            
            login(storeduser)
            toast.success('Login successfull')
             nav('/')
          }else{
            toast.error('Invalid credential')
          }
        }else{
          toast.error('user not found')
        }
        setEmail('')
        setPassword('')
        // nav('/home')
      
         
      };

  return (
    <>
    <div className="heading">
      <h2 className='text-info text-center fw-bold mt-4'>Login Form</h2>
    <div className="form-container " style={{marginTop:'30px'}}>
    <form onSubmit={handleSubmit}>
   <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" value={email} 
    onChange={(e) => setEmail(e.target.value)} 
     placeholder="Enter email"
     />
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" value={password} onChange={(e)=> setPassword(e.target.value)}id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <button type="submit" class="btn btn-primary w-100 mt-3 ">Login</button>
    <NavLink to="/account "> Don't have an account? Register </NavLink>
    <Toaster />
 </form>
 </div>
 </div>
    </>
  )
}

export default Login