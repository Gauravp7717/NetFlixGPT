import React from "react";
import VideoTittle from "./VideoTittle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";
// import { original } from "@reduxjs/toolkit";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlay);
  if (movies == null) return;
  const mainMovie = movies[0];
  // console.log("the main", mainMovie);
  const { original_title, overview } = mainMovie;
  const { id } = mainMovie;
  // console.log(id);
  return (
    <div>
      {/* the video and video background */}
      <VideoTittle tittle={original_title} overview={overview} />
      <VideoBackground movieID={id} />
    </div>
  );
};

export default MainContainer;
