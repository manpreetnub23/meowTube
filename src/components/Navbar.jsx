import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiVideoOn } from "react-icons/ci";
import Avatar from "react-avatar";
import { CiSearch } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "./utils/appSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const toggleHandler = () => {
    dispatch(toggleSidebar());
  };
  return (
    <>
      <div className="flex justify-between px-10 fixed w-[100%] bg-white z-10 top-0 py-4">
        <div className="flex items-center gap-10">
          <RxHamburgerMenu onClick={toggleHandler} size={"30px"} className="hover:cursor-pointer"/>
          <img
            width={"60px"}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxeVKKhcw5BVb33-sIFbVwBxpGvFjAORNkHA&usqp=CAU"
            alt=""
            className="rounded-xl"
          />
        </div>
        <div className="flex w-[40%] items-center">
          <div className="flex w-[100%]">
            <input
              type="text"
              className="w-full py-3 px-4 border border-gray-400 rounded-l-full outline-none"
              placeholder="Search"
            />
          </div>
          <button className="py-3 border border-gray-400 rounded-r-full px-4">
            <CiSearch size="24px" />
          </button>
        </div>
        <div />
        <div className="flex items-center gap-10">
          <IoIosNotificationsOutline size={"30px"} />
          <CiVideoOn size={"30px"} />
          <Avatar
            src="https://i.pinimg.com/564x/a7/5d/62/a75d62adddc8397c7820df76d8d05a30.jpg"
            size={50}
            round={true}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
