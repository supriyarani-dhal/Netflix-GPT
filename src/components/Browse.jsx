import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import FirstContainer from "./FirstContainer";
import SecondContainer from "./SecondContainer";
import usePopularMovies from "../hooks/usePopularMovies ";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpComingMovies from "../hooks/useUpComingMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const gptSearch = useSelector((store) => store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();

  return (
    <div className="bg-black">
      <Header />
      {gptSearch ? (
        <GptSearch />
      ) : (
        <>
          <FirstContainer />
          <SecondContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
