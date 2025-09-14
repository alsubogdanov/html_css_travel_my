import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Comments() {
  const { id } = useParams();

  const commentsArr = [
    {
      name: 'Emily Johnson',
      date: '2025-09-08',
      text: 'Отличная статья, спасибо!',
      articleId: 1,
    },
    {
      name: 'John Smith',
      date: '2025-09-07',
      text: 'Очень полезно, многое понял.',
      articleId: 1,
    },
  ];
  // список комментариев
  const [comments, setComments] = useState(commentsArr);
  const [msg, setMsg] = useState('');

  // объект с полями формы
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    text: '',
    saveInfo: false,
  });

  // при загрузке проверяем localStorage
  useEffect(() => {
    const savedName = localStorage.getItem('commentName');
    const savedEmail = localStorage.getItem('commentEmail');
    if (savedName || savedEmail) {
      setFormData((prev) => ({
        ...prev,
        name: savedName || '',
        email: savedEmail || '',
      }));
    }
  }, []);

  // универсальный хендлер для инпутов
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, text, saveInfo } = formData;

    if (!name || !email || !text) {
      setMsg('Пожалуйста, заполните все поля!');
      return;
    }

    // добавляем новый комментарий
    const newComment = {
      name,
      // date: new Date().toISOString().split('T')[0], // текущая дата
      date: new Date().toLocaleString().split(',')[0],
      text,
      articleId: id,
    };
    setComments([newComment, ...comments]); //!!! add to end array
    //  console.log(new Date()); //!!! time - 3h
    //  console.log(new Date().toLocaleString().split('/')[0]);

    // сохраняем данные в localStorage, если чекбокс отмечен
    if (saveInfo) {
      localStorage.setItem('commentName', name);
      localStorage.setItem('commentEmail', email);
    } else {
      localStorage.removeItem('commentName');
      localStorage.removeItem('commentEmail');
    }

    //  // очищаем только текст
    //  setFormData((prev) => ({ ...prev, text: '' }));
    // Очистка полей
    setFormData({
      name: '',
      email: '',
      text: '',
      saveInfo: false,
    });
    setMsg('');
    console.log(comments);
  };

  return (
    <section className='comments'>
      <div className='container'>
        <h3>Комментарии ({comments.length})</h3>

        {/* Список комментариев */}
        <ul>
          {comments.map((c, i) => (
            <li key={i} className='comment'>
              <p>
                <strong>{c.name}</strong> — <small>{c.date}</small>
              </p>
              <p>{c.text}</p>
            </li>
          ))}
        </ul>

        {/* Форма добавления комментария */}
        <div className='comment-form'>
          <h2>Leave a Comment</h2>
          <form onSubmit={handleSubmit} className='comment-form'>
            <div className='comment-form__inputs d-flex jcsb'>
              <input
                type='text'
                name='name'
                value={formData.name}
                placeholder='Enter your name'
                onChange={handleChange}
              />
              <input
                type='email'
                name='email'
                value={formData.email}
                placeholder='Enter your email'
                onChange={handleChange}
              />
            </div>
            <div className='comment-form__text'>
              <textarea name='text' value={formData.text} onChange={handleChange}></textarea>
            </div>
            <div>
              <label>
                <input
                  type='checkbox'
                  name='saveInfo'
                  checked={formData.saveInfo}
                  onChange={handleChange}
                />
                Сохранить имя и email в этом браузере для следующего комментария
              </label>
            </div>
            <p className='result'>{msg}</p>
            <button type='submit' className='btn_main'>
              Добавить комментарий
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Comments;
