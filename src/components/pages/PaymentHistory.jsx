export default function PaymentHistory() {
  const data = [
    {
      date: "19-05-2024",
      officeName: "Macro brain",
      totalHours: 8.0,
      taskName: "abc",
      startTime: "1:10 pm",
      endTime: "5:10 am",
    },
    {
      date: "20-05-2024",
      officeName: "Macro brain",
      totalHours: 8.0,
      taskName: "maj",
      startTime: "1:10 pm",
      endTime: "5:10 am",
    },
    {
      date: "23-05-2024",
      officeName: "Macro brain",
      totalHours: 12.0,
      taskName: "abc",
      startTime: "11:58 am",
      endTime: "11:58 pm",
    },
    {
      date: "22-05-2024",
      officeName: "Macro brain",
      totalHours: 12.0,
      taskName: "abc",
      startTime: "12:34 pm",
      endTime: "12:34 am",
    },
    {
      date: "24-05-2024",
      officeName: "Macro brain",
      totalHours: 12.0,
      taskName: "abc",
      startTime: "12:34 pm",
      endTime: "12:34 am",
    },
    {
      date: "23-05-2024",
      officeName: "Macro brain",
      totalHours: 12.0,
      taskName: "abc",
      startTime: "12:47 pm",
      endTime: "12:47 am",
    },
  ];
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white border border-gray-100 shadow-md shadow-black/5 p-6 rounded-md">
        <div className="flex justify-between mb-4 items-start">
          <div className="font-bold text-lg">Payment History</div>
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
                  Total Hour
                </th>
                <th className="py-2 px-4 border-b border-b-gray-200 text-left text-sm font-bold text-gray-600">
                  Total Payment
                </th>
              </tr>
            </thead>
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
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
}
