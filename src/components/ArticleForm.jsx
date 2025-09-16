import { useState } from 'react';

function ArticleForm({ article, onSave, onCancel }) {
  const [title, setTitle] = useState(article.title);
  const [author, setAuthor] = useState(article.author);
  const [createDate, setCreateDate] = useState(article.createDate);
  const [description, setDescription] = useState(article.description);
  const [img, setImg] = useState(article.img || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    //  const updatedArticle = {
    //    ...article,
    //    title,
    //    author,
    //    createDate,
    //    description,
    //  };
    const updatedArticle = {
      ...article,
      title,
      author,
      createDate,
      description,
      img, // добавили сюда
    };
    onSave(updatedArticle);
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImg(reader.result); // Base64-строка
      };
      reader.readAsDataURL(file);
    }
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
      <div>
        <label>Upload Image:</label>
        <input type='file' accept='image/*' onChange={(e) => handleImageChange(e)} />
      </div>

      {img && <img src={img} alt='Preview' width='150' />}

      <button type='submit'>Save</button>
      <button type='button' onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
}

export default ArticleForm;
