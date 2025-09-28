import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";

export const UserDetalis = () => {
    const [user,setUser] = useState([])
    const {id} = useParams()
    useEffect(() => {
        axios.get("http://localhost:4000/users/" + id)
          .then((res) => setUser(res.data))
    },[])
     
return (
  <div
    className="d-flex justify-content-center align-items-center min-vh-100"
    style={{
      background: "linear-gradient(135deg, #36416fff, #21e892ff, #423033ff)",
      padding: "20px",
    }}
  >
    <div
      className="card text-white shadow-lg"
      style={{
        maxWidth: "400px",
        width: "100%",
        borderRadius: "20px",
        background: "linear-gradient(135deg, #2d1d40ff, #569c01ff)",
      }}
    >
      <div
        className="card-header text-center"
        style={{
          background: "linear-gradient(to right, #b474f8ff, #2575fc)",
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
        }}
      >
        <h4 className="mb-0 fw-bold">User Details </h4>
      </div>

      <div className="card-body">
        <p className="mb-3">
          <strong>Name:</strong> {user.name}
        </p>
        <p className="mb-3">
          <strong>Age:</strong> {user.age}
        </p>
        <p className="mb-3">
            <strong>Surname:</strong> {user.surname}
        </p>
        <p className="mb-3">
            <strong>id:</strong>{user.id}
        </p>
      </div>
      <div
        className="card-footer text-center"
        style={{
          background: "linear-gradient(to right, #6e382dff, #820e42ff)",
          borderBottomLeftRadius: "20px",
          borderBottomRightRadius: "20px",
        }}
      >
             <Link to="/" className="btn btn-gradient text-white" 
                style={{ background: "linear-gradient(to right, #99b055ff, #86fe7bff)" }}>
               Go to back
          </Link>   
      </div>
    </div>
  
  </div>
);
}