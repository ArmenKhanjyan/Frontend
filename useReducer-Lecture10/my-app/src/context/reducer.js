export const reducer = function(state,{type,payload}) {
    switch(type) {
        case "DELETE":
            return {...state,todos:state.todos.filter(todo => todo.id !== payload)}
        case "AddUser":
            return {...state,todos:[...state.todos,payload]}    
           default: 
              return state
    }
}