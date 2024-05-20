import { useState } from "react";
import axios from "axios";

const LeaveRequestForm = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [reasonForLeave, setReasonForLeave] = useState("");
  const [message, setMessage] = useState("");

  // Helper function to format date to DD-MM-YYYY
  const formatDate = (date) => {
    const d = new Date(date);
    const day = ("0" + d.getDate()).slice(-2);
    const month = ("0" + (d.getMonth() + 1)).slice(-2);
    const year = d.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const leaveRequest = {
      startDate: formatDate(startDate),
      endDate: formatDate(endDate),
      reasonForLeave,
    };

    console.log(leaveRequest.startDate);

    try {
      const response = await axios.post(
        "http://localhost:9000/employee/addLeave",
        leaveRequest,
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJVU0VSLUlEMTAxNyIsIlJvbGUiOiJST0xFX1VTRVIiLCJpYXQiOjE3MTYxODUwNDN9.xQDQZsFFcZizG56vajjtmoIaTGcYiBuuxJnqc6LTsqNS7eEY5bNR-ZzjRwkn8WRKbXW_JyBD58vI990cXuH9HA`,
          },
        }
      );
      setMessage(response.data.message);
    } catch (error) {
      setMessage("Error submitting leave request");
    }
  };

  return (
    // <div className="min-h-screen p-2 bg-gray-100 flex items-center justify-center">
    //   <div className="container max-w-screen-lg mx-auto">
    //     <div>
    //       <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
    //         <div className="pl-4 text-black font-bold text-xl">
    //           Leave Request Form
    //         </div>
    //         <form
    //           onSubmit={handleSubmit}
    //           className="p-4 gap-4 gap-y-2 text-sm text-gray-600"
    //         >
    //           <div className="lg:col-span-2">
    //             <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
    //               <div className="md:col-span-5">
    //                 <label htmlFor="reason_for_leave">Reason for Leave</label>
    //                 <textarea
    //                   id="reason_for_leave"
    //                   rows="4"
    //                   value={reasonForLeave}
    //                   onChange={(e) => setReasonForLeave(e.target.value)}
    //                   className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
    //                   placeholder="Write your reason here..."
    //                   required
    //                 ></textarea>
    //               </div>

    //               <div className="md:col-span-2">
    //                 <label htmlFor="start_date">Start Date</label>
    //                 <input
    //                   type="date"
    //                   id="start_date"
    //                   value={startDate}
    //                   onChange={(e) => setStartDate(e.target.value)}
    //                   className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
    //                   required
    //                 />
    //               </div>

    //               <div className="md:col-span-2">
    //                 <label htmlFor="end_date">End Date</label>
    //                 <input
    //                   type="date"
    //                   id="end_date"
    //                   value={endDate}
    //                   onChange={(e) => setEndDate(e.target.value)}
    //                   className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
    //                   required
    //                 />
    //               </div>

    //               <div className="md:col-span-5 text-right">
    //                 <div className="inline-flex items-end">
    //                   <button
    //                     type="submit"
    //                     className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    //                   >
    //                     Submit
    //                   </button>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </form>
    //         {message && <p className="text-green-500 mt-4">{message}</p>}
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="min-h-screen p-2 bg-gray-100 flex items-center justify-center">
      <div className="container max-w-screen-lg mx-auto">
        <div>
          <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <div className="pl-4 text-black font-bold text-xl">
              Leave Request Form
            </div>
            <form
              onSubmit={handleSubmit}
              className="p-4 gap-4 gap-y-2 text-sm text-gray-600"
            >
              <div className="lg:col-span-2">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-2">
                  <div className="md:col-span-2">
                    <label htmlFor="reason_for_leave">Reason for Leave</label>
                    <textarea
                      id="reason_for_leave"
                      rows="4"
                      value={reasonForLeave}
                      onChange={(e) => setReasonForLeave(e.target.value)}
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Write your reason here..."
                      required
                    ></textarea>
                  </div>

                  <div className="md:col-span-1">
                    <label htmlFor="start_date">Start Date</label>
                    <input
                      type="date"
                      id="start_date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      required
                    />
                  </div>

                  <div className="md:col-span-1">
                    <label htmlFor="end_date">End Date</label>
                    <input
                      type="date"
                      id="end_date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      required
                    />
                  </div>

                  <div className="md:col-span-2 text-right">
                    <div className="inline-flex items-end">
                      <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            {message && <p className="text-green-500 mt-4">{message}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaveRequestForm;
