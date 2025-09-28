import { useContext, useState } from "react"
import { ToDoContext} from "../context/provider"

export const AddToDo = () => {
    const {dispatch} = useContext(ToDoContext)
    const [text,setText] = useState("")
    const handleSubmit = (e) => {
       e.preventDefault()
       dispatch({
              type:"AddUser",
              payload: {id:Date.now(),text,completed:false}
       })
       setText("")
    }
    
    return <div>
       <form onSubmit={handleSubmit}>
         <div className="col col-md-2">
          <label>text</label>
          <input type="text" 
          className="form-select "   
          value={text}
          onChange={(e) => setText(e.target.value)}
           />
          <br/>
              <button  className="btn btn-success mb-3 me-2">Save</button>
         </div>
       </form>     
    </div>
}