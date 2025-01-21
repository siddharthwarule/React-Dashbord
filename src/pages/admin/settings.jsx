import React, { useState } from 'react';
import Sidenav from "../../Sidenav";

const Settings = () => {
  const [profileImage, setProfileImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  return (
    
    <div className="min-h-screen bg-blue-50 p-6">
      <Sidenav />
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-xl">
        <div className="flex items-center space-x-6 mb-8">
          <div className="w-16 h-16 bg-blue-600 rounded-full text-white text-2xl flex items-center justify-center">
            SA
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-blue-800">Profile</h1>
            <p className="text-sm text-blue-600">Dashboard / Profile</p>
          </div>
          <div className="ml-auto">
            <span className="px-4 py-2 bg-green-500 text-white rounded-full">Active</span>
          </div>
        </div>

        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-blue-800">First Name</label>
              <input
                type="text"
                placeholder="SaaS"
                className="w-full p-2 border border-blue-300 rounded-md mt-2 focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-blue-800">Last Name</label>
              <input
                type="text"
                placeholder="Admin"
                className="w-full p-2 border border-blue-300 rounded-md mt-2 focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-blue-800">Email</label>
              <input
                type="email"
                placeholder="admin@vcard.com"
                className="w-full p-2 border border-blue-300 rounded-md mt-2 focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-blue-800">Phone</label>
              <input
                type="text"
                placeholder="Enter your phone number"
                className="w-full p-2 border border-blue-300 rounded-md mt-2 focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-blue-800">Password</label>
              <input
                type="password"
                className="w-full p-2 border border-blue-300 rounded-md mt-2 focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-blue-800">Confirm Password</label>
              <input
                type="password"
                className="w-full p-2 border border-blue-300 rounded-md mt-2 focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-blue-800">User Profile</label>
              <div className="flex items-center mt-2">
                <input
                  type="file"
                  onChange={handleImageChange}
                  className="hidden"
                  id="profilePic"
                />
                <label
                  htmlFor="profilePic"
                  className="cursor-pointer py-2 px-4 bg-blue-500 text-white rounded-md"
                >
                  Browse
                </label>
                {profileImage && (
                  <div className="ml-4 w-16 h-16 rounded-full overflow-hidden">
                    <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Settings;
