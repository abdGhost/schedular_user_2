import { useState, useEffect } from "react";
import * as API from "../../utils/services/apis";

export default function TaskHistory() {
  const [assignedTasks, setAssignedTask] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getAssignedTask() {
      try {
        setIsLoading(true);
        const res = await API.AssignedTask();
        console.log(res.data);
        setAssignedTask(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    getAssignedTask();
  }, []);

  const data = assignedTasks.list ? assignedTasks.list : [];

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white border border-gray-100 shadow-md shadow-black/5 p-6 rounded-md">
        <div className="flex justify-between mb-4 items-start">
          <div className="font-bold text-xl">Activities</div>
        </div>
        <div className="overflow-hidden">
          <table className="w-full min-w-[786px] min-h-[540px] mx-auto">
            <thead>
              <tr>
                <th className="py-2 px-6 border-b border-b-gray-200 text-left text-sm font-bold text-gray-600">
                  Office Name
                </th>
                <th className="py-2 px-3 border-b border-b-gray-200 text-left text-sm font-bold text-gray-600">
                  Task Name
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
                <th className="py-2 px-4 border-b border-b-gray-200 text-left text-sm font-bold text-gray-600">
                  Total Hour
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((task, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border-b border-b-gray-50">
                    <div className="flex items-center">
                      <a
                        href="#"
                        className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                      >
                        {task.officeName}
                      </a>
                    </div>
                  </td>
                  <td className="py-2 px-4 border-b border-b-gray-50">
                    <span className="text-[13px] font-medium text-gray-400">
                      {task.taskName}
                    </span>
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
                  <td className="py-2 px-4 border-b border-b-gray-50">
                    <span className="text-[13px] font-medium text-gray-400">
                      {task.totalHours}hr
                    </span>
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
