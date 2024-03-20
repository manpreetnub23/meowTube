import axios from "axios";
import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../constant/youtube";
import Videocart from "./Videocart";
import { Link } from "react-router-dom";

const Videocontainer = () => {
  const [video, setVideo] = useState([]);
  const fetchYoutubeVideo = async () => {
    try {
      const res = await axios.get(`${YOUTUBE_VIDEO_API}`);
      console.log(res.data);
      setVideo(res?.data?.items);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchYoutubeVideo();
  }, []);
  return (
    <div className="mt-4 ml-3 grid grid-cols-3 gap-15">
      {/* this is a video container */}
      {video.map((val) => {
        return (
          <Link key={val.id} to={`/watch?v=${val.id}`}>
            <Videocart val={val} />
          </Link>
        );
      })}
    </div>
  );
};

export default Videocontainer;
