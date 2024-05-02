import React, { useState } from 'react'
import './LoginPopUp.css'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import Alert from '@mui/material/Alert';
import axios from 'axios'
const LoginPopUp = ({setShowLogin}) => {
    const [currState,setCurrState]=useState("Sign Up")

    const [data,setData]=useState({
        name:"",
        email:"",
        password:""
    })
const url="http://localhost:4000"
const [token,setToken]=useState("");
    const onChangeHandler=(event)=>{
const name=event.target.name;
const value=event.target.value;
setData(data=>({...data,[name]:value}))

    }

const onLogin = async(event)=>{
    
event.preventDefault();


let newUrl=url;
if(currState==="Login"){
    newUrl+="/api/user/login";
    <Alert severity="success">Succesfully Logged In.</Alert>
}
else{
    newUrl+="/api/user/register"
}
 const response=await axios.post(newUrl,data);
if(response.data.success){
setToken(response.data.token)
localStorage.setItem("token",response.data.token);
setShowLogin(false)

}
else{
    alert(response.data.message)
}

    }
  
  return (
    <div className='login-popup'>
<form onSubmit={onLogin}  className='login-popup-container'name="login-form">
    <div className="login-popup-title">
        <h2>{currState}</h2>
      <CancelOutlinedIcon onClick={()=>setShowLogin(false)} className="cross"/>

    </div>
    <div className="login-popup-inputs">
        {currState==="Login"?<></>:<input type="text" name='name' onChange={onChangeHandler} value={data.name}  placeholder="Enter Your Name" required />
}
        <input type="email" name='email' onChange={onChangeHandler} value={data.email} placeholder="Enter Email" required />
        <input type="password"name='password' onChange={onChangeHandler} value={data.password} placeholder="Password" required />
    </div>
<button type='Submit' >{currState==="Sign Up"?"Create account":"login"}</button>
<div className="login-popup-condition">
    <input type="checkbox" required />
    <p>Agree privacy and policy to continue sign up.</p>

</div>
{currState==="Login"?
<p>Create new account? <span onClick={()=>setCurrState("Sign Up")}>Click Here</span></p>
:
<p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login Here</span></p>

}
</form>
    </div>
  )
}

export default LoginPopUp
