import { useSelector } from "react-redux";
import lang from "../utils/languageConsts";

const GptSearchBar = () => {
  const language = useSelector((store) => store.config.lang);

  return (
    <div className="flex justify-center pt-80">
      <div className="flex absolute bg-black w-1/3 h-16 items-center">
        <input
          type="text"
          placeholder={lang[language].input}
          className="w-full h-12 pl-2 mx-2 rounded-md"
        />
        <button className="w-1/4 h-12 mr-2 rounded-md bg-red-900 text-white">
          {lang[language].search}
        </button>
      </div>
    </div>
  );
};

export default GptSearchBar;
