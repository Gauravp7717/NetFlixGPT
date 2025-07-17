import { useDispatch } from "react-redux";
import { options } from "../utils/Links";
import { addTrailer } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieID) => {
  const dispatch = useDispatch();
  const getVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieID}/videos?language=en-US`,
      options
    );

    const json = await data.json();
    // console.log(json);

    const alltrailer = json.results.filter((video) => video.type == "Trailer");
    const trailer = alltrailer.length ? alltrailer[0] : json.results[0];
    // console.log(trailer);
    dispatch(addTrailer(trailer));
  };

  useEffect(() => {
    if (!movieID) {
      console.log("movieId is undefined or null");
      return;
    }
    console.log("Fetching trailer for movieId:", movieID);
    getVideo();
  }, [movieID]); // ✅ Add movieId as a dependency
};

export default useMovieTrailer;
