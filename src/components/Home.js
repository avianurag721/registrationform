import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  // const [name,setName] =useState('')

  const getuser = localStorage.getItem("user_login");
  const user = JSON.parse(getuser)[0];
  console.log(user);
  const name = user.name;
  const DOB = user.dob;
  const username = user.username;

  return (
    <>
      <div className="details">
        <div className="main">
          
          <h1>Hello {name} You are successfully logged in</h1>
          <h2>Your Details are:</h2>
          <p>Name:{name} </p>
          <p>username : {username} </p>
          <p>Date of Birth : {DOB} </p>
          <Link to='/'>
            <p className="homeb">Back to login</p>
            </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
