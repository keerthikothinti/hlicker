import "./login.css";
import { useNavigate, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
export default function Login() {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const [isSubmit, setIsSubmit] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    checkuser(formValues);
    console.log(formValues);
  };
  const checkuser = async (e) => {
    const allusers = await axios.get("http://localhost:5000/users");
    for (let i of allusers.data) {
      if (i.email === e.email && i.password === e.password) {
        console.log(i);
        localStorage.setItem("current-user", JSON.stringify(i));
        navigate("/Home");
        break;
      }
    }
  };
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    }
    return errors;
  };
  useEffect(() => {
    axios.get("http://localhost:5000/users").then((res) => {
      console.log(formValues);

      checkuser(formValues, res.data);
    });
  }, []);

  return (
    <div className="loginpage">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        navigate("/Home")
      ) : (
        <div>
          <Link className="link" to="/">
            HOME
          </Link>
          <div className="login">
            <span className="loginTitle">LOGIN</span>
            <form className="loginForm" onSubmit={handleSubmit}>
              <label>Email</label>
              <input
                className="loginInput"
                type="text"
                placeholder="Enter your email..."
                name="email"
                value={formValues.email}
                onChange={handleChange}
              />
              <p className="error">{formErrors.email}</p>
              <label>Password</label>
              <input
                className="loginInput"
                type="password"
                placeholder="Enter your password..."
                name="password"
                value={formValues.password}
                onChange={handleChange}
              />
              <p className="error">{formErrors.password}</p>

              <button className="loginButton">Login</button>
            </form>
            <Link to="/Register">
              <button className="loginRegisterButton">Register</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
