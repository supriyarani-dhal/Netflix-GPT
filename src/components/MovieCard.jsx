/* eslint-disable react/prop-types */
import { MOVIE_POSTER } from "../utils/constants";

const MovieCard = ({ movieName, poster_path }) => {
  return (
    <div className="w-40 mr-2 transithion duration-300 hover:scale-150">
      <img
        className="w-full rounded object-cover"
        src={MOVIE_POSTER + poster_path}
        alt={movieName}
      />
    </div>
  );
};

export default MovieCard;
