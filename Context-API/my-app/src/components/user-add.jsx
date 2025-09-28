import { useContext } from "react"
import { UserContext } from "../context/user-context"
import {useForm} from "react-hook-form"
import axios from "axios"
export const  UserAdd = () => {

const{register,handleSubmit,formState:{errors},reset} = useForm()
const {onAdd} = useContext(UserContext)   

const handleAdd = async (data) => {
    const res = await axios.post("http://localhost:3001/users", data);
    onAdd(res.data); 
    reset();
}; 
   
  return <div className="col-md-2">
    <div className="card p-3 ">
      <h4 className="mb-3">Add User</h4>
      <form onSubmit={handleSubmit(handleAdd)}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-select"
            {...register("name", { required: "Please fill the name" })}
          />
          {errors.name && <p className="text-danger ">{errors.name.message}</p>}
        </div>

      
        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            type="number"
            className="form-control"
            {...register("age", { setValueAs: p => +p })}
          />
        </div>

        <div className="mb-3">
          <label >Level</label>
          <select className="form-select" {...register("level")}>
            <option></option>
            <option>Junior</option>
            <option>Middle</option>
            <option>Senior</option>
          </select>
        </div>
        <button className="btn btn-success btn-sm w-100">Save</button>
      </form>
    </div>
  </div>
}