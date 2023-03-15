import jwtDecode from "jwt-decode";
import axios from "axios";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../Navbar";
import { Link, useNavigate } from "react-router-dom";
const Clockinandout = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("tokken");
  const [clock, setClock] = useState("clock in");
  let [clockmsg, setClockmsg] = useState(false);
  let [color, setColor] = useState("#007bff");
 
  async function clockhandler() {
    if (clock === "clock in") {
      setClock("clock out");
      setColor("red");
    } else {
      setClock("clock in");
      setColor("#007bff");
    }

    const token = localStorage.getItem("tokken");
    const user = jwtDecode(token);
    const { email, id } = user.userdetails;
    console.log("tokkkennnnnnn", email);
    
    try {
      let result = await axios.post(
        " http://localhost:8080/api/attendance",
        { email: email },
        {
          headers: {
            authorization: `${token}`,
          },
        }
      );
      if (clockmsg === false) {
        toast.success("clock in successfull");
        setClockmsg(true);
      } else {
        toast.success("clock out successfull");
        setClockmsg(false);
      }
      console.log("clockkkkkkkk", result);
    } catch (error) {
      toast.success(error.response.data.error);
      console.log("zzzzz", error.response.data.error);
    }
  }

  function logout() {
    localStorage.removeItem("tokken");
  }
  useEffect(() => {
    if (!localStorage.getItem("tokken")) {
      navigate("/login");
    }
  }, []);



  const tokenuser = localStorage.getItem("tokken");
  const user = jwtDecode(tokenuser);
  const { email, id } = user.userdetails;

  return (
    <>
      <ToastContainer />

      <div className="nav">
        <nav className="navbar navbar-expand-lg navbar-light bg-light mx-auto">
          <a className="navbar-brand" href="#">
            ATTENDANCE System
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home <span className="sr-only"></span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/monthlyreport">
                  Monthly report <span className="sr-only"></span>
                </Link>
              </li>
              <li className="nav-item">
                <Link onClick={logout} className="nav-link" to="/login">
                  logout   <span className="sr-only"></span>
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">
                  {email}
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <br />
      <h1> ATTENDANCE System mark your attendance</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <button
          style={{
            width: "200px",
            height: "200px",
            outline: "none",
            borderRadius: "100px",
            cursor: "pointer",
            boxSizing: "border-box",
            backgroundColor: `${color}`,
            color: "white",
            fontSize: "1.5rem",
            fontWeight: "bold",
            border: "none",
          }}
          onClick={clockhandler}
        >
          {clock}
        </button>
      </div>
    </>
  );
};

export default Clockinandout;
