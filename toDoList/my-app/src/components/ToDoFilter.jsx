export const ToDoFilter = ({onActive,filter}) => {
    return <>
         <h3>Filter</h3>
         
            <button className={filter === 'all' ? "active-btn" : ""}onClick={() => onActive("all")}>all</button>
            <button className={filter === 'active' ? "active-btn" : ""}onClick={() => onActive("active")}>active</button>
            <button className={filter === 'completed' ? "active-btn" : ""}onClick={() => onActive("completed")}>completed</button>
            
    </>
}