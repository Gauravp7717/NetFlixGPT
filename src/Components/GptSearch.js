import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BG_URL } from "../utils/Links";

const GptSearch = () => {
  return (
    <div>
      <div className=" absolute -z-10">
        <img className=" opacity-150 " src={BG_URL} alt="bg" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;
