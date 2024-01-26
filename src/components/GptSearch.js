import { BG_URL } from "../utils/constants"
import GptMovieSuggestion from "./GptMovieSuggestion"
import GptSearchBox from "./GptSerachBox"

const GptSeacrh = () => {
    return <div className="">
        <div className="absolute -z-10 bg-gradient-to-b from-black">
        <img
          className="object-cover max-sm:h-dvh max-sm:w-dvh h-dvh w-screen "
          src={BG_URL}
          alt="bg-image"
        />
      </div>
<GptSearchBox/>
<GptMovieSuggestion/>
    </div>
}

export default GptSeacrh