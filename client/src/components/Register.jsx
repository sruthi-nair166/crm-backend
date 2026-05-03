import { Link } from "react-router-dom";

export default function Register() {
  const handleRegister = (e) => {
    e.preventDefault();

    if (!/^[0-9]{10}$/.test(phone)) {
      alert("Phone must be 10 digits");
      return;
    }

    if (password.length < 6) {
      alert("Password must not be less than 6 characters");
      return;
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-10px)]">
      <div className="flex flex-col items-center bg-white rounded-xl w-1/4 p-6">
        <h2 className="text-4xl font-medium">Sign Up</h2>

        <form onSubmit={handleRegister} className="w-full">
          <div className="flex flex-col pt-8">
            <label htmlFor="text">Name:</label>
            <input
              className="border-2 border-slate-300 h-10 ps-2 rounded-md"
              type="text"
              id="text"
              placeholder="Enter your name"
              required
            />
          </div>
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
            <label htmlFor="phone">Phone:</label>
            <input
              className="border-2 border-slate-300 h-10 ps-2 rounded-md"
              type="text"
              id="phone"
              placeholder="Enter your phone no."
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
          <button
            type="submit"
            className="bg-sky-700 hover:bg-sky-600 transition text-white w-full rounded-md font-medium mt-6 px-4 py-3"
          >
            Register
          </button>
        </form>

        <p className="pt-8">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-sky-700 hover:text-sky-600 font-medium cursor-pointer"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
