import { useSelector } from "react-redux";
import lang from "../utils/languageConsts";
import { useRef } from "react";
import openai from "../utils/openAI";

const GptSearchBar = () => {
  const language = useSelector((store) => store.config.lang);
  const searchTxt = useRef(null);

  const handleGptSearch = async () => {
    const query =
      "Act as a movie recomended system and suggest some movies for the query: " +
      searchTxt.current.value +
      ". Only give me the names of 10 movies , comma separated like the example result given ahead. Example result : Gadar , Golmaal , Hera pheri , Jab we met , Bhagban , Kabhi khusi kabhi gam , Ham apke hai kaun, Don , Sholay , Koi mil gaya";

    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: query }],
      model: "gpt-3.5-turbo",
    });

    console.log(chatCompletion);
  };

  return (
    <div className="flex justify-center pt-80">
      <div className="flex absolute bg-black w-1/3 h-16 items-center">
        <input
          type="text"
          placeholder={lang[language].input}
          className="w-full h-12 pl-2 mx-2 rounded-md"
          ref={searchTxt}
        />
        <button
          className="w-1/4 h-12 mr-2 rounded-md bg-red-900 text-white"
          onClick={handleGptSearch}
        >
          {lang[language].search}
        </button>
      </div>
    </div>
  );
};

export default GptSearchBar;
