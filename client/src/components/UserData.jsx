import { AiOutlineSortAscending } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import NavBar from "./NavBar";
import { useState, useEffect } from "react";
import axios from "axios";

export default function UserData() {
  const [users, setUsers] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get("http://localhost:3000/api/users");
      setUsers(res.data);
    };

    fetchUsers();
  }, []);

  const handleOpenForm = () => {
    const token = localStorage.getItem("token");

    setIsEdit(false);

    if (!token) {
      alert("Please login to add users");
      return;
    }

    setFormData({
      name: "",
      email: "",
      phone: "",
    });

    setShowForm(true);
  };

  const handleAddUser = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    if (!/^[0-9]{10}$/.test(formData.phone)) {
      alert("Phone must be 10 digits");
      return;
    }

    try {
      let res;

      if (isEdit) {
        res = await axios.put(
          `http://localhost:3000/api/users/${editId}`,
          formData,
          {
            headers: { authorization: token },
          },
        );

        setUsers(users.map((u) => (u._id === editId ? res.data : u)));
      } else {
        res = await axios.post(
          "http://localhost:3000/api/users",
          {
            ...formData,
            isCustomer: true,
          },
          {
            headers: { authorization: token },
          },
        );

        setUsers([...users, res.data]);
      }

      setShowForm(false);
      setIsEdit(false);
      setEditId(null);
    } catch (err) {
      console.log(err.response?.data);
      alert("Operation failed");
    }
  };

  const handleEdit = (user) => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login to edit users");
      return;
    }

    setIsEdit(true);
    setEditId(user._id);

    setFormData({
      name: user.name,
      email: user.email,
      phone: user.phone,
    });

    setShowForm(true);
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login to delete users");
      return;
    }

    await axios.delete(`http://localhost:3000/api/users/${id}`, {
      headers: {
        authorization: token,
      },
    });

    setUsers(users.filter((u) => u._id !== id));
  };

  return (
    <div className="bg-white rounded-lg flex-1">
      <NavBar />
      <div className="pt-12">
        <h2 className="text-2xl font-medium px-6">Users</h2>

        <div className="flex flex-col sm:flex-row flex-wrap w-full justify-between items-center gap-3 px-6 pt-6 pb-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button className="shrink-0 flex items-center border-2 hover:bg-slate-200 rounded-md gap-1 ps-3 pe-5 py-2">
              <AiOutlineSortAscending />
              Sort
            </button>

            <div className="flex items-center border-2 rounded-md gap-1 ps-2 pe-5 py-2 w-full sm:w-64">
              <IoSearchSharp className="text-slate-400" />
              <input
                type="text"
                placeholder="Search"
                className="w-full outline-none"
              />
            </div>
          </div>

          <button
            onClick={handleOpenForm}
            className="flex items-center bg-sky-700 hover:bg-sky-600 transition text-white rounded-md gap-1 px-3 py-2 w-full sm:w-auto"
          >
            <FaPlus />
            Add User
          </button>
        </div>

        {showForm && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <form
              onSubmit={handleAddUser}
              className="bg-white p-6 rounded-lg w-96"
            >
              <h2 className="text-xl font-semibold mb-4">
                {" "}
                {isEdit ? "Edit" : "Add"} Customer
              </h2>

              <input
                className="border w-full mb-3 p-2"
                placeholder="Name"
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />

              <input
                className="border w-full mb-3 p-2"
                placeholder="Email"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />

              <input
                className="border w-full mb-3 p-2"
                placeholder="Phone"
                type="text"
                value={formData.phone}
                onChange={(e) => {
                  const value = e.target.value;

                  if (!/^\d*$/.test(value)) return;
                  setFormData({ ...formData, phone: e.target.value });
                }}
                maxLength={10}
                required
              />

              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 border rounded"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-4 py-2 bg-sky-700 text-white rounded"
                >
                  {isEdit ? "Update" : "Add"}
                </button>
              </div>
            </form>
          </div>
        )}
        <div className="w-full overflow-x-auto">
          <table className="min-w-full border border-gray-300 border-collapse table-fixed">
            <thead>
              <tr className="">
                <th className="border border-gray-300 px-4 py-4 text-left">
                  Name
                </th>
                <th className="border border-gray-300 px-4 py-4 text-left">
                  Email
                </th>
                <th className="border border-gray-300 px-4 py-4 text-left">
                  Phone
                </th>
                <th className="border border-gray-300 px-4 py-4 text-left w-48">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td className="border border-gray-300 p-4">{user.name}</td>
                  <td className="border border-gray-300 p-4">{user.email}</td>
                  <td className="border border-gray-300 p-4">{user.phone}</td>
                  <td className="flex border border-gray-300 gap-2 ps-2 py-4">
                    <button
                      onClick={() => handleEdit(user)}
                      className="flex items-center bg-sky-700 hover:bg-sky-600 transition text-white rounded-md gap-1 px-3 py-1"
                    >
                      <FaRegEdit />
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="flex items-center bg-red-700 hover:bg-red-600 transition text-white rounded-md gap-1 px-3 py-1"
                    >
                      <MdDelete />
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
