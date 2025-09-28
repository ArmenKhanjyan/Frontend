import { useState } from "react"
import { AddToDo } from "./AddToDo"
import { List } from "./List"
import { ToDoFilte } from "./ToDoFilter"

export const ToDoList = () => {
       const [filter,setFilter] = useState("all")
       const handleFilter = (text) => {
          setFilter(text)   
       }
       return <div>         
           <ToDoFilte onFilter={handleFilter}/>
           <List filter={filter}/>
            <AddToDo/>
       </div>
}