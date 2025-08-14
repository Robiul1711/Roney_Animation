import React from "react";

const NavigationMenu = ({ activeIndex }) => {
  const navigate = [
    { id: 1, name: "Guide" },
    { id: 2, name: "Build" },
    { id: 3, name: "Deliver" },
    { id: 4, name: "Together" },
  ];

  // Determine active menu item
  const getActiveMenu = () => {
    if (activeIndex === 3) return 1; // Section4
    if (activeIndex === 4) return 2; // Section41
    if (activeIndex === 5) return 3; // Section42
    if (activeIndex === 6) return 4; // Section43
    return null; // When not in these sections, no active item
  };

  const activeMenu = getActiveMenu();

  // Only show when activeIndex is 3, 4, 5, or 6
  if (![3, 4, 5, 6].includes(activeIndex)) {
    return null; // Hide completely
  }

  return (
    <div className="px-8 fixed md:left-6 bottom-5 md:bottom-0 md:top-1/3 flex md:flex-col md:block justify-center items-center w-full md:w-auto gap-4 z-50 ">
      {navigate.map((item, i) => (
        <div
          key={item.id}
          className={`cursor-pointer text-xl md:text-[26px] font-[300] font-DmMono transition-colors duration-300 ${
            activeMenu === i + 1 ? "text-blue-500" : "text-white"
          }`}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default NavigationMenu;
