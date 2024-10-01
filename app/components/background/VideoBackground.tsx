import React from "react";

const VideoBackground = () => {
  return (
    <div className="absolute inset-0">
      <video className="h-full w-full object-cover" autoPlay muted loop>
        <source src="space.mp4" type="video/mp4" />
      </video>
      {/* Overlay to make text readable */}
      <div className="absolute inset-0 w-full h-full bg-black opacity-50"></div>
    </div>
  );
};

export default VideoBackground;
