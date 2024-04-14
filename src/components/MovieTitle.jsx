/* eslint-disable react/prop-types */
const MovieTitle = ({ title, overview }) => {
  return (
    <div className="pt-60 pl-20 w-2/5 relative text-white bg-gradient-to-r from-black h-screen">
      <h1 className="text-6xl font-bold mb-4 text-red-700">{title}</h1>
      <p className="text-xl mb-4">{overview}</p>
      <div className="flex text-xl ">
        <button className="flex mr-5 justify-center items-center w-32 h-11  rounded-md text-black bg-white hover:bg-gray-300">
          <i className="fa-solid fa-play mr-4"></i>
          <p>play</p>
        </button>
        <button className="flex justify-center items-center w-40 h-11  rounded-md bg-gray-600 hover:bg-gray-700">
          <i className="fa-solid fa-circle-info mr-4"></i>
          <p>More info</p>
        </button>
      </div>
    </div>
  );
};

export default MovieTitle;
