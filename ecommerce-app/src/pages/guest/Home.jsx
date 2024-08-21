import heroImg from "../../../public/assets/images/hero-home.jpg"
import kitchen from "../../../public/assets/images/kitchen.jpg"
import diningroom from "../../../public/assets/images/dining-room.jpg"
import livingroom from "../../../public/assets/images/living-room.jpg"
import bench from "../../../public/assets/images/bench.jpg"
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { GoPlus } from "react-icons/go";
import { FaPlus } from "react-icons/fa";
import { MdArrowRightAlt } from "react-icons/md";
import { Link } from "react-router-dom"


export default function Home() {
  return (
    <div className="flex flex-col w-[1600px] h-auto rounded-3xl gap-4">
      <div className="w-full flex flex-col justify-center items-center gap-10 h-[700px] border-4 border-white bg-cover rounded-3xl" style={{ backgroundImage: `url(${heroImg})` }}>
        <h1 className="w-[1000px] text-center text-5xl font-bold text-white drop-shadow-md">Transform your space with modern furniture that combines style and comfort in perfect harmony</h1>
        <div className="flex justify-center items-center gap-4 w-[650px] bg-white p-2 rounded-2xl shadow-md">
          <input type="text" placeholder="Find your furniture..." className="text-lg text-gray p-1 w-[600px] outline-none" />
          <HiMiniMagnifyingGlass className="text-3xl text-gray-400" />
        </div>
      </div>

      <div className="flex w-full justify-between gap-4">
        {/* card */}
        <div className="w-3/4 flex justify-center items-center gap-4">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md">
            <a href="#">
              <img className="rounded-t-lg" src={kitchen} alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-500">Kitchen set</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. In sapiente adipisci fugit! In soluta, explicabo iste doloremque.</p>
              <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-gray rounded-lg shadow-lg bg-gray-100">
                See more
              </a>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md">
            <a href="#">
              <img className="rounded-t-lg" src={diningroom} alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-500">Dining room set</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. In sapiente adipisci fugit! In soluta, explicabo iste doloremque.</p>
              <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-gray rounded-lg shadow-lg bg-gray-100">
                See more
              </a>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md">
            <a href="#">
              <img className="rounded-t-lg" src={livingroom} alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-500">Living room set</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. In sapiente adipisci fugit! In soluta, explicabo iste doloremque.</p>
              <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-gray rounded-lg shadow-lg bg-gray-100">
                See more
              </a>
            </div>
          </div>
        </div>
        <div className="w-1/4 flex flex-col gap-4 justify-center items-center rounded-lg">
          <div className="flex flex-col w-full border-2 border-gray-300 bg-[#f7f7f8] p-6 gap-1 text-gray-500 rounded-2xl shadow-md">
            <div className="flex w-full justify-between items-center">
              <button className="flex justify-center items-center gap-3 bg-[#f7f7f8] font-semibold text-xl px-3 py-2 border-2 rounded-2xl">
                explore
                <GoPlus />
              </button>
              <button className="flex justify-center items-center w-[40px] h-[40px] p-2 rounded-full text-gray-400 border-2 bg-[#f7f7f8] shadow-md">
                <FaPlus />
              </button>
            </div>
            <div className="flex flex-col items-start text-md">
              <p>Build your home</p>
              <span className="font-semibold">LIKE YOU WANTED</span>
            </div>
            <p className="text-2xl font-bold my-3">High quality furniture <br /> modern inside</p>
            <p className="w-full flex justify-end underline underline-offset-2 cursor-pointer">Lean more</p>
          </div>
          <div className="flex flex-col w-full h-full justify-between items-center bg-cover shadow-md border-4 border-white rounded-2xl p-6" style={{ backgroundImage: `url(${bench})` }}>
            <div className="w-full flex justify-end">
              <button className="flex justify-center items-center w-[50px] h-[50px] p-2 rounded-full text-gray-600 font-semibold border-2 bg-[#f7f7f8] shadow-md">126</button>
            </div>
            <div className="w-full flex justify-start">
              <Link to={"/shopping-cart"} className="flex justify-center items-center gap-3 bg-[#f7f7f8] font-semibold text-md px-3 py-2 rounded-2xl shadow-md outline-none">
                See All Products
                <MdArrowRightAlt/>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


