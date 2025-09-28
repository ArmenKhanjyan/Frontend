import { useEffect, useState } from "react"
import axios from 'axios'
import { Link } from "react-router-dom"
export const Users = () => {
    const [users,setUsers] = useState([])
    useEffect(() => {
        axios.get("http://localhost:4000/users")
           .then(res => setUsers(res.data))
    },[])
   
 return (
    <div className="min-vh-100 d-flex flex-column align-items-center justify-content-start py-5" 
         style={{ background: "linear-gradient(to right, #000000ff, #77c5c2ff)" }}>
      
      <h2 className="text-white mb-5 fw-bold text-center">👥 Users List</h2>

      <div className="container">
        <div className="row g-4">
          {users.map((user) => (
            <div key={user.id} className="col-12 col-md-6 col-lg-4">
              <div className="card shadow-lg p-3 rounded-4 d-flex justify-content-between align-items-center"
                   style={{ background: "rgba(163, 108, 108, 0.15)", backdropFilter: "blur(10px)", color: "#1f1f1fff" }}>
                <span className="fw-semibold fs-5">{user.name}</span>
                <Link to={"/users/" + user.id} className="btn btn-outline-light btn-sm">
                  Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <Link to="/add" className="btn btn-gradient text-white" 
                style={{ background: "linear-gradient(to right, #99b055ff, #86fe7bff)" }}>
            ➕ Add User
          </Link>
        </div>
      </div>
    </div>
  );
}