import { useContext } from "react"
import { UserItem } from "./user-item"
import { UserContext } from "../context/user-context"



export const UserList = () => {
   const{users} = useContext(UserContext)
    return (
  <div className="col-md-4">
    <h2 className="mb-3">User List</h2>
    <div className="row g-3">
      {users.map(user => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  </div>
);

}