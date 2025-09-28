
import { useNavigate, useOutletContext } from "react-router-dom";
import { IContext} from "../../types";
import { Axios } from "../../lib/api";


export const Profile = () => {

 const { user }= useOutletContext<IContext>()
 const navigate = useNavigate()
 const handleLogout = () => {
  Axios.post("/logout")
    .then(() => navigate("/login"))
 } 

  return  (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6">
      <div className="w-full max-w-sm bg-gray-900/80 backdrop-blur-xl shadow-2xl rounded-2xl p-8 text-center">
        {/* Profile Picture */}
        <img
        src={!user.picture ? import.meta.env.VITE_BASE + user.picture : import.meta.env.VITE_DEFAULT_PIC}
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto shadow-lg border-4 border-gray-700"
        />

        {/* Username */}
        <h2 className="mt-4 text-2xl font-bold text-white">{user?.name}</h2>
        <p className="text-gray-400 text-sm">{user?.surname}</p>

        {/* Actions */}
        <div className="mt-6 flex flex-col space-y-3">
          <button className="w-full py-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow hover:scale-[1.02] transition-transform">
            Edit Profile
          </button>
          <button onClick={handleLogout} className="w-full py-2 rounded-xl bg-gray-800 text-gray-300 font-semibold border border-gray-700 hover:bg-gray-700 transition">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};
