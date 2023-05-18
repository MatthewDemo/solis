import "./App.css";
import Header from "./components/header/Header";
import FirstTextBlock from "./components/first-text-block/FirstTextBlock";
import FirstBackgroundImage from "./images/first-screen-image.svg";
import FirstBackgroundImageBlack from "./images/first-screen-image-black.svg";
import { useState } from "react";
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

function App() {
  const [isBlack, setIsBlack] = useState(false);
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
        onClick={() => setIsBlack(!isBlack)}
        className="theme-switcher"
      />
      <Header isBlack={isBlack} />
      <FirstTextBlock isBlack={isBlack} />
      <Statistic isBlack={isBlack} />
      <Benefits isBlack={isBlack} />
      <Quote isBlack={isBlack} />
      <VideoBlock isBlack={isBlack} />
      <Promises isBlack={isBlack} />
      <Reviews isBlack={isBlack} />
      <Contact isBlack={isBlack} />
      <Footer isBlack={isBlack} />
    </div>
  );
}

export default App;
