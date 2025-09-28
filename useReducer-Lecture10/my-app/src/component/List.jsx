import { useContext } from "react"
import { ToDoItem } from "./ToDoItem"
import { ToDoContext } from "../context/provider"

export const List = ({filter}) => {
    const {state,dispatch} = useContext(ToDoContext)
      const items = state.todos.filter(todo => {
          if(filter === "all") {
               return true
          } else if(filter === "active") {
               return !todo.completed
          } else if (filter === "completed") {
               return todo.completed
          }
          return todo
})
       return <div className="list">
        {
           items.map(item => <ToDoItem key={item.id} item={item}/>)
        }
           
       </div>
}