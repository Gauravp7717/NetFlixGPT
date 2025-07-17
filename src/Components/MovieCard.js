import React from "react";
import { IMG_CDN } from "../utils/Links";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 p-4">
      <img alt="" src={IMG_CDN + posterPath} />
    </div>
  );
};

export default MovieCard;
