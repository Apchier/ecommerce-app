import chairLogin from "../../../public/assets/images/loginchair.jpg"
import ButtonLogin from "../../components/elements/ButtonLogin"
import logo from "../../../public/assets/images/logo.png"
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex w-full h-screen justify-center font-poppins">
      <div className="flex justify-center w-[1600px] min-h-screen">
        <div className="relative flex items-center w-1/2 justify-center min-h-screen bg-gray-50 sm:py-12">
          <Link to={"/"} className="absolute flex justify-center items-center top-5 left-5 w-[40px] aspect-square border-2 border-gray-600 rounded-full">
            <FiArrowLeft size={25} />
          </Link>
          <div className="relative py-8 w-[450px] text-center bg-white shadow-lg p-10 rounded-xl">
            <div className="relative">
              <img src={logo} alt="Logo" className="mx-auto w-[125px] aspect-square" />
              <h2 className="text-center text-3xl font-bold text-gray-700">
                Welcome back
              </h2>
              <p className="mt-2 text-center text-sm text-gray-600">
                Please enter your details sign in
              </p>
            </div>
            <form className="flex flex-col py-6 gap-2">
              <div className="flex flex-col gap-4 rounded-md">
                <div className="flex flex-col items-start gap-3">
                  <label htmlFor="email" className="text-gray-600">Email</label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="Email"
                    className="appearance-none rounded-md relative block w-full p-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                  />
                </div>
                <div className="flex flex-col items-start gap-3">
                  <label htmlFor="email" className="text-gray-600">Password</label>
                  <input
                    name="password"
                    type="password"
                    required
                    placeholder="Password"
                    className="appearance-none rounded-md relative block w-full p-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                  />
                </div>
              </div>
              <div className="flex items-center justify-betwee">
                <div className="text-sm">
                  <a href="#" className="font-medium text-green-600 hover:text-green-500">
                    Forgot your password?
                  </a>
                </div>
              </div>
              <div className="mt-4">
                <ButtonLogin text={"Login"} />
              </div>
            </form>
            <div className="mt-4 text-center text-sm text-gray-600">
              Dont have an account?{' '}
              <a href="#" className="font-medium text-green-600 hover:text-green-500">
                Create account
              </a>
            </div>
          </div>
        </div>
        <div className="w-1/2 bg-cover" style={{ backgroundImage: `url(${chairLogin})` }}></div>
      </div>
    </div>
  )
}
