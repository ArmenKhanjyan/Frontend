import { AddToDo } from "./AddToDo";  
import { List } from "./List";

import { useState } from "react";
import { ToDoFilter } from "./ToDOFilter";

export const ToDoList = () => {
  const [todos, setTodos] = useState([
    { id: 101, text: "read a book", completed: false },
    { id: 102, text: "do Work", completed: false },
    { id: 103, text: "Listen to music", completed: true },
  ]);
  const [filter,setFilter] = useState("active")
 const handleAdd = text => {
  setTodos([...todos,{text,completed:false,id:Date.now()}])
 }
 const handleDelete = id => {
   setTodos(todos.filter(item => item.id !== id))
 }
 const handleBoolian = id => {
  setTodos(todos.map(item => item.id === id ? {...item,completed:!item.completed}:item))
 }
const handleFilter = (text) => {
  setFilter(text)
}
  return (
    <>
      <AddToDo onAdd={handleAdd}/>
      <ToDoFilter onActive={handleFilter} filter={filter}/>
      <List items={todos} filter={filter} onDelete={handleDelete} onBoolian={handleBoolian}/>
    </>
  );
};
