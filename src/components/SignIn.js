import React from "react";
import { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import "./login/style.css";

const SignIn = () => {
  const history=useNavigate();
  const [inpval, setInpval] = useState({
    name: "",
    username: "",
    email: "",
    dob: "",
    password: "",
  });
  // console.log(inpval);
  const [data,setData]=useState([])

  const getdata = (e) => {
    const { value, name } = e.target;

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const addData = (e) => {
    e.preventDefault();
    const { name,
      username,
      email,
      dob,
      password } = inpval;
    
    if (name === '') {
      alert('name required')
    }
    else if (username === '') {
      alert('name required')
    }
    else if (email === '') {
      alert('Email is required')
    }
    else if (!email.includes('@')) (
      alert('Please Enter Valid Email address')
    )
    else if (dob === '') {
      alert('Date Of Birth Is Required')
    }
    else if (password === '') {
      alert('password Is Required')
    }
    else if (password.length<8) {
      alert('Please enter More Strong Password')
    }
    else {
      localStorage.setItem('user', JSON.stringify([...data, inpval]))
      console.log(inpval);
      history('/login')
    }


    // console.log(inpval);

  };

  return (
    <div className="registerpage">
      <div className="regcontainer">
        <h2>Register</h2>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" autoComplete="off" onChange={getdata} />

        <label htmlFor="username">User Name</label>
        <input
          type="email"
          name="username"
          autoComplete="off"
          onChange={getdata}
        />

        <label htmlFor="mail">E-mail</label>
        <input type="email" name="email" autoComplete="off" onChange={getdata} />

        <label htmlFor="dob">Date of Birth</label>
        <input type="date" name="dob" autoComplete="off" onChange={getdata} />

        <label htmlFor="password">Password</label>
        <input
          type="Password"
          name="password"
          autoComplete="off"
          onChange={getdata}
        />

        <button className="btn" type="submit" onClick={addData}>
          Register
        </button>

        <span>
          Already Registered !
          <Link to="/login" className="link">
            -Login
          </Link>
          <hr />
        </span>
      </div>
    </div>
  );
};

export default SignIn;
