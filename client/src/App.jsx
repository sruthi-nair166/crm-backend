import { Outlet } from "react-router-dom";
import UserData from "./components/UserData";
import Login from "./components/Login";
import Register from "./components/Register";

export default function App() {
  return (
    <div className="bg-gray-300 min-h-screen p-2 flex flex-col">
      <Outlet />
    </div>
  );
}
