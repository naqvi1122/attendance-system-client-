import "./style.css";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signup() {
  const [user, setuser] = useState({});

  const onvaluechange = (e) => {
    //console.log(e.target.name,e.target.value)
    setuser({ ...user, [e.target.name]: e.target.value });
    console.log("nameeebbbbbbbbbbbbbbee", user);
  };

  async function submitinfo(e) {
    e.preventDefault();
    console.log("my data", user);
    try {
      const result = await axios.post(" http://localhost:8080/signup", user, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      toast.success("signup successfully");
      // toast.success("signup successful");
    } catch (err) {
      toast.success(err.response.data.msg);
      console.log("ooo", err);
    }
  }

  return (
    <>
      <ToastContainer />
      <div>
        <title>SignUp Form</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        {/* Custom Theme files */}
        <link
          href="css/style.css"
          rel="stylesheet"
          type="text/css"
          media="all"
        />
        {/* //Custom Theme files */}
        {/* web font */}
        <link
          href="//fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,700,700i"
          rel="stylesheet"
        />
        {/* //web font */}
        {/* main */}
        <div className="main-w3layouts wrapper">
          <h1> SignUp Form</h1>
          <div className="main-agileinfo">
            <div className="agileits-top">
              <form>
                <input
                  className="text"
                  type="text"
                  name="name"
                  placeholder="Username"
                  required
                  onChange={(e) => onvaluechange(e)}
                />
                <input
                  className="text email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  onChange={(e) => onvaluechange(e)}
                />
                <input
                  className="text"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  onChange={(e) => onvaluechange(e)}
                />

                <div className="wthree-text">
                  <div className="clear"> </div>
                </div>
                <input
                  type="submit"
                  defaultValue="SIGNUP"
                  onClick={submitinfo}
                />
              </form>
              <p>
                Don't have an Account? <Link  to="/login">
                  login 
                </Link>
              </p>
            </div>
          </div>
          {/* copyright */}
          <div className="colorlibcopy-agile">
            <p>
              © 2018 Colorlib Signup Form. All rights reserved | Design by{" "}
              <a href="https://colorlib.com/" target="_blank">
                Colorlib
              </a>
            </p>
          </div>
          {/* //copyright */}
          <ul className="colorlib-bubbles">
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
          </ul>
        </div>
        {/* //main */}
      </div>
    </>
  );
}
export default Signup;
