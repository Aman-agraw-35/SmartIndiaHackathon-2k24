import React, { useRef } from 'react';

const VideoPlayer = () => {
  const videoRef = useRef(null);

  return (

      <section className="relative h-[90vh] rounded-3xl border-8 my-2 border-white overflow-hidden">
      {/* Inner container with black border */}
      <div className="border-2 h-[99%] border-black rounded-3xl overflow-hidden">
      <video
        ref={videoRef}
        className="rounded-2xl h-[100%] w-full object-cover"
        controls // Enabling default video controls
      >
        <source src="mainvid.mp4" type="video/mp4" muted={false} />
        Your browser does not support the video tag.
      </video>
      </div>
    </section>
  );
};

export default VideoPlayer;
