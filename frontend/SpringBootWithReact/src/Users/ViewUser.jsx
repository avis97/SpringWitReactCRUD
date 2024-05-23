import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ViewUser() {
  const [user, setUser] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const userDetails = await axios.get(`http://localhost:8080/get/${id}`);
    setUser(userDetails.data);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">User Details</h2>
          <div className="card">
            <div className="card-header">
              <h5 className="text-center">Details Of User Id : {user.id}</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>First Name : </b>
                  {user.firstName}
                </li>
                <li className="list-group-item">
                  <b>Last Name : </b>
                  {user.lastName}
                </li>
                <li className="list-group-item">
                  <b>Phone Number : </b>
                  {user.number}
                </li>
                <li className="list-group-item">
                  <b>E-mail : </b>
                  {user.email}
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center">
            <button
              onClick={() => navigate("/")}
              className="btn btn-primary mx-2 mt-2"
            >
              Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ViewUser;
