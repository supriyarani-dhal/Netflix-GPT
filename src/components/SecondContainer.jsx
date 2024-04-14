import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies && (
      <div className="absolute bg-black -mt-14 w-screen">
        <MovieList title={"Now playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
        <MovieList title={"Up Comings"} movies={movies.upComingMovies} />
      </div>
    )
  );
};

export default SecondContainer;
