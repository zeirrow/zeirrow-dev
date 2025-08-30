import { useRef, useEffect } from "react";

const TabCarousel = ({ tabs = [], onTabChange, activeTab, setActiveTab }) => {
  const carouselRef = useRef(null);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (onTabChange) {
      onTabChange(tab);
    }
  };

  // Optional: Auto-scroll to make active tab visible
  useEffect(() => {
    if (carouselRef.current) {
      const activeElement = carouselRef.current.querySelector(
        '[data-active="true"]'
      );
      if (activeElement) {
        activeElement.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  }, [activeTab]);

  return (
  <div className="relative max-w-4xl mx-auto mb-6">
    {/* Scrollable Tabs */}
    <div
      ref={carouselRef}
      className="flex overflow-x-auto scrollbar-hide space-x-2 pb-3 px-8 mb-6 max-w-4xl mx-auto"
    >
      {tabs.map((tab) => (
        <button
          key={tab}
          data-active={activeTab === tab}
          onClick={() => handleTabClick(tab)}
          className={`flex-shrink-0 px-4 py-2 rounded-full font-medium transition-all duration-300 capitalize ${
            activeTab === tab
              ? "bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-900"
              : "bg-gray-800 text-gray-100 hover:bg-gray-300 hover:text-gray-900"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>

    {/* Left Fade */}
    <div className="pointer-events-none absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-[#101828] to-transparent" />
    {/* Right Fade */}
    <div className="pointer-events-none absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-[#101828] to-transparent" />
  </div>
);
};

export default TabCarousel;
