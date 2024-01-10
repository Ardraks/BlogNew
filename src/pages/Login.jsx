import { useState } from "react"
import "./Login.css"
import { useNavigate } from "react-router-dom"

const Login = () => {
   
  const [email,setEmail] =useState('')
  const [password,setPassword] =useState('')
  const [error,setError]=useState(false)
  const navigate=useNavigate();

  

  const reademail = (event) =>{
    event.preventDefault();
    setEmail(event.target.value);
    console.log(email);

}
const readpassword = (event) =>{
    event.preventDefault();
    setPassword(event.target.value);
    console.log(password);
}
const savedata =(event)=>{
  event.preventDefault();
  if(email.trim()==='' || password.trim() === '')
  {
      setError(true)
      return
  }
  else
  {
      setError(false)
      navigate('/Homepage')
      
  }

}
const registerdata=(event)=>{
    event.preventDefault();
    navigate('/Register')
}

  return (
    <div className="login">
        <span className="loginTitle">Login</span>
        <form className="loginForm"> 
          <label>Email</label>
          <input type="text" className="loginInput" placeholder="Enter your email.." onChange={reademail}/>
          <label>Password</label>
          <input type="password" className="loginInput" placeholder="Enter your password.." onChange={readpassword}/>
          <div className="forgotPassword">Forgot Password?<span onClick={registerdata}>click here!</span></div>
          <button className="loginButton" onClick={savedata}>Login</button>
          {error && 'All fields must be entered'}

        </form> 
        <button className="loginRegisterButton" onClick={registerdata}>Register</button>
     </div>
  )
}

export default Login