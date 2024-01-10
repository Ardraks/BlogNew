import { useState } from "react"
import "./Register.css"
import { useNavigate } from "react-router-dom"

const Register = () => {

  const [username,setUsername] =useState('')
  const [email,setEmail] =useState('')
  const [password,setPassword] =useState('')
  const [confirmpassword,setConfirmpassword] =useState('')
  const [error,setError]=useState(false)
  const navigate=useNavigate();


  const readusername = (event) =>{
    event.preventDefault();
    setUsername(event.target.value);
    console.log(username);
  }
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
 const readconfirmpassword = (event) =>{
  event.preventDefault();
  setConfirmpassword(event.target.value);
  console.log(confirmpassword);
}
 const savedata =(event)=>{
  event.preventDefault();
  if(username.trim()==='' ||email.trim()==='' || password.trim() === ''||confirmpassword.trim()==='')
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

  return (
    <div className='register'>
        <span className="registerTitle">Register</span>
        <form className="registerForm"> 
        <label>Username</label>
          <input type="text" className="registerInput" placeholder="Enter your username.." onChange={readusername}/>
          <label>Email</label>
          <input type="text" className="registerInput" placeholder="Enter your email.." onChange={reademail}/>
          <label>Password</label>
          <input type="password" className="registerInput" placeholder="Enter your password.." onChange={readpassword}/>
          <label>Confirm Password</label>
          <input type="password" className="registerInput" placeholder="Enter confirm password.." onChange={readconfirmpassword}/>
    
          <button className="registerButton" onClick={savedata}>Register</button>
          {error && 'All fields must be entered'}

        <button className="registerLoginButton">Login</button>
</form>
    </div>
  )
}

export default Register