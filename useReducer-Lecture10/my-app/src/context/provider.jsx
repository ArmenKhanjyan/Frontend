import { createContext, useReducer } from "react";
import { reducer } from "./reducer";
import { initialState } from "./state";

export const ToDoContext = createContext() 
export const ToDoProvider = ({children}) => {// inch unenam uxarkem myus componentnerin
    const [state,dispatch] = useReducer(reducer,initialState) //kapum a state.js ev reducer.js faylery
    return <ToDoContext.Provider value={{state,dispatch}}>
                {children}
        </ToDoContext.Provider>
}
