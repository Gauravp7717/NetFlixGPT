import React from "react";

const VideoTittle = ({ tittle, overview }) => {
  return (
    <div className="pt-[21%] px-24 w-screen aspect-video absolute text-white bg-gradient-to-r from-black">
      <h1 className=" text-6xl font-bold">{tittle}</h1>
      <p className="text-lg py-6 w-1/3">{overview}</p>
      <div>
        <button className="bg-white py-2 rounded-md text-xl px-12  text-black hover:bg-opacity-80">
          ▶️ play
        </button>
        <button className="bg-slate-500 mx-4  py-2 rounded-md text-xl px-12 bg-opacity-80 text-black ">
          more info
        </button>
      </div>
    </div>
  );
};

export default VideoTittle;
