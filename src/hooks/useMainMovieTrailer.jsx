import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVid } from "../utils/movieSlice";
import { useDispatch } from "react-redux";

const useMainMovieTrailer = (id) => {
  const dispatch = useDispatch();

  const getMainMovieTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + id + "/videos?",
      API_OPTIONS
    );
    const json = await data?.json();
    const trailers = json?.results.filter(
      (result) => result.type === "Trailer"
    );
    const trailer = trailers.length ? trailers[0] : json.results[0];
    dispatch(addTrailerVid(trailer));

    //.catch((err) => console.error(err));
  };

  useEffect(() => {
    getMainMovieTrailer();
  }, []);
};

export default useMainMovieTrailer;
