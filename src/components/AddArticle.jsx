import { useState } from 'react';
import Hero from './Hero';
import ArticleForm from './ArticleForm';

function AddArticle({ onAdd }) {
  const heroContent = {
    bgImg: '/img/about-banner.jpg',
    title: 'Add New Article',
    text: 'Home / Add Article',
  };

  const [isSaved, setIsSaved] = useState(false);

  const handleSave = (newArticle) => {
    if (onAdd) {
      onAdd(newArticle);
    }
    setIsSaved(true);
  };

  return (
    <div>
      <Hero content={heroContent} />
      <div className='container'>
        {isSaved ? (
          <p>Article added successfully!</p>
        ) : (
          <ArticleForm article={null} onSave={handleSave} onCancel={() => {}} />
        )}
      </div>
    </div>
  );
}

export default AddArticle;
