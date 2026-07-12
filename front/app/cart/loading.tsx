export default function Loading() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      <div className="mb-8 h-10 w-64 animate-pulse rounded-lg bg-gray-200" />

      <div className="space-y-5">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="flex items-center justify-between rounded-lg border p-5"
          >
            <div className="flex items-center gap-5">
              {/* Image skeleton */}
              <div className="h-24 w-24 animate-pulse rounded-lg bg-gray-200" />

              <div className="space-y-3">
                {/* Title */}
                <div className="h-5 w-48 animate-pulse rounded bg-gray-200" />

                {/* Quantity */}
                <div className="h-4 w-24 animate-pulse rounded bg-gray-200" />

                {/* Price */}
                <div className="h-4 w-20 animate-pulse rounded bg-gray-200" />
              </div>
            </div>

            {/* Total price */}
            <div className="h-6 w-20 animate-pulse rounded bg-gray-200" />
          </div>
        ))}
      </div>

      {/* Bottom total */}
      <div className="mt-10 flex justify-between border-t pt-6">
        <div className="h-8 w-32 animate-pulse rounded bg-gray-200" />

        <div className="h-8 w-24 animate-pulse rounded bg-gray-200" />
      </div>
    </main>
  );
}
