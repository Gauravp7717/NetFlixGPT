import { useDispatch } from "react-redux";
import { options } from "../utils/Links";
import { addToprated } from "../utils/movieSlice";
import { useEffect } from "react";

const useToprated = () => {
  const dispatch = useDispatch();
  const getTopMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      options
    );
    const json = await data.json();
    dispatch(addToprated(json.results));
  };

  useEffect(() => {
    getTopMovies();
  }, []);
};

export default useToprated;
