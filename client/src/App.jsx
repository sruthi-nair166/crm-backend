import NavBar from "./components/NavBar";
import Home from "./components/HomePage";

export default function App() {
  return (
    <div className="bg-gray-300 h-screen p-2">
      <div className="bg-white rounded-lg h-full">
        <NavBar />
        <Home />
      </div>
    </div>
  );
}
