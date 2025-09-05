import Image from "next/image";

const GoogleReviewCardSkeleton = () => {
  return (
    <div className="h-full p-6 rounded-xl bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700 shadow-lg flex flex-col gap-4 animate-pulse">
      {/* Header skeleton */}
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-3">
          {/* Avatar placeholder */}
          <div className="w-11 h-11 rounded-full bg-gray-700" />

          {/* Name + timestamp */}
          <div>
            <div className="h-4 w-24 bg-gray-700 rounded mb-2" />
            <div className="h-3 w-16 bg-gray-700 rounded" />
          </div>
        </div>

        {/* Google logo placeholder */}
        <div className="w-8 h-8 bg-gray-700 rounded-full" />
      </div>

      {/* Rating skeleton */}
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-4 h-4 bg-gray-700 rounded" />
        ))}
      </div>

      {/* Review text skeleton */}
      <div className="space-y-2 flex-grow">
        <div className="h-3 w-full bg-gray-700 rounded" />
        <div className="h-3 w-5/6 bg-gray-700 rounded" />
        <div className="h-3 w-4/6 bg-gray-700 rounded" />
      </div>

      {/* Read more placeholder */}
      <div className="h-3 w-20 bg-gray-700 rounded" />
    </div>
  );
};

export default GoogleReviewCardSkeleton;
