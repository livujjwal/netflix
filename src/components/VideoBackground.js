import { useSelector } from "react-redux";
import useVideoBackground from "../hooks/useVideoBackground";

const VideoBackground = ({ movieId }) => {
  useVideoBackground(movieId);
  const videoKey = useSelector((store) => store?.movies?.moviesTrailer); // yqN7nHM1YTA
  return (
    <div className="">
      <iframe
        className=" w-[100%] aspect-video"
        src={
          "https://www.youtube.com/embed/" + videoKey + "?si=pan763P5RMwL8prP&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
       ></iframe>
    </div>
  );
};

export default VideoBackground;
