import { useRef, useState } from "react"
import { Axios } from "../../lib/api"
import { IContext, IResponse } from "../../types"
import { useNavigate, useOutletContext } from "react-router-dom"

export const ImmagePickker =() => {
    const picInput = useRef<HTMLInputElement | null>(null)
    const [preview,setPreview] = useState("")
    const navigate = useNavigate()
    const {user,setUser} = useOutletContext<IContext>()
    const handlePreview = () => {
     //   setPreview(URL.createObjectURL(file))
        if(picInput.current?.files){
            const file = picInput.current.files[0]
            const reder = new FileReader()
            reder.onload = () => {
                setPreview(reder.result as string)
            }
            reder.readAsDataURL(file)

        }
    }
    const handleUpload = () => {
        if(picInput.current?.files) {
           
            const file = picInput.current.files[0]
            const form = new FormData()
            form.append("pircture",file)
            
            Axios.patch<IResponse<string>>("profile/upload",form)
               .then((res) => {
                setUser({...user:res.current.data})
                navigate("/profile")
               })
        }
    }
    return <div>
       <button onClick={() => picInput.current?.click()} className="bg-indigo-400 rounded-md p-2 hover:bg indigo-300 my-5">Choose a pic</button>
        <input
        className="hidden"
         type="file"
         ref={picInput}
         onChange={handlePreview}

          />
          {
            preview && <div>
                <p>preview:</p>
                <img 
                className="w-[100px] h-[100px] border-1"
                src={preview} 
                />
                <button onClick={handleUpload} className="bg-green-200 rounded-md p-2 m-2">upload</button>
                <button onClick={() => setPreview("") } className="bg-red-200 rounded-md p-2 m-2">cancel</button>

            </div>
          }
    </div>
}