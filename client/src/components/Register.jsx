import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!/^[0-9]{10}$/.test(phone)) {
      alert("Phone must be 10 digits");
      return;
    }

    if (password.length < 6) {
      alert("Password must not be less than 6 characters");
      return;
    }

    try {
      await axios.post("http://localhost:3000/api/users/register", {
        name,
        email,
        phone,
        password,
      });

      navigate("/login");

      alert("User registered successfully");
    } catch (err) {
      alert("Registration failed");
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
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border-2 border-slate-300 h-10 ps-2 rounded-md"
              type="text"
              id="text"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="flex flex-col pt-6">
            <label htmlFor="email">Email:</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-2 border-slate-300 h-10 ps-2 rounded-md"
              type="email"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="flex flex-col pt-6">
            <label htmlFor="phone">Phone:</label>
            <input
              value={phone}
              onChange={(e) => {
                const value = e.target.value;

                if (!/^\d*$/.test(value)) return;
                setPhone(e.target.value);
              }}
              maxLength={10}
              className="border-2 border-slate-300 h-10 ps-2 rounded-md"
              type="text"
              id="phone"
              placeholder="Enter your phone no."
              required
            />
          </div>
          <div className="flex flex-col pt-6">
            <label htmlFor="password">Password:</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
