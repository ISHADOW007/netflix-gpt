import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

const VideoPlaylist = () => {
    const trailerVideo= useSelector((store)=>store.movies?.trailerVideo)
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const videoIframeRef = useRef(null);

    const videos = [
        "https://www.youtube.com/embed/",
        "https://www.youtube.com/embed/",
        "https://www.youtube.com/embed/",
        
    ];

    useEffect(() => {
        const iframe = videoIframeRef.current;
        if (iframe) {
            const checkVideoEnd = () => {
                // Placeholder function to simulate video end detection
                setTimeout(() => {
                    playNextVideo();
                }, 5000); // assuming each video is 5 seconds for demo purposes
            };

            // Call the function initially
            checkVideoEnd();

            // Add an event listener to detect the end of the video
            iframe.addEventListener('load', checkVideoEnd);

            return () => {
                iframe.removeEventListener('load', checkVideoEnd);
            };
        }
    }, [currentVideoIndex]);

    const playNextVideo = () => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    };

    return (
        <div className="w-screen" style={{ textAlign: 'center' }}>
            <iframe className="w-screen aspect-video"
                ref={videoIframeRef}
                width="640"
                height="360"
                src={videos[currentVideoIndex]}
                title="Video Player"
                frameBorder="0"
                allowFullScreen
            ></iframe>
        </div>
    );
};


export default VideoPlaylist;