
import React, { useEffect, useState } from 'react'
 import { Toaster, toast } from 'react-hot-toast';
import './form.css'
import {  NavLink, useNavigate } from 'react-router-dom'
const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  //button disabled logic till user fill all details
  useEffect(() => {
        if (name && email && password && !emailError && !passwordError) {
          setIsButtonDisabled(false);
        }else{
          setIsButtonDisabled(true)
        }
         
      }, [name, email, password,emailError,passwordError]);
    
      
      //email validation 
      const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          setEmailError('Invalid Email Format');
        } else {
          setEmailError('');
        }
      };
  
      //password validation
    const validatePassword=(password)=>{
      const minLength = 8;
      const hasSpecialChar= /[!@#$%^&*(),.?":{}|<>]/;

      if(password.length <minLength)
      {
        setPasswordError('Password must be at least 8 characters long')
      }else if(!hasSpecialChar.test(password))
      {
        setPasswordError('Password must contain at least one special character')
      }else
      {
        setPasswordError('');
      }
    }

  const handleSubmit = (event) => {
        event.preventDefault();
        validateEmail(email)
    
        var userob = { name, email, password};
        localStorage.setItem('user', JSON.stringify(userob));
        toast.success('Registration Successful!');
        setName('')
        setEmail('')
        setPassword('')
      
         
      };

  return (
    <>
    <div className="heading">
      <h2 className='text-info text-center fw-bold mt-4'>Registration Form</h2>
    <div className="form-container " style={{marginTop:'30px'}}>
    <form onSubmit={handleSubmit}>
    <div class="form-group">
    <label for="name">Name</label>
    <input type="text" class="form-control" id="name" value={name} onChange={(e)=>setName(e.target.value)}  placeholder="Enter name "/>
  </div>
   <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" value={email} 
    onChange={(e) => {
    setEmail(e.target.value);
    validateEmail(e.target.value);
     }} 
     placeholder="Enter email"
     />
    {emailError && <small className="form-text text-danger">{emailError}</small>}
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" value={password} onChange={(e)=> {
      setPassword(e.target.value);
     validatePassword(e.target.value)
    } }id="exampleInputPassword1" placeholder="Password"/>
     {passwordError && <small className="form-text text-danger">{passwordError}</small>}
  </div>
  <button type="submit" class="btn btn-primary w-100 mt-3 " disabled={isButtonDisabled}>Register</button>
    <NavLink to="/login"> Already have an account? Log in </NavLink>
    <Toaster />
 </form>
 </div>
 </div>
    </>
  )
}

export default SignUp