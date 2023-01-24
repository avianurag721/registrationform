import React, { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import "./style.css";

const Login = () => {
  const history = useNavigate();

  
  const [inpval, setInpval] = useState({
    email: "",
    password: "",
  });


  const getdata = (e) => {
    const { value, name } = e.target;

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
    // console.log(inpval.email);
  }

  const submitdata = () => {
    
    const getuserArr = localStorage.getItem('user');
    console.log(getuserArr);

    const { email, password } = inpval
    
    if (email === "") {
      alert("Email is required");
    }
    else if (!email.includes("@")) {
      alert("Invalid Email");
    }
    else if (password=== "") {
      alert("Password Is Required");
    }
    else if (!password) {
      alert("Password Is Required");
    }
    else {
      if (getuserArr && getuserArr.length) {
        const userdata = JSON.parse(getuserArr);
        const userlogin = userdata.filter((el, k) => {
          return el.email===email&&el.password===password
        })
        // console.log(userlogin);
        if (userlogin.length === 0) {
          alert('Invalid Details')
        }
        else {
          alert('user logged in successfully')
          localStorage.setItem('user_login', JSON.stringify(userlogin));
          history('/home')
        }
      }
    }
  };

  return (
    <>
      <div className="loginpage">
        <div className="container">
          <h2>Login</h2>
          <label htmlFor="mail">E-mail</label>
          <input type="email" name="email" onChange={getdata}/>

          <label htmlFor="password">Password</label>
          <input type="Password" name="password" onChange={getdata} />

          <button className="btn" onClick={submitdata}>Login</button>

          <span>
            You are not registered!
            <Link to="/" className="link">
              -Register
            </Link>
            <hr />
          </span>
        </div>
      </div>
    </>
  );
};

export default Login;
