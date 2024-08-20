import chairLogin from "../../../public/assets/images/loginchair.jpg"
import ButtonLogin from "../../components/elements/ButtonLogin"

export default function Login() {
  return (
    <div className="flex w-full h-screen justify-center font-poppins">
      <div className="flex justify-center w-[1600px] min-h-screen">
        <div className="flex items-center w-1/2 justify-center min-h-screen bg-gray-50 py-6 sm:py-12">
          <div className="relative py-3 w-[450px] text-center bg-white shadow-xl p-10">
            <div>
              <img src="/assets/logo.png" alt="Logo" className="mx-auto h-12 w-auto" />
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Get Started
              </h2>
              <p className="mt-2 text-center text-sm text-gray-600">
                Welcome to Filianta - Lets create your account
              </p>
            </div>
            <form className="flex flex-col py-6 gap-4">
              <div className="flex flex-col gap-4 rounded-md shadow-sm">
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
              <div className="flex items-center justify-between">
                <div className="text-sm">
                  <a href="#" className="font-medium text-green-600 hover:text-green-500">
                    Forgot your password?
                  </a>
                </div>
              </div>
              <div>
                <ButtonLogin text={"Login"}/>
              </div>
            </form>
            <div className="mt-4 text-center text-sm text-gray-600">
              Already have an account?{' '}
              <a href="#" className="font-medium text-green-600 hover:text-green-500">
                Log in
              </a>
            </div>
          </div>
        </div>
        <div className="w-1/2 bg-cover" style={{ backgroundImage: `url(${chairLogin})` }}></div>
      </div>
    </div>
  )
}
