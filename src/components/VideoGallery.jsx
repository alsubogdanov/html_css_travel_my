import React, { useState } from "react";

function VideoGallery() {
	const videos = [
		{
		  id: 1,
		  thumbnail: "/img/posts01.jpg",
		  url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
		  title: "Видео 1",
		},
		{
		  id: 2,
		  thumbnail: "/img/posts02.jpg",
		  url: "https://www.youtube.com/embed/ScMzIvxBSi4",
		  title: "Видео 2",
		},
		{
		  id: 3,
		  thumbnail: "/img/posts03.jpg",
		  url: "https://www.youtube.com/embed/l482T0yNkeo",
		  title: "Видео 3",
		},
		{
			id: 4,
			thumbnail: "/img/posts04.jpg",
			url: "https://www.youtube.com/embed/LXb3EKWsInQ",
			title: "Видео 4",
		 },
		 {
			id: 5,
			thumbnail: "/img/banner1.jpg",
			url: "https://www.youtube.com/embed/tgbNymZ7vqY",
			title: "Видео 5",
		 },
		 
	 ];
	const [selected, setSelected] = useState(videos[0]);
  	const [isPlaying, setIsPlaying] = useState(false);

  return (
	<section className="video-gal" style={{"backgroundImage": "url('/img/video-bg.jpg')"}}>
	
		<div className="container">
			<div className="video-gal__full mb2">
			{!isPlaying ? (
				// Превью-картинка с кнопкой Play
				<div
					className="video-full"
					style={{ backgroundImage: `url(${selected.thumbnail})` }}
					onClick={() => setIsPlaying(true)}
				>
					<div className="icon-play">
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
				// Воспроизведение видео в том же контейнере
				<iframe
					src={`${selected.url}?autoplay=1`}
					title={selected.title}
					allow="autoplay; clipboard-write;"
					allowFullScreen
				/>
			)}
			</div>

			{/* Миниатюры снизу */}
			<div className="video-gal__cards d-flex g2">
			{videos.map((video) => (
				<div
					key={video.id}
					onClick={() => {
						setSelected(video);
						setIsPlaying(false); // возвращаем превью при смене видео
					}}
					className={`video-card ${
					selected.id === video.id ? "active" : ""
					}`}
				>
					<img
					src={video.thumbnail}
					alt={video.title}
					/>
				</div>
			))}
			</div>
		</div>
   
    </section>
  );
}

export default VideoGallery
