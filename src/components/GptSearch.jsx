import { BG_IMAGE_URL } from "../utils/constants";
import GptSearchBar from "./GptSearchBar";
import GptSearchResults from "./GptSearchResults";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute">
        <img src={BG_IMAGE_URL} />
      </div>
      <GptSearchBar />
      <GptSearchResults />
    </div>
  );
};

export default GptSearch;
