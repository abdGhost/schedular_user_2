import React from "react";
import { useNavigate } from "react-router-dom";

export default function SideNav() {
  const navigate = useNavigate();
  return (
    <>
      <div className="fixed left-0 top-0 w-64 h-full bg-[#ffffff] p-4 z-50 sidebar-menu transition-transform">
        <span
          href="#"
          className="flex items-center pb-4 border-b border-b-gray-800"
        >
          <h2 className="font-bold text-2xl">
            <span className="bg-[#6ba0dd] text-white p-2 rounded-md">
              Schedular
            </span>
          </h2>
        </span>
        <ul className="mt-4">
          <span className="text-gray-400 font-bold">Activity</span>
          <li className="mb-1 group" onClick={() => navigate("/dashboard")}>
            <span className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100">
              <i className="ri-home-2-line mr-3 text-lg"></i>
              <span className="text-sm">Dashboard</span>
            </span>
          </li>

          <li
            className="mb-1 group"
            onClick={() => navigate("/dashboard/task")}
          >
            <span
              // href=""
              className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100"
            >
              <i className="bx bx-list-ul mr-3 text-lg"></i>
              <span className="text-sm">Tasks</span>
            </span>
          </li>
          <span className="text-gray-400 font-bold">Leave</span>
          <li className="mb-1 group">
            <a
              href=""
              className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100"
            >
              <i className="bx bx-archive mr-3 text-lg"></i>
              <span className="text-sm">Leave</span>
            </a>
          </li>

          <span className="text-gray-400 font-bold">History</span>
          <li className="mb-1 group">
            <a
              href=""
              className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100"
            >
              <i className="bx bx-bell mr-3 text-lg"></i>
              <span className="text-sm">Task</span>
              <span className="md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-600 bg-red-200 rounded-full">
                5
              </span>
            </a>
          </li>
          <li className="mb-1 group">
            <a
              href=""
              className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100"
            >
              <i className="bx bx-envelope mr-3 text-lg"></i>
              <span className="text-sm">Payment</span>
              <span className="md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-green-600 bg-green-200 rounded-full">
                2 New
              </span>
            </a>
          </li>

          {/* Profile */}
          <span className="text-gray-400 font-bold">Profile</span>
          <li
            className="mb-1 group"
            onClick={() => navigate("/dashboard/profile")}
          >
            <span className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100">
              <i className="ri-home-2-line mr-3 text-lg"></i>
              <span className="text-sm">Profile</span>
            </span>
          </li>
        </ul>
      </div>
      <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-40 md:hidden sidebar-overlay"></div>
    </>
  );
}
