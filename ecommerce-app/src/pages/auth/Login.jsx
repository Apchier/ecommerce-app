import chairLogin from "../../../public/assets/images/loginchair.jpg"

export default function Login() {
  return (
    <div className="flex w-full h-screen justify-center">
      <div className="flex justify-center w-[1600px] h-screen border-2 border-black">
        <div className="flex items-center w-1/2 justify-center min-h-screen bg-gray-50 py-6 sm:py-12">
          <div className="relative py-3 w-[480px] text-center bg-white shadow-lg p-6">
            <div>
              <img src="/assets/logo.png" alt="Logo" className="mx-auto h-12 w-auto" />
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Get Started
              </h2>
              <p className="mt-2 text-center text-sm text-gray-600">
                Welcome to Filianta - Lets create your account
              </p>
            </div>
            <form className="mt-8 space-y-6">
              <div className="rounded-md shadow-sm">
                <div>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="Email"
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                  />
                </div>
                <div className="mt-2">
                  <input
                    name="password"
                    type="password"
                    required
                    placeholder="Password"
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
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
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Sign up
                </button>
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
