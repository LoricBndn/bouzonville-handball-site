export default function Loading() {
  return (
    <div className="bg-background min-h-screen px-4 sm:px-6 lg:px-8 py-12">
      {/* HERO SKELETON */}
      <div className="relative h-[400px] bg-gray-800/40 rounded-lg overflow-hidden mb-12 animate-pulse">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-700/50 to-gray-800/70" />
        <div className="absolute bottom-10 left-6 space-y-4">
          <div className="h-8 w-64 bg-gray-600 rounded"></div>
          <div className="h-5 w-40 bg-gray-600 rounded"></div>
          <div className="h-4 w-80 bg-gray-700 rounded"></div>
        </div>
      </div>

      {/* ABOUT SKELETON */}
      <div className="bg-gray-800/40 rounded-lg p-8 mb-12 animate-pulse">
        <div className="h-6 w-56 bg-gray-600 rounded mx-auto mb-4"></div>
        <div className="h-4 w-40 bg-gray-700 rounded mx-auto mb-6"></div>
        <div className="h-4 w-3/4 bg-gray-700 rounded mx-auto mb-2"></div>
        <div className="h-4 w-2/3 bg-gray-700 rounded mx-auto mb-8"></div>
        <div className="h-10 w-44 bg-gray-600 rounded mx-auto"></div>
      </div>

      {/* STATS SKELETON */}
      <div className="grid sm:grid-cols-3 gap-6 mb-12">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="bg-gray-800/40 rounded-lg p-6 text-center animate-pulse"
          >
            <div className="h-8 w-16 bg-gray-600 rounded mx-auto mb-3"></div>
            <div className="h-4 w-24 bg-gray-700 rounded mx-auto"></div>
          </div>
        ))}
      </div>

      {/* HIGHLIGHTS SKELETON */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="bg-gray-800/40 rounded-lg p-6 text-center animate-pulse"
          >
            <div className="h-5 w-28 bg-gray-600 rounded mx-auto mb-3"></div>
            <div className="h-4 w-32 bg-gray-700 rounded mx-auto"></div>
          </div>
        ))}
      </div>

      {/* ACTIVITIES SKELETON */}
      <div className="grid lg:grid-cols-3 gap-8 mb-12">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="bg-gray-800/40 rounded-lg overflow-hidden animate-pulse">
            <div className="h-48 bg-gray-700"></div>
            <div className="p-6 space-y-3">
              <div className="h-5 w-40 bg-gray-600 rounded"></div>
              <div className="h-4 w-3/4 bg-gray-700 rounded"></div>
              <div className="h-4 w-2/3 bg-gray-700 rounded"></div>
              <div className="flex justify-between pt-2">
                <div className="h-3 w-20 bg-gray-600 rounded"></div>
                <div className="h-3 w-16 bg-gray-600 rounded"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA SKELETON */}
      <div className="bg-gradient-to-r from-primary to-secondary rounded-lg shadow-lg p-8 text-center text-light animate-pulse">
        <div className="h-6 w-64 bg-white/40 rounded mx-auto mb-4"></div>
        <div className="h-4 w-80 bg-white/30 rounded mx-auto mb-8"></div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <div className="h-10 w-40 bg-white/40 rounded"></div>
          <div className="h-10 w-40 bg-white/40 rounded"></div>
        </div>
      </div>
    </div>
  );
}
