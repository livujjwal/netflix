import Header from "./Header";
import MainContainer from "./MainContainer";
import SecandaryContainer from "./SecandaryContainer";
import GptSeacrh from "./GptSearch";
import { useDispatch, useSelector } from "react-redux";
import { addSearchMovies } from "../utils/moviesSlice";

const Browse = () => {
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  if (!showGptSearch) dispatch(addSearchMovies(null));

  return (
    <div className="w-screen">
      <Header />
      {showGptSearch ? (
        <GptSeacrh />
      ) : (
        <>
          <MainContainer />
          <SecandaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
