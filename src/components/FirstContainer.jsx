import MovieTrailer from "./MovieTrailer";
import MovieTitle from "./MovieTitle";
import { useSelector } from "react-redux";

const FirstContainer = () => {
  const nowPlayingMovies = useSelector(
    (store) => store.movies?.nowPlayingMovies
  );

  if (!nowPlayingMovies) return;

  const mainMovie = nowPlayingMovies[0];
  const { original_title, overview, id } = mainMovie;

  return (
    <div>
      <MovieTrailer id={id} />
      <MovieTitle title={original_title} overview={overview} />
    </div>
  );
};

export default FirstContainer;
