export default function Loading() {
  return (
    <section className="max-w-7xl mx-auto px-5 py-10 animate-pulse">
      <div className="mb-10 h-10 w-61.25 mx-auto animate-pulse rounded bg-gray-200" />
      {/* Product Details */}
      <div className="grid gap-10 lg:grid-cols-2">
        {/* Product Image */}
        <div className="w-full overflow-hidden rounded-xl">
          <div className="aspect-7/5 w-full animate-pulse bg-gray-200" />
        </div>
        {/* Product Information */}
        <div className="flex flex-col">
          {/* Category */}
          <div className="h-7 w-24 rounded-full bg-gray-200" />
          {/* Title */}
          <div className="mt-4 space-y-2">
            <div className="h-10 w-full rounded bg-gray-200" />
            <div className="h-10 w-2/3 rounded bg-gray-200" />
          </div>
          {/* Description */}
          <div className="mt-5 space-y-3">
            <div className="h-4 w-full rounded bg-gray-200" />
            <div className="h-4 w-full rounded bg-gray-200" />
            <div className="h-4 w-5/6 rounded bg-gray-200" />
          </div>
          {/* Price */}
          <div className="mt-8 flex items-center gap-4">
            <div className="h-10 w-28 rounded bg-gray-200" />
            <div className="h-6 w-24 rounded bg-gray-200" />
          </div>
          {/* Add Cart Button */}

          <div className="mt-10 h-14 w-full rounded-lg bg-gray-200" />
          {/* Course Includes */}
          <div className="mt-8 rounded-lg border p-5">
            <div className="h-6 w-48 rounded bg-gray-200" />

            <div className="mt-4 space-y-3">
              {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className="h-4 w-52 rounded bg-gray-200" />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Similar Products */}
      <section className="mt-16">
        {/* Title */}
        <div className="mb-6 h-8 w-56 rounded bg-gray-200" />

        {/* Products Grid */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="rounded-lg border p-1">
              {/* ProductItem Image */}
              <div className="h-40 sm:h-48 w-full rounded-t-lg bg-gray-200" />

              {/* ProductItem Content */}
              <div className="flex items-center justify-between rounded-b-lg bg-gray-50 p-3">
                <div className="space-y-2">
                  {/* Title */}
                  <div className="h-3 w-24 rounded bg-gray-200" />

                  {/* Category */}
                  <div className="h-3 w-16 rounded bg-gray-200" />
                </div>

                {/* Price */}
                <div className="h-5 w-16 rounded bg-gray-200" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
