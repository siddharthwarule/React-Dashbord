import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

      const response = await fetch(`${apiBaseUrl}/admin/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const resp = await response.json();

      if (resp.status_code === 200) {
        setErrorMessage("");
        navigate("/Dashboard"); 
      } else {
        setErrorMessage("Invalid email or password. Please try again.");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setErrorMessage("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col justify-center items-center">
      <div className="bg-white shadow-lg rounded-lg w-96 p-6">
      <h1 className="text-3xl font-semibold text-blue-600 text-center mb-6">E-Card</h1>
        <h2 className="text-3xl font-bold text-blue-600 text-center mb-4">
          Login
        </h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full mt-1 px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full mt-1 px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          {errorMessage && (
            <p className="text-red-500 text-sm text-center">{errorMessage}</p>
          )}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <a
            href="#"
            className="text-sm text-blue-600 hover:text-blue-800 underline"
          >
            Forgot Password?
          </a>
        </div>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <a href="#" className="text-blue-600 hover:text-blue-800 underline" 
             onClick={() => navigate("/signup")}
            >
              Create One
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
