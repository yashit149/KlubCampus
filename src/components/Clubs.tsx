export default function Clubs() {
  return (
    <div className="bg-gray-100">
      <div className="bg-gradient-to-r from-blue-700 to-teal-500 py-8 w-full px-8 rounded shadow mb-8">
        <div className="flex flex-col items-center">
          <h1 className="text-white text-3xl font-bold">Clubs & Communities</h1>
          <div className="mt-4 flex gap-2">
            <button className="px-4 py-2 rounded font-semibold bg-white text-blue-700 shadow-sm mr-2">
              Grid View
            </button>
            <button className="px-4 py-2 rounded font-semibold bg-white text-teal-500">
              List View
            </button>
            <select className="bg-white font-semibold text-teal-800 rounded-lg py-2 px-4 ml-2">
              <option>Filter: Most Members</option>
              <option>Most Active</option>
              <option>Trending</option>
            </select>
          </div>
        </div>
      </div>

      {/* Official Clubs Section */}
      <section className="mb-10 px-8 bg-gray-100">
        <div className="mx-8 my-6 p-4 bg-gradient-to-r from-teal-400 to-green-400 rounded-lg shadow-sm flex items-center">
          <p className="text-white font-bold">Official Clubs</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Example Club Card */}
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center hover:shadow-lg hover:scale-105 transition">
            <div className="relative mb-2">
              <img
                src="/club_logo1.png"
                alt="Club Logo"
                className="w-16 h-16 rounded-full border-4 border-blue-400 shadow"
              />
              <span className="absolute top-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
            </div>
            <div className="font-bold text-lg text-slate-900 mb-1">Tech Society</div>
            <div className="flex flex-wrap gap-1 mb-1">
              <span className="bg-blue-100 text-blue-800 px-2 rounded-full text-xs">132 Members</span>
              <span className="bg-gray-100 text-gray-600 px-2 rounded-full text-xs">Workshops</span>
              <span className="bg-teal-100 text-teal-700 px-2 rounded-full text-xs">Hackathons</span>
            </div>
            <div className="text-gray-500 text-xs text-center mb-2">
              Past: AI Bootcamp, National Hackfest
              <br />
              Upcoming: Cloud Dev Workshop
            </div>
            <button className="bg-gradient-to-r from-blue-700 to-teal-500 text-white px-6 py-2 rounded-full font-semibold mt-2 shadow hover:scale-105 transition">
              Join Club
            </button>
            <button className="mt-2 text-blue-700 underline text-xs">View Events</button>
          </div>
        </div>
      </section>

      {/* Other Communities Section */}
      <div className="mx-8 my-6 p-4 bg-gradient-to-r from-teal-400 to-green-400 rounded-lg shadow-sm flex items-center">
        <p className="text-white font-bold">Other Communities</p>
      </div>
    </div>
  );
};


