/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import useMainMovieTrailer from "../hooks/useMainMovieTrailer";

const MovieTrailer = ({ id }) => {
  const trailerVid = useSelector((store) => store.movies.trailerVid);
  useMainMovieTrailer(id);

  return (
    <div className="absolute w-full">
      <iframe
        className="w-full -mt-12 aspect-video bg-gradient-to-t from-black"
        src={
          "https://www.youtube.com/embed/" +
          trailerVid?.key +
          "?si=nwrb_j79dcZ6m798?&autoplay=1&mute=1&rel=0"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default MovieTrailer;
