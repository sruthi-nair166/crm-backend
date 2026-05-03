import { AiOutlineSortAscending } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import NavBar from "./NavBar";

export default function UserData() {
  return (
    <div className="bg-white rounded-lg flex-1">
      <NavBar />
      <div className="px-6 pt-12 pb-6">
        <h2 className="text-2xl font-medium">Users</h2>

        <div className="flex flex-col sm:flex-row flex-wrap w-full justify-between items-center gap-3 pt-6 pb-4">
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

          <button className="flex items-center bg-sky-700 hover:bg-sky-600 transition text-white rounded-md gap-1 px-5 py-2 w-full sm:w-auto">
            <FaPlus />
            Add User
          </button>
        </div>
      </div>
    </div>
  );
}
