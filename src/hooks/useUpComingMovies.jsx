import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUpComingMovies } from "../utils/movieSlice";

const useUpComingMovies = () => {
  const dispatch = useDispatch();

  const getUpComingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );
    const json = await data?.json();
    dispatch(addUpComingMovies(json?.results));
    //.catch((err) => console.error(err));
  };

  useEffect(() => {
    getUpComingMovies();
  }, []);
};

export default useUpComingMovies;
