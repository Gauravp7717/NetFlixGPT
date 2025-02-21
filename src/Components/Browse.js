import useNowPlay from "../hooks/useNowPlay";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondoryContainer from "./SecondoryContainer";

const Browse = () => {
  useNowPlay();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondoryContainer />
    </div>
  );
};

export default Browse;
