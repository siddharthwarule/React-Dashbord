import React, { useState } from "react";
import Sidenav from "../../Sidenav";

const CostomerDetails = () => {
  const [users, setUsers] = useState([
    { name: "Karan Sharma", email: "karanmitash@gmail.com", theme: "Political 1", status: "Active" },
    { name: "Sinan Mintaş", email: "sinanmintas04@gmail.com", theme: "Political 2", status: "Inactive" },
    { name: "Mondesign Web", email: "mondesignweb.agency@gmail.com", theme: "Personal 1", status: "Active" },
    { name: "Hebron Lot", email: "karomfinger@gmail.com", theme: "Personal 2", status: "Inactive" },
    { name: "Vineeth Kumar", email: "printfastme@gmail.com", theme: "Personal 2", status: "Active" },
    { name: "Karan Sharma2", email: "karanmitash2@gmail.com", theme: "Political 1", status: "Active" },
    { name: "Sinan Mintaş2", email: "sinanmintas042@gmail.com", theme: "Political 2", status: "Inactive" },
    { name: "Mondesign Web2", email: "mondesignweb.agency2@gmail.com", theme: "Personal 1", status: "Active" },
    { name: "Hebron Lot2", email: "karomfinger2@gmail.com", theme: "Personal 2", status: "Inactive" },
    { name: "Vineeth Kumar2", email: "printfastme2@gmail.com", theme: "Personal 2", status: "Active" },
   
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const [editUser, setEditUser] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const totalPages = Math.ceil(users.length / itemsPerPage);
  
  const currentUsers = users.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleEdit = (user) => {
    setEditUser(user);
    setShowModal(true);
  };

  const handleSave = () => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.email === editUser.email ? editUser : user
      )
    );
    setShowModal(false);
    setEditUser(null);
  };

  const handleToggleStatus = (email) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.email === email
          ? {
              ...user,
              status: user.status === "Active" ? "Inactive" : "Active",
            }
          : user
      )
    );
  };

  return (
    <div className="flex min-h-screen">
      <Sidenav />
      <div className="p-6 bg-blue-50 flex-1">
        <h1 className="text-2xl font-semibold text-blue-600 mb-4">All Customers</h1>
        <table className="w-full border-collapse bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-blue-100 text-blue-800">
              <th className="p-3 text-left">User Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Selected Theme</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user, index) => (
              <tr
                key={index}
                className={`border-b hover:bg-blue-50 ${
                  index % 2 === 0 ? "bg-blue-50" : "bg-white"
                }`}
              >
                <td className="p-3 flex items-center">
                  <div className="bg-blue-500 text-white rounded-full h-8 w-8 flex items-center justify-center mr-3 uppercase">
                    {user.name[0]}
                  </div>
                  {user.name}
                </td>
                <td className="p-3">{user.email}</td>
                <td className="p-3">{user.theme}</td>
                <td className="p-3">
                  <button
                    onClick={() => handleToggleStatus(user.email)}
                    className={`px-3 py-1 rounded-full text-white text-sm ${
                      user.status === "Active" ? "bg-green-500" : "bg-red-500"
                    }`}
                  >
                    {user.status}
                  </button>
                </td>
                <td className="p-3">
                  <button
                    onClick={() => handleEdit(user)}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-sm text-gray-600">
            Showing {itemsPerPage * (currentPage - 1) + 1} to {" "}
            {Math.min(itemsPerPage * currentPage, users.length)} of {users.length} entries
          </span>
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                className={`px-3 py-1 rounded-md text-sm font-medium ${
                  currentPage === i + 1
                    ? "bg-blue-500 text-white"
                    : "bg-blue-100 text-blue-600 hover:bg-blue-200"
                }`}
                onClick={() => handlePageChange(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>

        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
              <h2 className="text-xl font-semibold mb-4">Edit User</h2>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  value={editUser.name}
                  onChange={(e) =>
                    setEditUser({ ...editUser, name: e.target.value })
                  }
                  className="w-full p-2 border rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  value={editUser.email}
                  disabled
                  className="w-full p-2 border rounded-lg bg-gray-100 cursor-not-allowed"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Theme</label>
                <input
                  type="text"
                  value={editUser.theme}
                  onChange={(e) =>
                    setEditUser({ ...editUser, theme: e.target.value })
                  }
                  className="w-full p-2 border rounded-lg"
                />
              </div>
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CostomerDetails;
