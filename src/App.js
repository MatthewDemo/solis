import "./App.css";
import Header from "./components/header/Header";
import FirstTextBlock from "./components/first-text-block/FirstTextBlock";
import FirstBackgroundImage from "./images/first-screen-image.svg";
import FirstBackgroundImageBlack from "./images/first-screen-image-black.svg";
import Statistic from "./components/statistic/Statistic";
import Benefits from "./components/benefits/Benefits";
import Quote from "./components/quote/Quote";
import VideoBlock from "./components/video-block/VideoBlock";
import Promises from "./components/promises/Promises";
import Reviews from "./components/reviews/Reviews";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import moon from "./images/moon.svg";
import sun from "./images/sun.svg";
import { useSelector, useDispatch } from "react-redux";
import { setIsBlack } from "./redux/slices/themeSlice";

function App() {
  const isBlack = useSelector((state) => state.theme.isBlack);
  const dispatch = useDispatch();
  const switcherIcon = isBlack ? sun : moon;
  const appClassName = isBlack ? "App App-black" : "App";
  const backgroundImage = isBlack
    ? FirstBackgroundImageBlack
    : FirstBackgroundImage;

  return (
    <div
      className={appClassName}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <img
        src={switcherIcon}
        alt=""
        onClick={() => dispatch(setIsBlack())}
        className="theme-switcher"
      />
      <Header />
      <FirstTextBlock />
      <Statistic />
      <Benefits />
      <Quote />
      <VideoBlock />
      <Promises />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
