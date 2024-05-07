import React from "react";

function Dashboard() {
  return (
    <>
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <div className="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
            <div className="flex justify-between mb-6">
              <div>
                <div className="flex items-center mb-1">
                  <div className="text-2xl font-semibold">2</div>
                </div>
                <div className="text-sm font-medium text-gray-400">
                  Total Task
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
            <div className="flex justify-between mb-4">
              <div>
                <div className="flex items-center mb-1">
                  <div className="text-2xl font-semibold">100</div>
                  {/* <div className="p-1 rounded bg-emerald-500/10 text-emerald-500 text-[12px] font-semibold leading-none ml-2">
                    +30%
                  </div> */}
                </div>
                <div className="text-sm font-medium text-gray-400">
                  Total Leave
                </div>
              </div>
            </div>
            <a
              href="/dierenartsen"
              className="text-[#60a132] font-medium text-sm hover:text-red-800"
            >
              View
            </a>
          </div>
          <div className="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
            <div className="flex justify-between mb-6">
              <div>
                <div className="text-2xl font-semibold mb-1">100</div>
                <div className="text-sm font-medium text-gray-400">
                  Total Payment
                </div>
              </div>
            </div>
            <a
              href=""
              className="text-[#60a132] font-medium text-sm hover:text-red-800"
            >
              View
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
          {/* <div className="p-6 relative flex flex-col min-w-0 mb-4 lg:mb-0 break-words bg-gray-50 dark:bg-gray-800 w-full shadow-lg rounded">
            <div className="rounded-t mb-0 px-0 border-0">
              <div className="flex flex-wrap items-center px-4 py-2">
                <div className="relative w-full max-w-full flex-grow flex-1">
                  <h3 className="font-semibold text-base text-gray-900 dark:text-gray-50">
                    Users
                  </h3>
                </div>
              </div>
              <div className="block w-full overflow-x-auto">
                <table className="items-center w-full bg-transparent border-collapse">
                  <thead>
                    <tr>
                      <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Role
                      </th>
                      <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Amount
                      </th>
                      <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="text-gray-700 dark:text-gray-100">
                      <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                        Administrator
                      </th>
                      <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        1
                      </td>
                      <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div className="flex items-center">
                          <span className="mr-2">70%</span>
                          <div className="relative w-full">
                            <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-200">
                              <div
                                style={{ width: "70%" }}
                                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600"
                              ></div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="text-gray-700 dark:text-gray-100">
                      <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                        User
                      </th>
                      <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        6
                      </td>
                      <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div className="flex items-center">
                          <span className="mr-2">40%</span>
                          <div className="relative w-full">
                            <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-200">
                              <div
                                style={{ width: "40%" }}
                                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                              ></div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="text-gray-700 dark:text-gray-100">
                      <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                        User
                      </th>
                      <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        5
                      </td>
                      <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div className="flex items-center">
                          <span className="mr-2">45%</span>
                          <div className="relative w-full">
                            <div className="overflow-hidden h-2 text-xs flex rounded bg-pink-200">
                              <div
                                style={{ width: "45%" }}
                                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"
                              ></div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="text-gray-700 dark:text-gray-100">
                      <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                        User
                      </th>
                      <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        4
                      </td>
                      <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div className="flex items-center">
                          <span className="mr-2">60%</span>
                          <div className="relative w-full">
                            <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                              <div
                                style={{ width: "60%" }}
                                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                              ></div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div> */}
          <div className="bg-white border border-gray-100 shadow-md shadow-black/5 p-6 rounded-md">
            <div className="flex justify-between mb-4 items-start">
              <div className="font-bold text-lg">Activities</div>
            </div>
            <div className="overflow-hidden">
              <table className="w-full min-w-[540px]">
                <thead>
                  <tr>
                    <th className="py-2 px-6 border-b border-b-gray-200 text-left text-sm font-bold text-gray-600">
                      Name
                    </th>
                    <th className="py-2 px-4 border-b border-b-gray-200 text-left text-sm font-bold text-gray-600">
                      Date
                    </th>
                    <th className="py-2 px-4 border-b border-b-gray-200 text-left text-sm font-bold text-gray-600">
                      Start Time
                    </th>
                    <th className="py-2 px-4 border-b border-b-gray-200 text-left text-sm font-bold text-gray-600">
                      End Time
                    </th>
                    <th className="py-2 px-4 border-b border-b-gray-200">
                      {/* This is an empty header for alignment */}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <div className="flex items-center">
                        <a
                          href="#"
                          className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                        >
                          Task 1
                        </a>
                      </div>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <span className="text-[13px] font-medium text-gray-400">
                        02-02-2024
                      </span>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <span className="text-[13px] font-medium text-gray-400">
                        17.45
                      </span>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <span className="text-[13px] font-medium text-gray-400">
                        17.45
                      </span>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50"></td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <div className="flex items-center">
                        <a
                          href="#"
                          className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                        >
                          Task 3
                        </a>
                      </div>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <span className="text-[13px] font-medium text-gray-400">
                        02-02-2024
                      </span>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <span className="text-[13px] font-medium text-gray-400">
                        17.45
                      </span>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <span className="text-[13px] font-medium text-gray-400">
                        17.45
                      </span>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50"></td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <div className="flex items-center">
                        <a
                          href="#"
                          className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                        >
                          Task 3
                        </a>
                      </div>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <span className="text-[13px] font-medium text-gray-400">
                        02-02-2024
                      </span>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <span className="text-[13px] font-medium text-gray-400">
                        17.45
                      </span>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <span className="text-[13px] font-medium text-gray-400">
                        17.45
                      </span>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50"></td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <div className="flex items-center">
                        <a
                          href="#"
                          className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                        >
                          Task 4
                        </a>
                      </div>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <span className="text-[13px] font-medium text-gray-400">
                        02-02-2024
                      </span>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <span className="text-[13px] font-medium text-gray-400">
                        17.45
                      </span>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <span className="text-[13px] font-medium text-gray-400">
                        17.45
                      </span>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50"></td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <div className="flex items-center">
                        <a
                          href="#"
                          className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                        >
                          Task 5
                        </a>
                      </div>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <span className="text-[13px] font-medium text-gray-400">
                        02-02-2024
                      </span>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <span className="text-[13px] font-medium text-gray-400">
                        17.45
                      </span>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <span className="text-[13px] font-medium text-gray-400">
                        17.45
                      </span>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50"></td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <div className="flex items-center">
                        <a
                          href="#"
                          className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                        >
                          Task 6
                        </a>
                      </div>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <span className="text-[13px] font-medium text-gray-400">
                        02-02-2024
                      </span>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <span className="text-[13px] font-medium text-gray-400">
                        17.45
                      </span>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <span className="text-[13px] font-medium text-gray-400">
                        17.45
                      </span>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50"></td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <div className="flex items-center">
                        <a
                          href="#"
                          className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                        >
                          Task 7
                        </a>
                      </div>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <span className="text-[13px] font-medium text-gray-400">
                        02-02-2024
                      </span>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <span className="text-[13px] font-medium text-gray-400">
                        17.45
                      </span>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <span className="text-[13px] font-medium text-gray-400">
                        17.45
                      </span>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
