import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ArticleCard from "./ArticleCards";

function SearchOverlay({ isOpen, onClose }) {
  const articles = [
    {
      id: 1,
      title: "Mastering JavaScript Closures",
      category: "things to do",
      img: "./img/posts01.jpg",
      author: "Emily Johnson",
      description: "Understand closures in JavaScript with real-life examples.",
    },
    {
      id: 2,
      title: "React Basics for Beginners",
      category: "learning",
      img: "./img/posts02.jpg",
      author: "John Smith",
      description:
        "Get started with React and understand components, props, and state.",
    },
    {
      id: 3,
      title: "Node.js Event Loop Explained",
      category: "learning",
      img: "./img/posts03.jpg",
      author: "Sarah Williams",
      description:
        "Dive into the Node.js event loop and asynchronous programming.",
    },
    {
      id: 4,
      title: "CSS Grid Layout",
      category: "things to do",
      img: "./img/posts04.jpg",
      author: "Michael Brown",
      description: "Learn how to build responsive layouts using CSS Grid.",
    },
    {
      id: 5,
      title: "Understanding Async/Await",
      category: "learning",
      img: "./img/posts05.jpg",
      author: "Emily Johnson",
      description:
        "Simplify asynchronous JavaScript code using async/await syntax.",
    },
    {
      id: 6,
      title: "10 Productivity Tips for Developers",
      category: "lifestyle",
      img: "./img/posts06.jpg",
      author: "Anna Davis",
      description: "Boost your coding efficiency with these practical tips.",
    },
    {
      id: 7,
      title: "TypeScript for Beginners",
      category: "learning",
      img: "./img/posts07.jpg",
      author: "David Lee",
      description: "Start using TypeScript to write safer JavaScript code.",
    },
    {
      id: 8,
      title: "Building a To-Do App with React",
      category: "things to do",
      img: "./img/posts08.jpg",
      author: "Sarah Williams",
      description:
        "Create a functional to-do application with React and state management.",
    },
    {
      id: 9,
      title: "Healthy Work-Life Balance for Developers",
      category: "lifestyle",
      img: "./img/posts09.jpg",
      author: "Michael Brown",
      description: "Learn how to maintain balance and avoid burnout.",
    },
    {
      id: 10,
      title: "Debugging JavaScript Like a Pro",
      category: "things to do",
      img: "./img/posts10.jpg",
      author: "Anna Davis",
      description: "Master the tools and techniques for efficient debugging.",
    },
  ];
  const categories = [...new Set(articles.map((item) => item.category))];
  const [searchTerm, setSearchTerm] = useState(""); // состояние для поиска
  const [filteredArticles, setFilteredArticles] = useState(articles);
  const navigate = useNavigate();

  // при клике на "См. все"
  const handleSeeAll = () => {
    handleClose();
    console.log(searchTerm);
    //encodeURIComponent(searchTerm) — кодирует текст поиска, чтобы он корректно передавался в URL
    //На странице /blog можно прочитать его через useLocation и фильтровать статьи.
    //формируешь URL с query-параметром (аналог GET-запроса, но внутри приложения React Router).
    navigate(`/blog?search=${encodeURIComponent(searchTerm)}`);
  };

  if (!isOpen) return null;
  // обработка клика по фону
  const handleClick = (e) => {
    // если клик был по overlay-container (а не внутри контента) → закрыть
    if (e.target.classList.contains("overlay-container")) {
      handleClose();
    }
  };
  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    // TODO: здесь можно сделать запрос к БД вместо фильтрации массива
    const filtered = articles.filter(
      (a) =>
        a.title.toLowerCase().includes(term.toLowerCase()) ||
        a.description.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredArticles(filtered);
  };
  const handleClose = () => {
    setSearchTerm(""); // очищаем инпут
    setFilteredArticles(articles); // возвращаем полный список (или пустой)
    onClose(); // вызываем родительский onClose
  };
  return (
    <div className="overlay-container" onClick={handleClick}>
      <div className="overlay-content">
        <div className="overlay-search">
          <input
            type="text"
            placeholder="Введите запрос..."
            className="search-input"
            value={searchTerm}
            onChange={handleSearch}
          />
          {/* <svg class="search" width="24" height="24"> */}
          <svg
            id="search"
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
          >
            <title>Search</title>
            <path
              fill="currentColor"
              d="M19 3C13.488 3 9 7.488 9 13c0 2.395.84 4.59 2.25 6.313L3.281 27.28l1.439 1.44l7.968-7.969A9.922 9.922 0 0 0 19 23c5.512 0 10-4.488 10-10S24.512 3 19 3zm0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8s-8-3.57-8-8s3.57-8 8-8z"
            ></path>
          </svg>
        </div>
        <div className="overlay-cats pt5">
          <h3>Browse Categories</h3>
          <div className="overlay-cats__wrap d-flex g2">
            {categories &&
              categories.map((item, id) => (
                <button
                  key={`search-cat-${id}`}
                  onClick={() => {
                    handleClose(); // закрываем оверлей
                    navigate(`/blog?category=${encodeURIComponent(item)}`);
                  }}
                >
                  {item} /{" "}
                </button>
              ))}
          </div>
        </div>
        <div className="overlay-results pt5 d-flex f-wrap">
          {searchTerm !== "" && filteredArticles.length > 0 ? (
            filteredArticles.slice(0, 4).map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                onClick={() => handleClose()}
              /> // закрываем оверлей при клике на карточку
            ))
          ) : searchTerm !== "" ? (
            <p>Ничего не найдено</p>
          ) : null}
          {searchTerm !== "" && filteredArticles.length > 4 && (
            <div className="see-all mt3">
              <button onClick={handleSeeAll}>См. все</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchOverlay;
