import Link from "next/link";
const Hero = () => {
  return (
    <section className="bg-white lg:grid">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6  lg:px-8">
        <div className="mx-auto max-w-prose text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            All Your Digital Products{" "}
            <strong className="text-indigo-600"> Is One Click Away</strong>
          </h1>

          <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
            Start Exploring Courses of Tech Right Now!
          </p>

          <div className="mt-4 flex flex-col items-center gap-4 sm:mt-6 sm:flex-row sm:justify-center">
            <Link
              href="/get-started"
              className="inline-block w-[80%] rounded border bg-teal-600 px-5 py-3 text-center font-medium text-white shadow-sm transition-colors hover:bg-primary sm:w-auto"
            >
              Get Started
            </Link>

            <Link
              href="/learn-more"
              className="inline-block w-[80%] rounded border border-gray-200 px-5 py-3 text-center font-medium text-teal-600 shadow-sm transition-colors hover:bg-gray-50 hover:text-primary sm:w-auto"
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
