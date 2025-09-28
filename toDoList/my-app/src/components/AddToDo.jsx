import { useState } from "react"

  export const AddToDo = ({onAdd}) => {
  const [text,setText] = useState("")
  const [error,setError] = useState("")
  const handleSave = () => {
    if(!text.trim()) {
      return setError("please not a text")
    }
    setError("")
    onAdd(text)
    setText("")
  }

    return <>
      <div>
        {error && <p style={{color:"red"}}>{error}</p>}
        <input 
        value={text}
        onChange={e => setText(e.target.value)  }
        />
        <button onClick={handleSave} >Save</button>
      </div>
    </>
}