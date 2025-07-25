import { useSelector } from "react-redux";
import useNowPlay from "../hooks/useNowPlay";
import usePopular from "../hooks/usePopular";
import useToprated from "../hooks/useToprated";
import useUpcoming from "../hooks/useUpcoming";
import GptSearch from "./GptSearch";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondoryContainer from "./SecondoryContainer";

const Browse = () => {
  const showGptView = useSelector((store) => store.gpt.showGptView);
  useNowPlay();
  usePopular();
  useToprated();
  useUpcoming();
  return (
    <div>
      <Header />
      {showGptView ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondoryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
