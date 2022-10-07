import Navbar from '../client_dashboard/ClientDashboard.js'
export default function Example () {
    return (
      <>
        <Navbar />
        <div className="relative w-1/2 mx-auto py-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search by Survey no, State, District, Taluka"
            className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
          />
        </div>
        <div>
          <p className="text-right text-base mx-auto font-semibold text-xl text-black w-3/4  ">
            1 results
          </p>
          <div className="card-Container w-1/2 mx-auto">
            <div className="Card bg-[#F1F1F1] text-black border text-lg mx-25 my-5 p-5 rounded-md">
              <h6 className="font-semibold text-left my-3">
                Survey No : <span className="font-normal">59</span>
              </h6>
              <div className="flex flex-row my-3">
                <h6 className="font-semibold text-left w-1/2">
                  Amount : <span className="font-normal">100000</span>
                </h6>
                <h6 className="font-semibold text-left w-1/2">
                  Area : <span className="font-normal">100 sq.feet</span>
                </h6>
              </div>
              <h6 className="font-semibold text-left my-3">
                Address :
                <span className="font-normal">
                  59, Rajapar Timbo, Mandvi, Kutch, Gujarat
                </span>
              </h6>
              <h6 className="font-semibold text-left my-3">
                Owner Address :{" "}
                <span className="font-normal">
                  0xA17ff48b26e7ECBffa443f0cF5Cc56A496217773
                </span>
              </h6>

              <div class="flex space-x-2 justify-center">
                <button
                  type="button"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Request for buy
                </button>
                <button
                  type="button"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  View more details
                </button>
                <button
                  type="button"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Show in map
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}