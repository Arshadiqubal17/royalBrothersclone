// import { ctx } from "./myContext";
// import { ctx } from "../Context/ApiContext";
import React, { useState, useEffect, useContext } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";

function Login(props) {
  // const { setIsLoggedIn } = useContext(ctx);
  const [loginEmail, setEmail] = useState("");
  const [loginPassword, setPassword] = useState("");

  const [valurEmail, setValueEmail] = useState("");
  const [valuePassword, setValuePassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    const storedPassword = JSON.parse(localStorage.getItem("password"));
    if (storedEmail) {
      setEmail(storedEmail);
    }
    if (storedPassword) {
      setPassword(storedPassword);
    }
  }, []);
  console.log(loginEmail, loginPassword);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (loginEmail == valurEmail && loginPassword == valuePassword) {
      // navigateToHome();
      alert("Login successful!");
      navigate("/Home");
      // setIsLoggedIn(true);

      // ...
    } else {
      alert("Login failed. Please check your email and password.");
    }
  };

  return (
    <div className="container">
      <img
        className="image-logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4v-lbnpyvlbyFviW3Sb_-DFRQDZWNkpHtwA&usqp=CAU"
      ></img>
      <form onSubmit={handleSubmit}>
        <div className="container-2">
          <input
            type="email"
            placeholder="Email"
            value={valurEmail}
            onChange={(e) => setValueEmail(e.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            value={valuePassword}
            onChange={(e) => setValuePassword(e.target.value)}
          />
          <br />
        </div>
        <div className="container-4">
          <input type="checkbox" />
          <label>
            Keep me sign in &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Forgotten
            Your Password?
          </label>
        </div>

        <p className="container-p">
          By logging in, you agree to Facebook's Privacy Policy and <br />
          Terms of Use.
        </p>
        <button className="container-btn" type="submit">
          Sign In
        </button>
      </form>

      <Link to="/Signup">
        <p className="container-p1">Not a Member? Join Us. </p>
      </Link>
    </div>
  );
}

export default Login;
