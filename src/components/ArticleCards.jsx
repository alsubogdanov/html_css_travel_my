import React from "react";
import { Link, useLocation } from "react-router-dom";

function ArticleCard({ article }) {
  console.log(article);

  return (
    <Link className="card" to={"article/" + article.id}>
      <div className="card__img">
        <img src={article.img} alt="" />
      </div>

      <p>{article.category}</p>
      <h3>{article.title}</h3>
    </Link>
  );
}

export default ArticleCard;
