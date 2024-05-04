import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
function EditUser() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    number: "",
    email: "",
  });
  const { firstName, lastName, number, email } = user;

  useEffect(() => {
    loadUser();
  }, []);

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmitFrom = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/update/${id}`, user);
    navigate("/");
  };
  const loadUser = async () => {
    const oldUser = await axios.get(`http://localhost:8080/get/${id}`);
    setUser(oldUser.data);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register User</h2>
          <form onSubmit={onSubmitFrom}>
            <div className="mb-3 text-center">
              <label htmlFor="firstName" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your First Name"
                name="firstName"
                value={firstName}
                onChange={onInputChange}
              />
            </div>
            <div className="mb-3 text-center">
              <label htmlFor="lastName" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Last Name"
                name="lastName"
                value={lastName}
                onChange={onInputChange}
              />
            </div>
            <div className="mb-3 text-center">
              <label htmlFor="number" className="form-label">
                Phone
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Phone Number"
                name="number"
                value={number}
                onChange={onInputChange}
              />
            </div>
            <div className="mb-3 text-center">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter Your e-mail Address"
                name="email"
                value={email}
                onChange={onInputChange}
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="btn btn-outline-primary text-center"
              >
                Submit
              </button>
              <button
                type="submit"
                onClick={() => navigate("/")}
                className="btn btn-outline-danger text-center mx-2"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditUser;
