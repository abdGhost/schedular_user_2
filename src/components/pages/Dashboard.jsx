import { useEffect, useState } from "react";
import * as API from "../../utils/services/apis";

function Dashboard() {
  const [assignTask, setAssignTask] = useState([]);

  useEffect(() => {
    async function getAssignTask() {
      try {
        const res = await API.AssignedTask();
        console.log("==========================================");
        console.log(res.data.list);
        if (Array.isArray(res.data.list)) {
          setAssignTask(res.data.list);
        } else {
          console.error("API response is not an array:", res.data.list);
        }
      } catch (e) {
        console.error(e);
      }
    }
    getAssignTask();
  }, []);
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
                  {assignTask.map((task, index) => (
                    <tr key={index}>
                      <td className="py-2 px-4 border-b border-b-gray-50">
                        <div className="flex items-center">
                          <a
                            href="#"
                            className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                          >
                            {task.taskName}
                          </a>
                        </div>
                      </td>
                      <td className="py-2 px-4 border-b border-b-gray-50">
                        <span className="text-[13px] font-medium text-gray-400">
                          {task.date}
                        </span>
                      </td>
                      <td className="py-2 px-4 border-b border-b-gray-50">
                        <span className="text-[13px] font-medium text-gray-400">
                          {task.startTime}
                        </span>
                      </td>
                      <td className="py-2 px-4 border-b border-b-gray-50">
                        <span className="text-[13px] font-medium text-gray-400">
                          {task.endTime}
                        </span>
                      </td>
                      <td className="py-2 px-4 border-b border-b-gray-50"></td>
                    </tr>
                  ))}
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
