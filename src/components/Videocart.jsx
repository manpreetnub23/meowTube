import React from "react";
import Avatar from "react-avatar";

const Videocart = ({ val }) => {
  return (
    <div className="w-95 cursor-pointer">
      <img
        className="rounded-xl w-11/12 mt-20"
        src={val.snippet.thumbnails.medium.url}
        alt="thumbnail"
      />
      <div className="flex items-center mt-3">
        <Avatar
          src="https://i.pinimg.com/564x/a7/5d/62/a75d62adddc8397c7820df76d8d05a30.jpg"
          size={50}
          round={true}
        />
        <div className="ml-5 2-11/12">
          <h1 className="font-bold">{val.snippet.title}.</h1>
          <p className="text-sm text-gray-500">{val.snippet.channelTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default Videocart;
