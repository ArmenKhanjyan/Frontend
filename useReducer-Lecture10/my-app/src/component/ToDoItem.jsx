import { useContext } from "react"
import { ToDoContext } from "../context/provider"

export const ToDoItem = ({item}) => {
       const {dispatch} = useContext(ToDoContext)
        return  <div className={item.completed ? "completed" : "not-completed"}>
      <p>{item.text}</p>
      <button
        className="btn btn-danger"
        onClick={() => dispatch({ type: "DELETE", payload: item.id })}
      >
        Delete
      </button>
    </div>
 
   
}    