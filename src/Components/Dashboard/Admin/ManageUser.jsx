import axios from "axios";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import HOST from "../../../constant/HOST";

const ManageUser = () => {
  const [users, setUsers] = useState();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRole, setSelectedRole] = useState(null);
  const [tg, setTG] = useState([]);

  const roleOptions = [
    { value: "tourist", label: "Tourist" },
    { value: "tourGuide", label: "Tour Guide" },
  ];

  useEffect(() => {
    const fetchUsers = async () => {
      const params = {};
      if (searchQuery) params.query = searchQuery;
      if (selectedRole) params.role = selectedRole.value;

      axios.get(`${HOST}/users/search`, { params }).then((res) => {
        setUsers(res.data);
      });
    };

    const fetchTG = async () => {
      axios.get(`${HOST}/admin/tgApplications`).then((res) => {
        setTG(res.data);
      });
    };
    fetchUsers();
    fetchTG();
  }, [searchQuery, selectedRole]);

  if (!users)
    return (
      <div className="flex justify-center items-center h-screen">
        {/* Loading Dots */}
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );

  return (
    <div className="container mx-auto mt-5 flex flex-col items-center">
      <div className="mb-4 w-full flex justify-between">
        <input
          type="text"
          placeholder="Search by name or email"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border p-2 rounded w-1/2"
        />
        <Select
          options={roleOptions}
          value={selectedRole}
          onChange={setSelectedRole}
          placeholder="Filter by role"
          className="w-1/3"
        />
      </div>
      <table className="min-w-full bg-white border border-gray-200 text-center">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Role</th>
            <th className="py-2 px-4 border-b">Tour Guide Applications</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id} className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b">{user.name}</td>
              <td className="py-2 px-4 border-b">{user.email}</td>
              <td className="py-2 px-4 border-b">{user.userType}</td>
              <td className="py-2 px-4 border-b">
                {tg.find((application) => application.email === user.email)
                  ? "Yes"
                  : "No"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUser;
