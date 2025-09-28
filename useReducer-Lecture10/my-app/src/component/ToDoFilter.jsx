import { createContext, useContext } from "react"
import { ToDoContext } from "../context/provider"

export const ToDoFilte = ({onFilter}) => {
       const {state,dispatch} = useContext(ToDoContext)
       return <div className=" m-2">
                 <button className="btn btn-outline-success me-2 p-2" onClick={() =>onFilter("all") } >all</button>
                 <button className="btn btn-outline-danger me-2 p-2  " onClick={() => onFilter("active")}>active</button>
                 <button className="btn btn-outline-danger me-2 p-2" onClick={() => onFilter("completed")}>completed</button>
               </div>      
}