import Link from "next/link";
const Hero = () => {
  return (
    <section className="bg-white lg:grid h-screen">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-prose text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            All Your Digital Products{" "}
            <strong className="text-indigo-600"> Is One Click Away</strong>
          </h1>

          <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
            Start Exploring State of the Art Assets Now!
          </p>

          <div className="mt-4 flex justify-center gap-4 sm:mt-6">
            <Link
              href="/get-started"
              className="inline-block rounded borde bg-teal-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-primary"
            >
              Get Started
            </Link>

            <Link
              href="/learn-more"
              className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-teal-600 hover:text-primary shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
