import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar(){
  const navigate=useNavigate();
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Full-Stack Application
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* <Link className="btn btn-outline-light" to="/adduser">Add-User</Link> 
           //this is another way to do this */ } 
          <button className="btn btn-outline-light" onClick={()=>(navigate("/adduser"))}>Add-User</button>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
