import { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import axios from "axios";
import { Link } from "react-router-dom";
const Monthlyreport = () => {
  const [user, setuser] = useState({});
  const [result, setresult] = useState([]);
  let token = localStorage.getItem("tokken");

  const onvaluechange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  async function getmonthdataHandler(e) {
    e.preventDefault();

    const tokenuser = localStorage.getItem("tokken");
  const userr = jwtDecode(tokenuser);
  const { email, id } = userr.userdetails;
const {month}=user
let newinfo = {email:email,month:month}
console.log('sss',newinfo)

    try {
      const response = await axios.post(
        "http://localhost:8080/api/getMonthReport",
        newinfo,
        {
          headers: {
            authorization: `${token}`,
          },
        }
      );
      console.log("zz", response.data.attendance);

      setresult(response.data.attendance); // Store the data returned from the API in state
      console.log("qqqqqqq", result);
    } catch (error) {
      setresult([]);
      console.log(error);
    }
  }
  function logout() {
    localStorage.removeItem("tokken");
  }

  return (
    <>
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
                  logout <span className="sr-only"></span>
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">
                  Disabled
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <h1>Monthly report</h1>

      <div className="main-w3layouts wrapper">
        <div className="main-agileinfo">
          <div className="agileits-top">
            <form>
              
              <input
                className="text"
                type="number"
                name="month"
                placeholder="month"
                required
                onChange={(e) => onvaluechange(e)}
              />

              <div className="wthree-text">
                <div className="clear"> </div>
              </div>

              <input
                type="submit"
                defaultValue="submit"
                onClick={getmonthdataHandler}
              />
            </form>
          </div>
        </div>
      </div>
      <h1>your report</h1>
      {/* Display the result of the API */}

      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">clock in</th>
            <th scope="col">clock out</th>
            <th scope="col">date</th>
            <th scope="col">total time in hours</th>
            <th scope="col">total time in min</th>
          </tr>
        </thead>
        <tbody>
          {result.map((data, index) => (
            <tr key={data._id}>
              <td>{data.clockIn}</td>
              <td>{data.clockOut}</td>
              <td>{data.date}</td>
              <td>{data.totalTimeinhours}</td>
              <td>{data.totalTimeinmin}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Monthlyreport;
