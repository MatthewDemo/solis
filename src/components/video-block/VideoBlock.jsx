import React, { useRef, useState } from "react";
import tabletImage from "../../images/tablet.svg";
import screenSaver from "../../images/screensaver-video.svg";
import VideoFile from "../../images/video.mp4";
import IconPlay from "../../images/icon-play.svg";
import "./VideoBlock.scss";

const VideoBlock = ({ isBlack }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

   const videoBlockClassName = isBlack
  ? "video-block video-block-black"
  : "video-block";

  const handlePlayPause = () => {
    const video = videoRef.current;

    setIsPlaying(!isPlaying);

    if (video) {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    }
  };

  return (
    <div className={videoBlockClassName}>
      <img src={tabletImage} alt="" className="tablet-image" />
      {isPlaying ? null : (
        <div className="play-button" onClick={handlePlayPause}>
          <img src={IconPlay} alt="" className="play-icon" />
        </div>
      )}
      {isPlaying ? (
        <video ref={videoRef} width="870" height="539" controls autoPlay>
          <source src={VideoFile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img src={screenSaver} alt="" className="screen-saver" />
      )}
      <div className="text-block">
        <h1>
          A <span>powerful API </span> , easy to use user interface
        </h1>
        <p>
          Our API allows all members to interact with Stablehouse’s platform,
          from effecting transfers to deposits, withdrawals, creation and
          redemption and reporting.
        </p>
      </div>
    </div>
  );
};

export default VideoBlock;
