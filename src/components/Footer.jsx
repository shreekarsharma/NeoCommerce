const Footer = () => {
  return (
    <>
      <footer className="bg-gray-50">
        <div className="mx-auto grid max-w-screen-xl gap-y-8 gap-x-12 px-4 py-10 md:grid-cols-2 xl:grid-cols-3 xl:px-10 xl:justify-items-center">
          <div className="max-w-sm">
            <div className="mb-6 flex h-12 items-center space-x-2">
              <span className="text-2xl font-bold">
                Neo<span className="text-blue-600">Commerce</span>.
              </span>
            </div>
            <div className="text-gray-500">
              Your trusted destination for seamless online shopping. We’re committed to quality, convenience, and customer satisfaction — bringing you the best products, fast delivery, and reliable service every step of the way.
            </div>
          </div>
          <div className="max-w-sm">
            <div className="mt-4 mb-2 font-medium xl:mb-4">Address</div>
            <div className="text-gray-500">
              35 Remida Heights, <br />
              45 Street, <br />
              South Caroline, US
            </div>
          </div>
          <div className="max-w-sm">
            <div className="mt-4 mb-2 font-medium xl:mb-4">Links</div>
            <nav aria-label="Footer Navigation" className="text-gray-500">
              <ul className="space-y-3">
                <li>
                  <a className="hover:text-blue-600 hover:underline" href="#">
                    Home
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue-600 hover:underline" href="#">
                    Sale
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue-600 hover:underline" href="#">
                    Cart
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue-600 hover:underline" href="#">
                    About
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue-600 hover:underline" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="bg-gray-100">
          <div className="mx-auto flex max-w-screen-xl flex-col gap-y-4 px-4 py-3 text-center text-gray-500 sm:flex-row sm:justify-between sm:text-left">
            <div className="">&copy; {new Date().getFullYear()} NeoCommerce | All Rights Reserved</div>
            <div className="">
              <a className="" href="#">
                Privacy Policy
              </a>
              <span className="mx-1">|</span>
              <a className="" href="#">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
