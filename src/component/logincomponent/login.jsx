import "./style.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const navigate = useNavigate();
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
      const result = await axios.post(" http://localhost:8080/login", user, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      let { token } = result.data;
      localStorage.setItem("tokken", token);
      console.log("the reslt of data is ", token);
      navigate("/");
    } catch (err) {
      toast.success(err.response.data.msg);
      console.log(err);
    }
  }

  return (
    <>
      <ToastContainer />
      <div>
        <title>Login Form</title>

        <div className="main-w3layouts wrapper">
          <h1> Login Form</h1>
          <div className="main-agileinfo">
            <div className="agileits-top">
              <form>
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
                Don't have an Account? <a href="/signup"> signup</a>
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
export default Login;
