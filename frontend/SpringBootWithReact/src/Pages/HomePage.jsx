import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function HomePage() {
  const [user, setUser] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const users = await axios.get("http://localhost:8080/getAllUser");
    setUser(users.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/delete/${id}`);
    loadUsers();
  };
  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col" style={{ textAlign: "center" }}>
                id
              </th>
              <th scope="col" style={{ textAlign: "center" }}>
                First Name
              </th>
              <th scope="col" style={{ textAlign: "center" }}>
                Last Name
              </th>
              <th scope="col" style={{ textAlign: "center" }}>
                Phone
              </th>
              <th scope="col" style={{ textAlign: "center" }}>
                Email
              </th>
              <th scope="col" style={{ textAlign: "center" }}>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {user.map((user, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td style={{ textAlign: "center" }}>{user.firstName}</td>
                <td style={{ textAlign: "center" }}>{user.lastName}</td>
                <td style={{ textAlign: "center" }}>{user.number}</td>
                <td style={{ textAlign: "center" }}>{user.email}</td>
                <td style={{ textAlign: "center" }}>
                  <Link className="btn btn-primary mx-2" to={`/get/${user.id}`}>View</Link>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/update/${user.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default HomePage;
