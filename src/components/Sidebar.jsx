import React from "react";
import { CiHome } from "react-icons/ci";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { IoIosTrendingUp } from "react-icons/io";
import { CiMusicNote1 } from "react-icons/ci";
import { MdOutlineLocalMovies } from "react-icons/md";
import { SiYoutubegaming } from "react-icons/si";
import { CiTrophy } from "react-icons/ci";
import { useSelector } from "react-redux";
const sidebarItems = [
  {
    icons: <CiHome size={"35px"} />,
    title: "Home",
  },
  {
    icons: <SiYoutubeshorts size={"35px"} />,
    title: "Shorts",
  },
  {
    icons: <MdOutlineSubscriptions size={"35px"} />,
    title: "Subscription",
  },
  {
    icons: <IoIosTrendingUp size={"35px"} />,
    title: "Trending",
  },
  {
    icons: <CiMusicNote1 size={"35px"} />,
    title: "Music",
  },
  {
    icons: <MdOutlineLocalMovies size={"35px"} />,
    title: "Movies",
  },
  {
    icons: <SiYoutubegaming size={"35px"} />,
    title: "Gaming",
  },
  {
    icons: <CiTrophy size={"35px"} />,
    title: "Sports",
  },
];
const Sidebar = () => {
  const open = useSelector((state) => state.app.open);
  return (
    <div className="overflow-y-auto overflow-x-hidden sticky top-[100px] left-0 w-auto h-[88vh] mt-4">
      {sidebarItems.map((item, idx) => {
        return (
          <div key={idx} className="flex gap-10 items-center p-3 ml-6">
            {item.icons}
            <p className={`text-xl ${open ? "" : "hidden"}`}>{item.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
