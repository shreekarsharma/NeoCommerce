const Register = () => {
  return (
    <>
      <div className="bg-white font-sans text-gray-900">
        <div className="mx-auto w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
          <div className="mx-2 py-12 text-center md:mx-auto md:w-2/3 md:py-20">
            <h1 className="mb-4 font-black text-3xl sm:text-4xl">
              Sign up to NeoCommerce
            </h1>
          </div>
        </div>

        <div className="md:w-2/3 mx-auto w-full pb-16 sm:max-w-screen-sm md:max-w-screen-md lg:w-1/3 lg:max-w-screen-lg xl:max-w-screen-xl">
          <form className="shadow-lg mb-4 rounded-lg border border-gray-100 py-10 px-8">
            <div className="mb-4">
              <label className="mb-2 block text-sm font-bold" htmlFor="fullname">
                Full Name
              </label>
              <input
                className="shadow-sm w-full cursor-text appearance-none rounded border border-gray-300 py-2 px-3 leading-tight outline-none ring-blue-500 focus:ring"
                id="fullname"
                type="text"
                placeholder="John Doe"
                required=""
              />
              <span className="my-2 block"></span>
            </div>
            <div className="mb-4">
              <label className="mb-2 block text-sm font-bold" htmlFor="email2">
                E-mail
              </label>
              <input
                className="shadow-sm w-full cursor-text appearance-none rounded border border-gray-300 py-2 px-3 leading-tight outline-none ring-blue-500 focus:ring"
                id="email2"
                type="email"
                placeholder="abc@xyz.com"
                required=""
              />
              <span className="my-2 block"></span>
            </div>
            <div className="mb-4">
              <label className="mb-2 block text-sm font-bold" htmlFor="phone">
                Phone
              </label>
              <input
                className="shadow-sm w-full cursor-text appearance-none rounded border border-gray-300 py-2 px-3 leading-tight outline-none ring-blue-500 focus:ring"
                id="phone"
                type="phone"
                placeholder="Phone"
                required=""
              />
              <span className="my-2 block"></span>
            </div>
            <div className="mb-4">
              <label className="mb-2 block text-sm font-bold" htmlFor="password1">
                Password
              </label>
              <input
                className="shadow-sm w-full cursor-text appearance-none rounded border border-gray-300 py-2 px-3 leading-tight outline-none ring-blue-500 focus:ring"
                id="password1"
                type="password"
                placeholder="******************"
                required=""
              />
            </div>
            <div className="mb-4">
              <label className="mb-2 block text-sm font-bold" htmlFor="password2">
                Confirm Password
              </label>
              <input
                className="shadow-sm w-full cursor-text appearance-none rounded border border-gray-300 py-2 px-3 leading-tight outline-none ring-blue-500 focus:ring"
                id="password2"
                type="password"
                placeholder="******************"
                required=""
              />
            </div>
            <div className="mb-6">
              <label className="mb-2 flex text-sm">
                <input
                  type="checkbox"
                  name="accept"
                  className="mr-2"
                  required=""
                />
                <div className="text-gray-800">
                  <p className="">
                    I accept the
                    <a
                      href="#"
                      className="cursor-pointer text-blue-500 underline"
                    >
                      terms of use
                    </a>
                    and
                    <a
                      href="#"
                      className="cursor-pointer text-blue-500 underline"
                    >
                      privacy policy
                    </a>
                  </p>
                </div>
              </label>
            </div>
            <div className="flex items-center">
              <div className="flex-1"></div>
              <button
                className="cursor-pointer rounded bg-blue-600 py-2 px-8 text-center text-lg font-bold  text-white"
                type="submit"
              >
                Create account
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Register;
