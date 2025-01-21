import React from "react";
import  { useState } from "react";
import { useNavigate } from "react-router-dom";


const Signup = () => {

      const navigate = useNavigate();
    

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white w-full max-w-lg rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-semibold text-blue-600 text-center mb-6">E-Card</h1>
        <h2 className="text-xl font-medium text-gray-700 text-center mb-6">Register</h2>
        <form>
          {/* First Name and Last Name */}
          <div className="flex space-x-4 mb-4">
            <div className="w-1/2">
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-3"
                placeholder="First Name"
              />
            </div>
            <div className="w-1/2">
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-3"
                placeholder="Last Name"
              />
            </div>
          </div>

          {/* Email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full rounded-md bg-blue-50 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-3"
              placeholder="admin@vcard.com"
            />
          </div>

          {/* Password and Password Confirmation */}
          <div className="flex space-x-4 mb-4">
            <div className="w-1/2">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-3"
                placeholder="Password"
              />
            </div>
            <div className="w-1/2">
              <label
                htmlFor="passwordConfirmation"
                className="block text-sm font-medium text-gray-700"
              >
                Password Confirmation
              </label>
              <input
                type="password"
                id="passwordConfirmation"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-3"
                placeholder="Confirm Password"
              />
            </div>
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="terms"
              className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label
              htmlFor="terms"
              className="ml-2 text-sm text-gray-600"
            >
              I agree to the terms and conditions
            </label>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-md shadow-sm transition duration-200"
          >
            Register
          </button>

         <br />
         <br />
          {/* Login Link */}
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <a
               onClick={() => navigate("/")}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Login Here
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
