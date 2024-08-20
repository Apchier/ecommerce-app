import vector from "../../../../public/assets/images/Vector-Dashboard.png";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { Line } from 'react-chartjs-2';


export default function Dashboard() {

  const data = {
    labels: ['', '', '', '', '', '', ''],
    datasets: [
      {
        data: [22, 25, 20, 30, 25, 20, 22],
        fill: false,
        borderColor: '#fff',
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        display: false,
      },
      x: {
        display: false,
      },
    },
    elements: {
      line: {
        borderWidth: 2,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  // Data dummy untuk tabel pengguna
  const users = [
    { id: 1, name: "John Doe", email: "john.doe@example.com", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com", status: "Inactive" },
    { id: 3, name: "Bob Johnson", email: "bob.johnson@example.com", status: "Active" },
    { id: 4, name: "Alice Brown", email: "alice.brown@example.com", status: "Active" },
  ];

  return (
    <div className="flex w-[1600px] min-h-screen container flex-col gap-10 text-text-gray">
      <div className="flex container bg-white rounded-2xl h-1/2">
        <div className="w-full flex justify-around items-center">
          <div className="w-1/2">
            <img src={vector} alt="vector" />
          </div>
          <div className="flex flex-col w-1/2 gap-4 ">
            <span className="text-5xl font-bold">Good Evening ,<span className="text-blue-600 ml-5">Admin !</span></span>
            <span className="w-10/12">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid placeat deleniti, delectus dolores omnis qui maxime quos quod repellendus minima.</span>
            <div className="flex">
              <button className="bg-blue-600 text-white w-[100px] px-4 py-2 rounded-md">Lorem.</button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full h-screen flex-col gap-10 text-text-gray p-10 bg-white rounded-2xl">
        <div className="flex justify-between items-center">
          <span className="text-3xl font-bold">Your Report</span>
          <select
            name=""
            id=""
            className="bg-white border border-gray-300 shadow-lg p-2 rounded-md outline-none"
          >
            <option value="">Past 7 days</option>
            <option value="">Past 14 days</option>
            <option value="">Past 30 days</option>
            <option value="">Past 90 days</option>
          </select>
        </div>
        <p className="text-gray-600">
          See stats for your latest Campaign, and promote them to grow your audience.
        </p>
        <div className="grid grid-cols-4 gap-6">
          <div className="p-6 bg-gradient-to-r from-red-400 to-pink-500 rounded-2xl shadow-lg relative">
            <div className="flex justify-between items-center">
              <span className="text-white text-4xl font-bold">-22</span>
              <span className="flex items-center text-white text-sm">
                -1% <FaAngleDown className="ml-1" />
              </span>
            </div>
            <p className="text-white mt-4">Audience Change</p>
            <div className="h-12 mt-4">
              {/* <Line data={data} options={options} /> */}
            </div>
          </div>
          <div className="p-6 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-2xl shadow-lg relative">
            <div className="flex justify-between items-center">
              <span className="text-white text-4xl font-bold">37</span>
              <span className="flex items-center text-white text-sm">
                +2% <FaAngleUp className="ml-1" />
              </span>
            </div>
            <p className="text-white mt-4">Unsubscribes and Bounces</p>
            <div className="h-12 mt-4">
              {/* <Line data={data} options={options} /> */}
            </div>
          </div>
          <div className="p-6 bg-gradient-to-r from-teal-400 to-blue-500 rounded-2xl shadow-lg relative">
            <div className="flex justify-between items-center">
              <span className="text-white text-4xl font-bold">8,778</span>
              <span className="flex items-center text-white text-sm">
                +6% <FaAngleUp className="ml-1" />
              </span>
            </div>
            <p className="text-white mt-4">Opened</p>
            <div className="h-12 mt-4">
              {/* <Line data={data} options={options} /> */}
            </div>
          </div>
          <div className="p-6 bg-gradient-to-r from-purple-500 to-blue-700 rounded-2xl shadow-lg relative">
            <div className="flex justify-between items-center">
              <span className="text-white text-4xl font-bold">652</span>
              <span className="flex items-center text-white text-sm">
                +1% <FaAngleUp className="ml-1" />
              </span>
            </div>
            <p className="text-white mt-4">Clicked</p>
            <div className="h-12 mt-4">
              {/* <Line data={data} options={options} /> */}
            </div>
          </div>
        </div>
        
        {/* Tabel Pengguna */}
        <div className="overflow-x-auto rounded-2xl shadow-lg mt-10 p-6">
          <h2 className="text-2xl font-bold mb-4">User Table</h2>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.map((user) => (
                <tr key={user.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
