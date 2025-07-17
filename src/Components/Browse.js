import useNowPlay from "../hooks/useNowPlay";
import usePopular from "../hooks/usePopular";
import useToprated from "../hooks/useToprated";
import useUpcoming from "../hooks/useUpcoming";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondoryContainer from "./SecondoryContainer";

const Browse = () => {
  useNowPlay();
  usePopular();
  useToprated();
  useUpcoming();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondoryContainer />
    </div>
  );
};

export default Browse;
