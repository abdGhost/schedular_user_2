/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Drawer } from "flowbite-react";

// import DrawerSidebar from "./DrawerSidebar";

export default function Header({ userProfile }) {
  const [toggleNotification, setToggleNotification] = useState(false);
  const [toggleProfile, setToggleProfile] = useState(false);

  const navigate = useNavigate();

  const { Name } = userProfile;
  console.log(Name);
  const [show, setShow] = useState(false);

  // const handleClose = () => setIsOpen(false);

  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => setIsOpen(false);

  return (
    <>
      <div className="py-2 px-6 bg-[#ffffff] flex items-center shadow-md shadow-black/5 sticky top-0 left-0 z-30">
        <button
          type="button"
          className="text-lg text-gray-900 font-semibold sidebar-toggle"
        >
          <i onClick={() => setIsOpen(true)} className="ri-menu-line"></i>
        </button>

        <ul className="ml-auto flex items-center">
          <li className="dropdown">
            <button
              onClick={() => {
                setToggleNotification(!toggleNotification);
                setToggleProfile(false);
              }}
              type="button"
              className="dropdown-toggle text-gray-400 mr-4 w-8 h-8 rounded flex items-center justify-center hover:text-gray-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className="hover:bg-gray-100 rounded-full"
                viewBox="0 0 24 24"
                style={{ fill: "gray" }}
              >
                <path d="M19 13.586V10c0-3.217-2.185-5.927-5.145-6.742C13.562 2.52 12.846 2 12 2s-1.562.52-1.855 1.258C7.185 4.074 5 6.783 5 10v3.586l-1.707 1.707A.996.996 0 0 0 3 16v2a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-2a.996.996 0 0 0-.293-.707L19 13.586zM19 17H5v-.586l1.707-1.707A.996.996 0 0 0 7 14v-4c0-2.757 2.243-5 5-5s5 2.243 5 5v4c0 .266.105.52.293.707L19 16.414V17zm-7 5a2.98 2.98 0 0 0 2.818-2H9.182A2.98 2.98 0 0 0 12 22z"></path>
              </svg>
            </button>
            <div
              className={`dropdown-menu shadow-md shadow-black/5 z-30 ${
                !toggleNotification ? "hidden" : "absolute"
              } max-w-xs w-full bg-white rounded-md border border-gray-100`}
            >
              <div className="flex items-center px-4 pt-4 border-b border-b-gray-100 notification-tab">
                <button
                  type="button"
                  data-tab="notification"
                  data-tab-page="notifications"
                  className="text-gray-400 font-medium text-[13px] hover:text-gray-600 border-b-2 border-b-transparent mr-4 pb-1 active"
                >
                  Notifications
                </button>
              </div>
              <div className="my-2">
                <ul
                  className="max-h-64 overflow-y-auto"
                  data-tab-for="notification"
                  data-page="notifications"
                >
                  <li>
                    <a
                      href="#"
                      className="py-2 px-4 flex items-center hover:bg-gray-50 group"
                    >
                      <img
                        src="https://placehold.co/32x32"
                        alt=""
                        className="w-8 h-8 rounded block object-cover align-middle"
                      />
                      <div className="ml-2">
                        <div className="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">
                          New order
                        </div>
                        <div className="text-[11px] text-gray-400">
                          from a user
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="py-2 px-4 flex items-center hover:bg-gray-50 group"
                    >
                      <img
                        src="https://placehold.co/32x32"
                        alt=""
                        className="w-8 h-8 rounded block object-cover align-middle"
                      />
                      <div className="ml-2">
                        <div className="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">
                          New order
                        </div>
                        <div className="text-[11px] text-gray-400">
                          from a user
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="py-2 px-4 flex items-center hover:bg-gray-50 group"
                    >
                      <img
                        src="https://placehold.co/32x32"
                        alt=""
                        className="w-8 h-8 rounded block object-cover align-middle"
                      />
                      <div className="ml-2">
                        <div className="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">
                          New order
                        </div>
                        <div className="text-[11px] text-gray-400">
                          from a user
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="py-2 px-4 flex items-center hover:bg-gray-50 group"
                    >
                      <img
                        src="https://placehold.co/32x32"
                        alt=""
                        className="w-8 h-8 rounded block object-cover align-middle"
                      />
                      <div className="ml-2">
                        <div className="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">
                          New order
                        </div>
                        <div className="text-[11px] text-gray-400">
                          from a user
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="py-2 px-4 flex items-center hover:bg-gray-50 group"
                    >
                      <img
                        src="https://placehold.co/32x32"
                        alt=""
                        className="w-8 h-8 rounded block object-cover align-middle"
                      />
                      <div className="ml-2">
                        <div className="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">
                          New order
                        </div>
                        <div className="text-[11px] text-gray-400">
                          from a user
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
                <ul
                  className="max-h-64 overflow-y-auto hidden"
                  data-tab-for="notification"
                  data-page="messages"
                >
                  <li>
                    <a
                      href="#"
                      className="py-2 px-4 flex items-center hover:bg-gray-50 group"
                    >
                      <img
                        src="https://placehold.co/32x32"
                        alt=""
                        className="w-8 h-8 rounded block object-cover align-middle"
                      />
                      <div className="ml-2">
                        <div className="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">
                          `${Name}`
                        </div>
                        <div className="text-[11px] text-gray-400">
                          Hello there!
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="py-2 px-4 flex items-center hover:bg-gray-50 group"
                    >
                      <img
                        src="https://placehold.co/32x32"
                        alt=""
                        className="w-8 h-8 rounded block object-cover align-middle"
                      />
                      <div className="ml-2">
                        <div className="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">
                          {Name}
                        </div>
                        <div className="text-[11px] text-gray-400">
                          Hello there!
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="py-2 px-4 flex items-center hover:bg-gray-50 group"
                    >
                      <img
                        src="https://placehold.co/32x32"
                        alt=""
                        className="w-8 h-8 rounded block object-cover align-middle"
                      />
                      <div className="ml-2">
                        <div className="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">
                          John Doe
                        </div>
                        <div className="text-[11px] text-gray-400">
                          Hello there!
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="py-2 px-4 flex items-center hover:bg-gray-50 group"
                    >
                      <img
                        src="https://placehold.co/32x32"
                        alt=""
                        className="w-8 h-8 rounded block object-cover align-middle"
                      />
                      <div className="ml-2">
                        <div className="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">
                          John Doe
                        </div>
                        <div className="text-[11px] text-gray-400">
                          Hello there!
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="py-2 px-4 flex items-center hover:bg-gray-50 group"
                    >
                      <img
                        src="https://placehold.co/32x32"
                        alt=""
                        className="w-8 h-8 rounded block object-cover align-middle"
                      />
                      <div className="ml-2">
                        <div className="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">
                          John Doe
                        </div>
                        <div className="text-[11px] text-gray-400">
                          Hello there!
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li className="dropdown ml-3">
            <button
              type="button"
              className="dropdown-toggle flex items-center"
              onClick={() => {
                setToggleProfile(!toggleProfile);
                setToggleNotification(false);
              }}
            >
              <div className="flex-shrink-0 w-10 h-10 relative">
                <div className="p-1 bg-white rounded-full focus:outline-none focus:ring">
                  <img
                    className="w-8 h-8 rounded-full"
                    src="https://laravelui.spruko.com/tailwind/ynex/build/assets/images/faces/9.jpg"
                    alt=""
                  />
                  <div className="top-0 left-7 absolute w-3 h-3 bg-lime-400 border-2 border-white rounded-full animate-ping"></div>
                  <div className="top-0 left-7 absolute w-3 h-3 bg-lime-500 border-2 border-white rounded-full"></div>
                </div>
              </div>
              <div className="p-2 md:block text-left">
                <h2 className="text-sm font-semibold text-gray-800">{Name}</h2>
                {/* <p className="text-xs text-gray-500">Administrator</p> */}
              </div>
            </button>
            <ul
              className={`dropdown-menu shadow-md shadow-black/5 z-30 ${
                !toggleProfile ? "hidden" : "absolute"
              } py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]`}
            >
              <li>
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    navigate("/dashboard/profile");
                    setToggleProfile(false);
                  }}
                  className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-[#f84525] hover:bg-gray-50"
                >
                  Profile
                </span>
              </li>
              <li>
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    localStorage.setItem("token", "");
                    navigate("/");
                    setToggleProfile(false);
                  }}
                  className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-[#f84525] hover:bg-gray-50"
                >
                  Logout
                </span>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <Drawer open={isOpen} onClose={handleClose}>
        <Drawer.Header title="Schedular" />
        <Drawer.Items>
          <ul className="mt-4">
            <span className="text-gray-400 font-bold">Activity</span>
            <li className="mb-1 group" onClick={() => navigate("/dashboard")}>
              <span
                style={{ cursor: "pointer" }}
                className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100"
              >
                <i className="ri-home-2-line mr-3 text-lg"></i>
                <span className="text-sm">Dashboard</span>
              </span>
            </li>

            <li
              className="mb-1 group"
              onClick={() => navigate("/dashboard/task")}
            >
              <span className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100">
                <i className="bx bx-list-ul mr-3 text-lg"></i>
                <span style={{ cursor: "pointer" }} className="text-sm">
                  Tasks
                </span>
              </span>
            </li>
            <span
              style={{ cursor: "pointer" }}
              className="text-gray-400 font-bold"
            >
              Leave
            </span>
            <li
              className="mb-1 group"
              onClick={() => navigate("/dashboard/leave")}
            >
              <span
                style={{ cursor: "pointer" }}
                className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100"
              >
                <i className="bx bx-archive mr-3 text-lg"></i>
                <span style={{ cursor: "pointer" }} className="text-sm">
                  Leave
                </span>
              </span>
            </li>

            <span
              style={{ cursor: "pointer" }}
              className="text-gray-400 font-bold"
            >
              History
            </span>
            <li
              className="mb-1 group"
              onClick={() => navigate("/dashboard/taskHistory")}
            >
              <span
                style={{ cursor: "pointer" }}
                className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100"
              >
                <i className="bx bx-task mr-3 text-lg"></i>
                <span className="text-sm">Task History</span>
                <span className="md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-600 bg-red-200 rounded-full">
                  5
                </span>
              </span>
            </li>
            <li
              className="mb-1 group"
              onClick={() => navigate("/dashboard/paymentHistory")}
            >
              <span
                style={{ cursor: "pointer" }}
                className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100"
              >
                <i className="bx bx-note mr-3 text-lg"></i>
                <span className="text-sm">Payment </span>
                <span className="md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-green-600 bg-green-200 rounded-full">
                  2 New
                </span>
              </span>
            </li>

            {/* Profile */}
            <span
              style={{ cursor: "pointer" }}
              className="text-gray-400 font-bold"
            >
              Profile
            </span>
            <li
              className="mb-1 group"
              onClick={() => navigate("/dashboard/profile")}
            >
              <span
                style={{ cursor: "pointer" }}
                className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100"
              >
                <i className="bx bx-task mr-3 text-lg"></i>
                <span className="text-sm">Profile</span>
              </span>
            </li>
          </ul>
        </Drawer.Items>
      </Drawer>
    </>
  );
}
