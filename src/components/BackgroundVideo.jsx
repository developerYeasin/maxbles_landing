import React from 'react';

const BackgroundVideo = () => {
  const videoSrc = "https://cdn.dribbble.com/userupload/16569515/file/original-d99071d642c8efd87400222a0c344e1a.mp4";

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden -z-10">
      <video
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover transform -translate-x-1/2 -translate-y-1/2"
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
      >
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black opacity-20"></div> {/* Optional overlay for better text readability */}
    </div>
  );
};

export default BackgroundVideo;