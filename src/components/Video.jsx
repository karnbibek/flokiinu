import React from "react";
import './Video.css';

const Video = () => (
  <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src="https://www.youtube.com/embed/0XnZRaZeP9Y"
      frameBorder="0"
      allow="accelerometer; autoplay=1; loop=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);


export default Video;