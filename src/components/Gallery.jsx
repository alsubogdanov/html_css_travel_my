import React, { useState } from "react";
import right from '../assets/imgs/right.png'
import left from '../assets/imgs/left.png'
import close from '../assets/imgs/close.png'

const Gallery = () => {
  const images = [
    { id: 1, src: "/img/posts02.jpg", category: "Природа" },
    { id: 2, src: "/img/posts01.jpg", category: "Животные" },
    { id: 3, src: "/img/posts03.jpg", category: "Природа" },
    { id: 4, src: "/img/posts04.jpg", category: "Город" },
    { id: 5, src: "/img/posts05.jpg", category: "Город" },
    { id: 6, src: "/img/posts06.jpg", category: "Животные" },
  ];
// Set — это встроенная структура данных в JavaScript, похожая на массив, но в нём каждое значение хранится только один раз (без дублей).
//Оператор ... (spread) превращает Set обратно в массив: git 
const categories = ["Все", ...new Set(images.map((img) => img.category))];

  const [selectedCategory, setSelectedCategory] = useState("Все");
  const [currentIndex, setCurrentIndex] = useState(null);

  const filteredImages =
    selectedCategory === "Все"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  const openModal = (index) => setCurrentIndex(index);
  const closeModal = () => setCurrentIndex(null);

  const showPrev = (e) => {
	e.stopPropagation();
	
	
    setCurrentIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
  };

  const showNext = () => {
    setCurrentIndex((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="p-6">
      {/* Кнопки фильтра */}
      <div className="d-flex g2 mb6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`cat__btn ${
              selectedCategory === cat
                ? "active"
                : ""
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Галерея */}
      <div className="d-flex f-wrap gal__wrap">
        {filteredImages.map((img, index) => (
          <img
            key={img.id}
            src={img.src}
            alt={img.category}
            className="cursor-pointer rounded-2xl shadow-md hover:scale-105 transition"
            onClick={() => openModal(index)}
          />
        ))}
      </div>

      {/* Модальное окно */}
      {currentIndex !== null && (

		<div className="modal" id="myModal" onClick={closeModal}>
			<div className="modal-content">
				<button className="close-btn mt10" id="closeModalBtn" onClick={closeModal}><img src={close}/></button>
				<button
					className="btn_prev"
					onClick={showPrev}
				>
           <img src={left}/>
          </button>
				<img
					src={filteredImages[currentIndex].src}
					alt="Просмотр"
					className="max-h-[80vh] max-w-[90vw] rounded-2xl shadow-lg"
       		/>
				
				<button
					className="btn__next"
					onClick={showNext}
				>
				<img src={right}/>
          </button>
			</div>
		</div>
      )}
    </div>
  );
};

export default Gallery;
