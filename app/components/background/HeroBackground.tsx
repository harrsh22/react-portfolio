import React, { useRef } from "react";

const HeroBackground: React.FC = () => {
    // Using a ref to access the video element
    const videoRef = useRef<HTMLVideoElement>(null);

    // Function to restart the video when it ends
    const handleVideoEnd = () => {
        if (videoRef.current) {
            videoRef.current.currentTime = 0; // Restart video from the beginning
            videoRef.current.play(); // Start playing again
        }
    };

    return (
        <div className="absolute inset-0">
            <video
                ref={videoRef} // Assigning ref to the video element
                className="h-full w-full object-cover"
                autoPlay
                playsInline
                muted
                preload="auto"
                onEnded={handleVideoEnd} // Handling the end of the video
            >
                <source src="/hero.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-bg-dark to-transparent"/>
        </div>
    );
};

export default HeroBackground;
