import axios from "axios";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export const AddUsers = () => {
  const { register, handleSubmit, formState: { errors }, reset} = useForm();

  const handleAdd = (data) => {
    axios.post("http://localhost:4000/users", data)
      .then(() => {
        reset()
  })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-lg p-4 rounded-4" style={{ minWidth: "350px", maxWidth: "450px" }}>
        <h2 className="text-center mb-4">Add New User</h2>

        <form onSubmit={handleSubmit(handleAdd)}>
        
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              className={`form-control ${errors.name ? "is-invalid" : ""}`}
              placeholder="Enter name"
              {...register("name", { required: "Please input name" })}
            />
            {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
         
          </div>

             <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Surname
            </label>
            <input
              type="text"
              id="surname"
              className={`form-control ${errors.name ? "is-invalid" : ""}`}
              placeholder="Enter surname"
              {...register("surname", { required: "Please input name" })}
            />
            {errors.surname && <div className="invalid-feedback">{errors.surname.message}</div>}
          </div>

         
          <div className="mb-3">
            <label htmlFor="age" className="form-label">
              Age
            </label>
            <input
              type="text"
              id="age"
              className={`form-control ${errors.age ? "is-invalid" : ""}`}
              placeholder="Enter age"
              {...register("age", { required: "Please input age" })}
            />
            {errors.age && <div className="invalid-feedback">{errors.age.message}</div>}
          </div>

          <button type="submit" className="btn btn-primary w-100 mb-3">
            Add User
          </button>
        </form>

     
        <div className="text-center">
          <Link to="/" className="text-decoration-none">
            ⬅ Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};