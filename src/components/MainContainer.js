import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store?.movies?.nowPlayingMovies);
  if (!movies) return;

  const movie = movies[0];
  const { original_title, overview ,id } = movie;
  return (
    <div className="">
      <VideoTitle original_title={original_title} overview={overview} /> 
      <VideoBackground movieId={id}/>
    </div>
  );
};

export default MainContainer;
