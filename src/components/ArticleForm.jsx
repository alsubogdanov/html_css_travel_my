import { useState } from 'react';

function ArticleForm({ article, onSave, onCancel }) {
  const [title, setTitle] = useState(article.title);
  const [author, setAuthor] = useState(article.author);
  const [createDate, setCreateDate] = useState(article.createDate);
  const [description, setDescription] = useState(article.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedArticle = {
      ...article,
      title,
      author,
      createDate,
      description,
    };
    onSave(updatedArticle);
  };

  return (
    <form onSubmit={handleSubmit} className='article-form'>
      <h3>Edit Article</h3>
      <div>
        <label>Title:</label>
        <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>

      <div>
        <label>Author:</label>
        <input type='text' value={author} onChange={(e) => setAuthor(e.target.value)} />
      </div>

      <div>
        <label>Date:</label>
        <input type='date' value={createDate} onChange={(e) => setCreateDate(e.target.value)} />
      </div>

      <div>
        <label>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>

      <button type='submit'>Save</button>
      <button type='button' onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
}

export default ArticleForm;
