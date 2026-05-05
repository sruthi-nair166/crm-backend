import { Link } from "react-router-dom";

export default function NavBar() {
  const token = localStorage.getItem("token");

  return (
    <div className="flex justify-between items-center rounded-lg bg-white border-b-2 p-6">
      <h1 className="text-xl font-semibold tracking-widest text-slate-700">
        CRM
      </h1>
      {token ? (
        <button
          onClick={() => {
            localStorage.removeItem("token");
            alert("Logged out");
            window.location.reload();
          }}
          className="bg-red-600 text-white px-4 py-2 rounded-md"
        >
          Logout
        </button>
      ) : (
        <Link
          to="/login"
          className="bg-sky-700 hover:bg-sky-600 transition text-white rounded-md px-5 py-2"
        >
          Login
        </Link>
      )}
    </div>
  );
}
