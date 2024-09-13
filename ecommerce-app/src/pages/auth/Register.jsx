import chairLogin from "../../../public/assets/images/loginchair.jpg"
import ButtonLogin from "../../components/elements/ButtonPrimmary"
import logo from "../../../public/assets/images/logo.png"
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import InputGroup from "../../components/fragments/InputGroup";

export default function Register() {
  return (
    <div className="flex w-full h-screen justify-center font-poppins">
      <div className="flex justify-center w-[1600px] min-h-screen">
        <div className="relative flex items-center w-1/2 justify-center min-h-screen bg-gray-50 sm:py-12">
          <Link to={"/"} className="absolute flex justify-center items-center top-6 left-6 w-[40px] aspect-square border-2 text-gray-500 border-gray-500 rounded-full shadow-md">
            <FiArrowLeft size={25} />
          </Link>
          <div className="relative py-8 w-[450px] text-center bg-white shadow-lg p-10 rounded-xl">
            <div className="relative">
              <img src={logo} alt="Logo" className="mx-auto w-[125px] aspect-square" />
              <h2 className="text-center text-3xl font-bold text-gray-700">
                Sign up here
              </h2>
              <p className="mt-2 text-center text-sm text-gray-600">
                Please enter your details sign up
              </p>
            </div>
            <form className="flex flex-col py-6 gap-2">
              <div className="flex flex-col gap-4 rounded-md">
                <div className="flex flex-col items-start gap-3">
                  <InputGroup
                    htmlFor={"Email"}
                    label={"Email"}
                    type={"email"}
                    name={"email"}
                    placeholder={"Email"}
                    required
                  />
                </div>
                <div className="flex flex-col items-start gap-3">
                  <label htmlFor="email" className="text-gray-600">Password</label>
                  <InputGroup
                    htmlFor={"Password"}
                    label={"Password"}
                    type={"password"}
                    name={"password"}
                    placeholder={"Password"}
                    required
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
              Already have an account?{' '}
              <Link to={"/auth/login"} className="font-medium text-green-600 hover:text-green-500">
                Login
              </Link>
            </div>
          </div>
        </div>
        <div className="w-1/2 bg-cover flex flex-col gap-2 p-20" style={{ backgroundImage: `url(${chairLogin})` }}>
          <span className="text-xl text-white drop-shadow-md mt-40">Lets create something <br /> beautiful. Start decorating your</span>
          <h1 className="text-8xl font-bold text-white drop-shadow-md">Home</h1>
        </div>
      </div>
    </div>
  )
}
