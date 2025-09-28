import { SubmitHandler, useForm } from "react-hook-form";
import {  useNavigate } from "react-router-dom";
import { IResponse, setPassword } from "../../types";
import { Axios } from "../../lib/api";
import axios from "axios";
import { useState } from "react";
import { ImmagePickker } from "./image-pickker";

export const Settings = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<setPassword>();
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const handleSetting: SubmitHandler<setPassword> = data => {
    Axios
      .patch("/update/password", data)
      .then(() => {
        navigate("/login"); 
      })
      .catch((err) => {
        if (axios.isAxiosError(err)) {
          const errRep = err.response?.data as IResponse;
          setErr(errRep.message);
        }
      });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6">
      <div className="w-full max-w-md bg-gray-900/80 backdrop-blur-xl shadow-2xl rounded-2xl p-8">
        {err && <p className="text-red-400 my-2">{err}</p>}

        <form onSubmit={handleSubmit(handleSetting)} className="space-y-5">
       
          <div>
            {errors.oldPassword && <p className="text-red-400">{errors.oldPassword.message}</p>}
            <label className="block text-gray-300 text-sm mb-2"> oldPassword</label>
            <input
              {...register("oldPassword", { required: "Please enter your oldPassword" })}
              type="text"
              placeholder="Enter your oldPassword"
              className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white placeholder-gray-500 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            />
          </div>

       
          <div>
            {errors.newPassword && <p className="text-red-400">{errors.newPassword.message}</p>}
            <label className="block text-gray-300 text-sm mb-2">Password</label>
            <input
              {...register("newPassword", { required: "Please enter your password" })}
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white placeholder-gray-500 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
            />
          </div>

      
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold text-lg shadow-lg hover:scale-[1.02] transition-transform"
          >
          save
          </button>
        </form>
        <ImmagePickker/>
      </div>

    </div>
  );
};
