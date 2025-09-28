
import { useContext } from "react"
import { UserContext } from "../context/user-context"
export const UserItem = ({user}) => { 
     const {onDelete} = useContext(UserContext)  
 
return <div className="col-md-5 m-2">
    <div className="card bg-warning text-dark shadow-sm">
      <div className="card-body">
        <h5 className="card-title">User Item</h5>
        <p className="card-text">
          <strong>Name:</strong> {user.name} <br />   
          <strong>Age:</strong> {user.age}
        </p>
        <button
          onClick={() => onDelete(user.id)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      </div>
    </div>
  </div>

}