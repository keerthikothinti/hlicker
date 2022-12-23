import "./adminlogin.css";
import {useNavigate, Link } from "react-router-dom";
import React,{useEffect,useState} from 'react'
import axios from "axios";
import Landingpage from "../../Pages/Landingpage/Landingpage";
export default function AdminLogin(){
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({email: "", password: ""});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    checkuser(formValues)
    //setFormErrors(validate(formValues));
    // setIsSubmit(true);
    // console.log(formValues);
    
  };
  const checkuser=async(e)=>{
    if(e.email==="picturesque@gmail.com"&&e.password==="picturesque"){
      navigate("/Admin")
    }
  }
  useEffect(()=>{
        axios.get("http://localhost:5000/users")
        .then((res)=>{
            console.log(formValues)
            
            checkuser(formValues,res.data)

       })
},[])
    return(
        <div>
          <Landingpage/>
        {/* <h1  className="text">Slide to login <i className="fa fa-arrow-right" aria-hidden="true"></i></h1> */}
        <div className="AdminLogin">
        <span className="AdminloginTitle">Admin Login</span>
        <form className="adminloginForm" onSubmit={handleSubmit}>
        <label>Email</label>
        <input className="adminloginInput" type="text" value = {formValues.email} onChange={handleChange} name="email"placeholder="Enter your email..." />
        <label>Password</label>
        <input className="adminloginInput" type="password"  value = {formValues.password} onChange={handleChange} name="password" placeholder="Enter your password..." />
        <button className="adminloginButton">Login</button>
      </form>

        </div>
        </div>
    )
}