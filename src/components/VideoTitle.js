import {FaPlay} from "react-icons/fa"


const VideoTitle = ({ original_title, overview }) => {
  return (
    <div className="pt-[16%] px-36 absolute aspect-video bg-gradient-to-r from-black text-white">
      <h1 className="text-6xl font-bold">{original_title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="flex items-center gap-4 ">
        <button className="text-slate-700 bg-white p-4 px-12 text-lg rounded-md hover:bg-opacity-75">< FaPlay className="mx-2 inline"/>Play</button>
        <button className="bg-slate-700 text-white p-4 px-12 text-lg rounded-md bg-opacity-50">More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
