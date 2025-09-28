export const ToDoItem = ({todo,onDelete,onBoolian}) => {
    return <>
      <div className={todo.completed ? "done" : ""}>
        <p>{todo.text}</p>
        <button onClick={() => onDelete(todo.id)}>Delete</button>
        <button onClick={() => onBoolian(todo.id)}>{todo.completed ? "cancel" :"complete"}</button>
      </div>
    </>
}