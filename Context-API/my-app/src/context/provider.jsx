import { useEffect, useState } from "react"
import { UserContext } from "../context/user-context"
import axios from "axios"

export const DataProvider = ({children}) => {
   
  const [users,setUsers] = useState([])
  
useEffect(() => {
  axios.get("http://localhost:3001/users")
    .then((res) => {
        setUsers(res.data)
    })
    .catch((err) => console.error(err))
}, [])

  const handleAdd = (data) => {
    console.log(data)
    setUsers([...users,data])
  }

  const handleDelete = async (id) => {
  await axios.delete(`http://localhost:3001/users/${id}`)
  setUsers(users.filter(user => user.id !== id))
   } 

    return <>
      <UserContext.Provider value={{
        users,
        onDelete:handleDelete,
        onAdd:handleAdd
        }}>
        {children}
      </UserContext.Provider>
    </>
  }