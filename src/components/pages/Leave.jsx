export default function Leave() {
  return (
    <>
      <form>
        <div className="min-h-screen p-2 bg-gray-100 flex items-center justify-center">
          <div className="container max-w-screen-lg mx-auto">
            <div>
              <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                <div className="pl-4 text-black font-bold">Leave Form</div>
                <div className="p-4 gap-4 gap-y-2 text-sm text-gray-600">
                  <div className="lg:col-span-2">
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                      <div className="md:col-span-5">
                        <label htmlFor="full_name">Reason For Leave</label>
                        {/* <input
                          rows="4"
                          name="full_name"
                          id="full_name"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        /> */}
                        <textarea
                          id="message"
                          rows="4"
                          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Write your thoughts here..."
                        ></textarea>
                      </div>

                      <div className="md:col-span-2">
                        <label htmlFor="from_date">From Date</label>
                        <input
                          type="date" // Change the type to 'date' for date picker
                          name="from_date"
                          id="from_date"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label htmlFor="to_date">To Date</label>
                        <input
                          type="date" // Change the type to 'date' for date picker
                          name="to_date"
                          id="to_date"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        />
                      </div>

                      <div className="md:col-span-5 text-right">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
