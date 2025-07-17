import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondoryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className=" bg-black">
      <div className="-mt-52 relative z-20">
        <MovieList title={"Now playing"} movies={movies.nowPlay} />
        <MovieList title={"Top Rated"} movies={movies.toprated} />
        <MovieList title={"Popular"} movies={movies.Popular} />
        <MovieList title={"Upcoming"} movies={movies.upcoming} />
      </div>
    </div>
  );
};

export default SecondoryContainer;
