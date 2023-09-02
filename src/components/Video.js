import React from "react";
const Video = ({ videoSrcURL, videoTitle, ...props }) => (
    <div className="video fixed bottom-2 right-2 z-30">
        <iframe
            src={videoSrcURL}
            title={videoTitle}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            frameBorder="0"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            allowFullScreen
        />
    </div>
);
export default Video;
