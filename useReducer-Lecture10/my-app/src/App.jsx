import { ToDoList } from "./component/ToDoList";
import { ToDoProvider } from "./context/provider";

export default function App() {
  return <div>
    <ToDoProvider>
      <ToDoList/>
    </ToDoProvider>
  </div>
}
