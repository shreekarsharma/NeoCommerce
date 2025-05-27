const About = () => {
  return (
    <>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="grid grid-cols-1">
            <div className="md:pt-8 lg:flex lg:flex-col lg:justify-center">
              <p className="text-center font-bold text-sky-600 md:text-left">
                Who we are
              </p>

              <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">
                Operational since 2000
              </h1>

              <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
                we’ve built a legacy rooted in trust, service, and innovation.
                From our humble beginnings as a local retailer to becoming a
                dynamic online marketplace, our commitment has always remained
                the same: putting customers first. Over the decades, we’ve
                adapted to changing times while staying true to our values —
                reliability, quality, and genuine care.
              </p>
              <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
                Our long-standing experience helps us serve you better,
                combining tradition with the efficiency of modern eCommerce.
              </p>
            </div>
            <div className="md:col-span-2">
              <h2 className="mb-2 text-center text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4 md:text-left">
                About NeoCommerce
              </h2>

              <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
                NeoCommerce is the next step in our evolution — a future-ready platform designed to make shopping smarter, simpler, and more enjoyable. Whether you’re browsing from your phone or your laptop, we bring you a seamless experience backed by decades of operational expertise.
              </p>
              <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
                We focus on curated products, reliable service, and intuitive design — all to ensure that every purchase feels effortless. At NeoCommerce, we don’t just sell — we deliver convenience, value, and trust.


              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
