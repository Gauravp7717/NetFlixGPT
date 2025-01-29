import React, { useEffect } from "react";
import Header from "./Header";
import { options } from "../utils/Links";

const Browse = () => {
  const getRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&page=1&sort_by=popularity.desc",
      options
    );
    const json = await data.json();
    console.log(json);
  };

  useEffect(() => {
    getRatedMovies();
  }, []);
  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
