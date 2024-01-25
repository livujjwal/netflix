import { useSelector } from "react-redux";
import useVideoBackground from "../hooks/useVideoBackground";

const VideoBackground = ({ movieId }) => {
  useVideoBackground(movieId);
  const videoKey = useSelector((store) => store?.movies?.moviesTrailer);
  return (
    <div className="w-screen">
      <iframe
        className="w-[100%] aspect-video"
        width="100%"
        src={"https://www.youtube.com/embed/" + videoKey + "?&autoplay=1&mute=1"}
        autoPlay="1"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
