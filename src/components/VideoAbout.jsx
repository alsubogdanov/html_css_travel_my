import React, { useState } from "react";

function VideoAbout() {
  const video = {
    id: 1,
    thumbnail: "/img/posts01.jpg",
    url: "https://www.youtube.com/embed/XlvGAErlXPc?si=ppHl5YpDGhp1Kpcg",
    title: "Видео 1",
  };
  const [isPlaing, setIsPlaying] = useState(false);

  return (
    <section className="video__about container">
      <div className="video-gal__full mb2">
        {!isPlaing ? (
          //previev img with icon
          <div
            className="video-full"
            style={{ backgroundImage: `url(${video.thumbnail})` }}
            onClick={() => setIsPlaying(true)}
          >
            <div className="icon-play d-flex jcc aic h100">
              <svg
                width="70"
                height="70"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="white"
                  d="M0 256a256 256 0 1 1 512 0a256 256 0 1 1-512 0m188.3-108.9c-7.6 4.2-12.3 12.3-12.3 20.9v176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"
                />
              </svg>
            </div>
          </div>
        ) : (
          <iframe
            src={`${video.url}?autoplay=1&mute=1`}
            title={video.title}
            allow="autoplay"
            allowFullScreen
          />
        )}
      </div>
    </section>
  );
}

export default VideoAbout;
