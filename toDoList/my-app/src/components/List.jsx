import { ToDoItem } from "./ToDoItem"
 
export const List = ({items,filter,onDelete,onBoolian}) => {
  const filtered = items.filter(todo => {
    if(filter === "all") {
      return true;
    } else if(filter === "active") {
        return !todo.completed
    } else if(filter === "completed") {
      return todo.completed
    }
    return true
  }) 
    return <div className="list">
      {
        filtered.map(todo => <ToDoItem  key={todo.id} todo={todo}  onDelete={onDelete} onBoolian={onBoolian}/>)
      }
    </div>
}