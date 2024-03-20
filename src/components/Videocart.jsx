import axios from "axios";

import React, { useState } from "react";
import Avatar from "react-avatar";
import API_KEY from "../constant/youtube";
import { useEffect } from "react";

const Videocart = ({ val }) => {
  const [ytIcon, setYtIcon] = useState("");
  const getYoutubeChannelName = async () => {
    try {
      const res = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${val.snippet.channelId}&key=${API_KEY}`
      );
      setYtIcon(res.data.items[0].snippet.thumbnails.high.url);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getYoutubeChannelName();
  }, []);
  return (
    <div className="w-95 cursor-pointer">
      <img
        className="rounded-xl w-11/12 mt-20"
        src={val.snippet.thumbnails.medium.url}
        alt="thumbnail"
      />
      <div className="flex items-center mt-3">
        <Avatar src={ytIcon} size={50} round={true} />
        <div className="ml-5 2-11/12">
          <h1 className="font-bold">{val.snippet.title}.</h1>
          <p className="text-sm text-gray-500">{val.snippet.channelTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default Videocart;
