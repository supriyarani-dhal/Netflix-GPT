/* eslint-disable react/prop-types */
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="pl-20 -mt-14">
      <h1 className="text-2xl -mb-10 mt-14 text-white">{title}</h1>
      <div className="flex -mb-20 overflow-y-hidden overflow-x-scroll no-scrollbar">
        <div className="flex h-96 items-center">
          {movies?.map((movie) => (
            <MovieCard
              key={movie.id}
              movieName={movie.title}
              poster_path={movie.poster_path}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
