import React, { useState } from 'react';

function ArticleForm({ article, onSave, onCancel }) {
  const [formData, setFormData] = useState({
    title: article.title,
    img: article.img,
    author: article.author,
    createDate: article.createDate,
    description: article.description,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData); // передаём наружу
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Edit form</h3>
      <div>
        <label>Title:</label>
        <input type='text' name='title' value={formData.title} onChange={handleChange} />
      </div>
      <div>
        <label>Author:</label>
        <input type='text' name='author' value={formData.author} onChange={handleChange} />
      </div>
      <div>
        <label>Date:</label>
        <input type='date' name='createDate' value={formData.createDate} onChange={handleChange} />
      </div>
      <div>
        <label>Description:</label>
        <input
          type='text'
          name='description'
          value={formData.description}
          onChange={handleChange}
        />
      </div>
      <button type='submit'>Save</button>
      <button type='button' onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
}

export default ArticleForm;
