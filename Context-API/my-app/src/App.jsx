
import { UserAdd } from "./components/user-add";
import { UserList } from "./components/user-list";
import { DataProvider } from "./context/provider";

export default function App() {
  return <>
    <DataProvider>
      <UserList/>
      <UserAdd/>
    </DataProvider>
  </>
}