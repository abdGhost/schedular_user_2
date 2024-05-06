import { useState } from "react";
import "boxicons/css/boxicons.min.css";
import Dashboard from "../pages/Dashboard";

export default function SideNav() {
  const [toggleSideNav, setToggleSideNav] = useState(false);
  const [active, setActive] = useState("Dashboard");

  // Toggle function to open and close the sidebar
  const toggleSidebar = () => {
    setToggleSideNav(!toggleSideNav);
  };

  return (
    <div className="min-h-screen flex flex-row bg-gray-100">
      {!toggleSideNav && (
        <div className="p-4">
          <button
            onClick={toggleSidebar}
            className="text-3xl text-gray-600 hover:text-gray-900"
          >
            <i className="bx bx-menu"></i>
          </button>
        </div>
      )}

      {/* Sidebar */}
      <div
        className={`flex flex-col w-56 bg-white rounded-r-3xl overflow-hidden ${
          toggleSideNav ? "block" : "hidden"
        }`}
      >
        <div className="flex items-center justify-between h-20 shadow-md px-4">
          <h1 className="text-2xl uppercase text-blue-500">Schedular</h1>
          <button
            onClick={toggleSidebar}
            className="text-xl text-gray-600 hover:text-gray-900"
          >
            <i className="bx bx-x"></i>
          </button>
        </div>
        <ul className="flex flex-col py-12">
          {[
            { name: "Dashboard", icon: "bx-home" },
            { name: "Task", icon: "bx-task" },
            { name: "Leave", icon: "bx-home" },
            { name: "Payment", icon: "bx-home" },
            { name: "Profile", icon: "bx-user" },
            { name: "Approved", icon: "bx-bell" },
            { name: "Logout", icon: "bx-log-out" },
          ].map((item) => (
            <li key={item.name}>
              <a
                href="#"
                onClick={() => setActive(item.name)}
                className={`flex flex-row items-center h-12 transform transition-transform ease-in duration-200 ${
                  active === item.name
                    ? "text-blue-500"
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg">
                  <i
                    className={`bx ${item.icon} ${
                      active === item.name ? "text-blue-500" : "text-gray-400"
                    }`}
                  ></i>
                </span>
                <span className="text-sm font-medium">{item.name}</span>
                {item.name === "Approved" && (
                  <span className="ml-auto mr-6 text-sm bg-green-100 rounded-full px-3 py-px text-green-500">
                    5
                  </span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {active === "Dashboard" && <Dashboard />}
    </div>
  );
}
