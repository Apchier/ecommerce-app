import vector from "../../../../public/assets/images/Vector-Dashboard.png";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import UserTable from "../../../components/elements/UserTable";
import SecondaryStats from "../../../components/elements/SecondaryStats";


export default function Dashboard() {
  // Data dummy untuk tabel pengguna
  const users = [
    { id: 1, name: "John Doe", email: "john.doe@example.com", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com", status: "Inactive" },
    { id: 3, name: "Bob Johnson", email: "bob.johnson@example.com", status: "Active" },
    { id: 4, name: "Alice Brown", email: "alice.brown@example.com", status: "Active" },
  ];

  return (
    <div className="flex w-[1600px] min-h-screen container flex-col gap-10 text-text-gray">
      <div className="flex container bg-white rounded-2xl">
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
      <div className="flex w-full flex-col gap-10 text-text-gray p-10 bg-white rounded-2xl">
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

        {/* stats */}
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-figure text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
            <div className="stat-title">Total Likes</div>
            <div className="stat-value text-primary">25.6K</div>
            <div className="stat-desc">21% more than last month</div>
          </div>

          <div className="stat shadow-md">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <div className="stat-title">Page Views</div>
            <div className="stat-value text-secondary">2.6M</div>
            <div className="stat-desc">21% more than last month</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <div className="avatar online">
                <div className="w-16 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
            </div>
            <div className="stat-value">86%</div>
            <div className="stat-title">Tasks done</div>
            <div className="stat-desc text-secondary">31 tasks remaining</div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-6">
          <SecondaryStats
            dataCount={"-22"}
            percent={"-1%"}
            icon={<FaAngleDown />}
            desc={"Audience Change"}
            className={"bg-gradient-to-r from-red-400 to-pink-500"}
          />
          <SecondaryStats
            dataCount={"37"}
            percent={"+2%"}
            icon={<FaAngleUp />}
            desc={"Unsubscribes and Bounces"}
            className={"bg-gradient-to-r from-purple-400 to-indigo-500"}
          />
          <SecondaryStats
            dataCount={"8,778"}
            percent={"+6%"}
            icon={<FaAngleUp />}
            desc={"Opened"}
            className={"bg-gradient-to-r from-teal-400 to-blue-500"}
          />
          <SecondaryStats
            dataCount={"652"}
            percent={"+1%"}
            icon={<FaAngleUp />}
            desc={"Clicked"}
            className={"bg-gradient-to-r from-purple-500 to-blue-700"}
          />
        </div>

        {/* Tabel Pengguna */}
        <div className="overflow-x-auto rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">User Table</h2>
          <UserTable users={users} />
        </div>
      </div>
    </div>
  );
}
