// Enhanced GoogleReviewCard component
import Image from "next/image";

const GoogleReviewCard = ({ testimonial }) => {
  const {
    Name: author_name,
    Timestamp: relative_time_description,
    Rating: rating,
    Comments: text,
  } = testimonial;
  console.log("testimonial data in GoogleReviewCard:", testimonial);
  return (
    <div
      className="h-full p-6 rounded-xl bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700 
                 shadow-lg flex flex-col gap-4 transition-all duration-300 hover:border-cyan-400/40
                 hover:shadow-cyan-400/10 group"
    >
      {/* Header section */}
      <div className="flex justify-between items-start">
        {/* Reviewer Info */}
        <div className="flex items-center gap-3">
          <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-cyan-400/20 group-hover:border-cyan-400/40 transition-colors">
            <Image
              src="/images/avatar.png"
              alt={author_name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 44px, 44px"
            />
          </div>
          <div>
            <h4 className="font-semibold text-white capitalize">{author_name}</h4>
            <p className="text-gray-400 text-xs mt-0.5">
              {relative_time_description}
            </p>
          </div>
        </div>

        {/* Google logo */}
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center p-1.5">
          <svg viewBox="0 0 24 24" className="w-full h-full">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
        </div>
      </div>

      {/* Rating Stars */}
      <div className="flex items-center gap-1 text-yellow-400 text-lg">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className={i < rating ? "opacity-100" : "opacity-30"}>
            {i < rating ? "★" : "★"}
          </span>
        ))}
      </div>

      {/* Review Text */}
      <p className="text-gray-300 text-sm md:text-base leading-relaxed flex-grow line-clamp-5">
        "{text}"
      </p>

      {/* Read more indicator */}
      {text && text.length > 200 && (
        <div className="pt-2">
          <span className="text-cyan-400 text-xs font-medium inline-flex items-center">
            Read full review
            <svg
              className="w-3 h-3 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </span>
        </div>
      )}
    </div>
  );
};

export default GoogleReviewCard;
