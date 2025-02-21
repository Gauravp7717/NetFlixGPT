import { useDispatch } from "react-redux";
import { options } from "../utils/Links";
import { addMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlay = () => {
  const dispatch = useDispatch();
  const getRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&page=1&sort_by=popularity.desc",
      options
    );
    const json = await data.json();
    // console.log(json);
    dispatch(addMovies(json.results));
  };

  useEffect(() => {
    getRatedMovies();
  }, []);
};

export default useNowPlay;
