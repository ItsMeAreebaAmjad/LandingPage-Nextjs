export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-300 via-pink-200 to-orange-300 flex justify-center items-center p-6">
      <div className="w-full max-w-5xl bg-white p-8 rounded-3xl shadow-2xl relative overflow-hidden">
        <nav className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-extrabold text-gray-900 flex items-center">
            <span className="text-pink-500">H</span>appy<span className="text-yellow-500">Home</span>
          </h1>
          <ul className="flex gap-6 text-gray-700 font-semibold">
            <li className="cursor-pointer hover:text-pink-500">Home</li>
            <li className="cursor-pointer hover:text-pink-500">About</li>
            <li className="cursor-pointer hover:text-pink-500">Blogs</li>
            <li className="cursor-pointer hover:text-pink-500">Contact</li>
            <li className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Try now</li>
          </ul>
        </nav>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Stay <span className="text-blue-600">Productive</span> & <span className="text-pink-600">Efficient</span>
            </h2>
            <p className="text-gray-600 mt-4">
              Discover the best strategies to enhance your productivity while working remotely.
            </p>
            <div className="mt-6 flex justify-center md:justify-start gap-4">
              <button className="bg-pink-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-pink-700">Get Tips</button>
              <button className="flex items-center gap-2 border border-gray-300 px-6 py-3 rounded-lg font-medium hover:shadow-md">
                <span className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                  ▶
                </span>
                Learn More
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img src="/1.png" alt="Illustration" className="w-full rounded-xl shadow-md" />
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="font-semibold text-lg text-pink-600">Work-Life Balance</h3>
            <p className="text-gray-600 mt-2">
              Flexible schedules allow remote workers to create a better balance between work and personal life.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="font-semibold text-lg text-blue-600">Work Anywhere</h3>
            <p className="text-gray-600 mt-2">
              Remote jobs open opportunities beyond geographical limitations, expanding career options.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="font-semibold text-lg text-yellow-600">Improved Inclusivity</h3>
            <p className="text-gray-600 mt-2">
              Companies can embrace diversity by hiring talented individuals from various backgrounds globally.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
