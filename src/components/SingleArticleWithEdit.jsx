import { useState } from 'react';
import CommentsWithReplay from './CommentsWithReplay';
import Hero from './Hero';
import ArticleForm from './ArticleForm';

function SingleArticleWithEdit({ onSave, onCancel }) {
  const heroContent = {
    bgImg: '/img/about-banner.jpg',
    title: 'Blog Single',
    text: 'Home / Blog Single',
  };

  const [article, setArticle] = useState({
    id: 1,
    title: 'How to Start with React',
    category: 'travel guide',
    img: '/img/posts01.jpg',
    author: 'John Smith',
    createDate: '2025-08-10',
    description: "A beginner's guide to starting your first React project.",
    content: [
      { type: 'h2', text: 'Introduction' },
      {
        type: 'p',
        text: 'React is a popular JavaScript library for building user interfaces. It is component-based and declarative.',
      },
      { type: 'h2', text: 'Installation' },
      {
        type: 'p',
        text: 'To start with React, you can use Create React App or Vite to quickly set up your environment.',
      },
      { type: 'h2', text: 'Conclusion' },
      {
        type: 'p',
        text: 'React is powerful, flexible, and supported by a large community.',
      },
    ],
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleSave = (updatedArticle) => {
    setArticle(updatedArticle);
    setIsEditing(false);
  };

  return (
    <div>
      <Hero content={heroContent} />
      <article>
        <div className='container'>
          {isEditing ? (
            <ArticleForm
              article={article}
              onSave={handleSave}
              onCancel={() => setIsEditing(false)}
            />
          ) : (
            <div className='article__wrap'>
              <div className='block_data'>
                <p>
                  by <span>{article.author}</span> on {article.createDate}
                </p>
              </div>
              <h2 className='article_title'>{article.title}</h2>
              <img src={article.img} alt='' />

              {article.content.map((block, i) => {
                if (block.type === 'h2') return <h2 key={i}>{block.text}</h2>;
                if (block.type === 'p') return <p key={i}>{block.text}</p>;
                return null;
              })}

              <p>{article.description}</p>

              <button onClick={() => setIsEditing(true)}>Edit</button>
            </div>
          )}
        </div>
      </article>
      <CommentsWithReplay articleId={article.id} />
    </div>
  );
}

export default SingleArticleWithEdit;
