import { useDispatch } from "react-redux";
import { options } from "../utils/Links";
import { addPopular } from "../utils/movieSlice";
import { useEffect } from "react";

const usePopular = () => {
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options
    );
    const json = await data.json();
    dispatch(addPopular(json.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopular;
