import React from "react";
const buttons = [
  "All",
  "Cats",
  "JavaScript",
  "Java",
  "Live",
  "Music",
  "Songs",
  "Vlogs",
  "Trending",
];

const Buttonlist = () => {
  return (
    <div className="sticky top-[70px] pt-4 pb-4 bg-white">
      {buttons.map((val, idx) => (
        <button
          key={idx}
          className="bg-gray-200 rounded-lg text-xl px-5 py-2 mx-3 font-semibold mt-3"
        >
          {val}
        </button>
      ))}
    </div>
  );
};

export default Buttonlist;
