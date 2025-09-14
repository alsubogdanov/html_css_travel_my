import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReplyForm from './ReplyForm';
import CommentItem from './CommentItem';
function CommentsWithReplay() {
  //   const { id } = useParams();
  const id = 1;
  const commentsArr = [
    {
      name: 'Emily Johnson',
      date: '2025-09-08',
      text: 'Отличная статья, спасибо!',
      articleId: 1,
      replies: [
        {
          name: 'Alex Smith',
          date: '2025-09-07',
          text: 'Hi, многое понял.',
          articleId: 1,
          replies: [],
        },
      ],
    },
    {
      name: 'John Smith',
      date: '2025-09-07',
      text: 'Очень полезно, многое понял.',
      articleId: 1,
      replies: [],
    },
    { name: 'Anna Lee', date: '2025-09-06', text: 'Супер материал!', articleId: 1, replies: [] },
    {
      name: 'Mike Brown',
      date: '2025-09-05',
      text: 'Спасибо за информацию.',
      articleId: 1,
      replies: [],
    },
    { name: 'Kate White', date: '2025-09-04', text: 'Очень интересно!', articleId: 1, replies: [] },
  ];
  // список комментариев
  const [comments, setComments] = useState(commentsArr);
  //   const [comments, setComments] = useState(commentsArr.filter((c) => c.articleId === id));
  const [msg, setMsg] = useState('');
  const [visibleCount, setVisibleCount] = useState(2); // отображать изначально 2 комментария

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

    const newComment = {
      name,
      date: new Date().toLocaleString().split(',')[0],
      text,
      id,
      replies: [],
    };

    setComments((prev) => [newComment, ...prev]);

    if (saveInfo) {
      localStorage.setItem('commentName', name);
      localStorage.setItem('commentEmail', email);
    } else {
      localStorage.removeItem('commentName');
      localStorage.removeItem('commentEmail');
    }

    setFormData({ name: '', email: '', text: '', saveInfo: false });
    setMsg('');
  };
  // Функция для добавления ответа на любой комментарий или реплай
  const addReply = (reply, parentComment) => {
    //Берём объект reply, который пришёл из формы ({ name, text }).
    //Добавляем дату создания и создаём пустой массив replies, чтобы на этот ответ тоже можно было ответить.
    const newReply = {
      ...reply,
      date: new Date().toLocaleString().split(',')[0],
      replies: [],
      likes: 0,
    };

    //  commentsList — массив комментариев на текущем уровне вложенности.
    //Используем map, чтобы вернуть новый массив и не мутировать исходное состояние.
    //Логика:
    //Если комментарий совпадает с родительским (c === parentComment):
    //Создаём новый объект комментария с обновлённым массивом replies.
    //В массив replies добавляем newReply.
    //Если есть вложенные ответы (c.replies):
    //Вызываем updateComments(c.replies) рекурсивно для каждого дочернего комментария.
    //Если комментарий не совпадает и нет ответов:
    //Возвращаем комментарий без изменений.
    const updateComments = (commentsList) => {
      console.log(commentsList);
      //Мы вызываем updateComments(prev) — рекурсивную функцию, которая:
      //Находит нужный комментарий (parentComment)
      //Добавляет newReply в его массив replies
      //Создаёт новые объекты для всех комментариев (иммутабельность)
      return commentsList.map((c) => {
        if (c === parentComment) {
          return { ...c, replies: [...(c.replies || []), newReply] };
          //{ ...c }
          //Создаёт копию объекта комментария c, чтобы не мутировать исходный объект.
          //В копии будут все свойства исходного комментария: name, date, text, articleId, replies и т.д.
          //replies: [...(c.replies || []), newReply]
          //Берём существующие ответы (c.replies) или создаём пустой массив [], если их ещё нет.
          //Используем spread-оператор ..., чтобы создать новый массив и добавить в конец newReply.
        }
        if (c.replies && c.replies.length > 0) {
          //Если оба условия верны, значит у текущего комментария есть дочерние ответы, и мы можем рекурсивно работать с ними.
          //Мы вызываем ту же функцию updateComments для массива replies.

          //Цель: проверить каждый ответ внутри c.replies, чтобы добавить новый newReply на правильном уровне вложенности, если он предназначен для одного из этих дочерних комментариев.
          return { ...c, replies: updateComments(c.replies) };
        }
        return c;
      });
    };
    //prev — это текущий массив комментариев.
    setComments((prev) => updateComments(prev));
  };
  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 2); // добавляем ещё 2 комментария
  };

  return (
    <section className='comments'>
      <div className='container'>
        <h3>Комментарии ({comments.length})</h3>

        <ul>
          {/* {comments.map((c, idx) => (
            <CommentItem key={idx} comment={c} addReply={addReply} />
          ))} */}
          {comments.slice(0, visibleCount).map((c, i) => (
            <CommentItem key={i} comment={c} addReply={addReply} />
          ))}
        </ul>
        {visibleCount < comments.length && <button onClick={handleShowMore}>Показать ещё</button>}

        <div className='comment-form'>
          <h2>Оставить комментарий</h2>
          <form onSubmit={handleSubmit}>
            <div className='comment-form__inputs'>
              <input
                type='text'
                name='name'
                value={formData.name}
                placeholder='Введите имя'
                onChange={handleChange}
              />
              <input
                type='email'
                name='email'
                value={formData.email}
                placeholder='Введите email'
                onChange={handleChange}
              />
            </div>
            <div className='comment-form__text'>
              <textarea
                name='text'
                value={formData.text}
                onChange={handleChange}
                placeholder='Комментарий'></textarea>
            </div>
            <div>
              <label>
                <input
                  type='checkbox'
                  name='saveInfo'
                  checked={formData.saveInfo}
                  onChange={handleChange}
                />
                Сохранить имя и email для следующего комментария
              </label>
            </div>
            <p className='result'>{msg}</p>
            <button type='submit'>Добавить комментарий</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default CommentsWithReplay;
