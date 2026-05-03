import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-10px)]">
      <div className="flex flex-col items-center bg-white rounded-xl w-1/4 p-6">
        <h2 className="text-4xl font-medium">Login</h2>

        <div className="w-full">
          <div className="flex flex-col pt-8">
            <label htmlFor="email">Email:</label>
            <input
              className="border-2 border-slate-300 h-10 ps-2 rounded-md"
              type="email"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="flex flex-col pt-8">
            <label htmlFor="password">Password:</label>
            <input
              className="border-2 border-slate-300 h-10 ps-2 rounded-md"
              type="password"
              id="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <button className="bg-sky-700 hover:bg-sky-600 transition text-white w-full rounded-md font-medium mt-6 px-4 py-3">
            Login
          </button>
        </div>

        <p className="pt-8">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-sky-700 hover:text-sky-600 font-medium cursor-pointer"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
