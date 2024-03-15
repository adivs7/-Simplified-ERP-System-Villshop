import React from "react"
import { Link } from "react-router-dom"
const Layout=()=>{
    return(
 <>
    <div >
    <nav className=" navbar navbar-expand-md  navbar-light bg-light ">
      <div className="container-fluid ">
        <Link className="navbar-brand" to="/">
          Villshop
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            
            <li className="nav-item">
            <Link className="navbar-brand" to="/product">
          Product
        </Link>            </li>
            <li className="nav-item">
            <Link className="navbar-brand" to="/order">
          Order
        </Link> 
            </li>
            <li className="nav-item">
            <Link className="navbar-brand" to="/calender">
          Calender
        </Link>            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>        </>
    )
}
export default Layout