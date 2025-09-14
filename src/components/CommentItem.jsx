import React, { useState, useEffect } from 'react';

import ReplyForm from './ReplyForm';

function CommentItem({ comment, addReply }) {
  // Рекурсивный компонент для комментариев и их ответов
  //comment — объект одного комментария. Он может содержать поле replies, которое хранит массив ответов.
  //addReply — функция, которая добавляет новый ответ к комментарию. Она передаётся сверху из родительского компонента (например, CommentsWithReplay).

  //   const [showReply, setShowReply] = useState(false); //показывать или скрывать форму для ответа на конкретный комментарий
  const [showReplyForm, setShowReplyForm] = useState(false); // показывать или скрывать форму для ответа
  const [showReplies, setShowReplies] = useState(false); // показывать или скрывать все реплай

  const handleReplySubmit = (reply) => {
    //reply — объект с полями { name, text }, который приходит из формы ReplyForm.
    //Мы вызываем addReply(reply, comment), передавая ответ и ссылку на текущий комментарий. Это позволяет родителю добавить ответ в правильное место в массиве комментариев.
    //После отправки мы скрываем форму (setShowReply(false)).
    addReply(reply, comment);
    //  setShowReply(false);
    setShowReplyForm(false);
    setShowReplies(true); // после добавления ответа показываем реплай
  };

  return (
    <li className='comment'>
      <p>
        <strong>{comment.name}</strong> — <small>{comment.date}</small>
      </p>
      <p>{comment.text}</p>

      <div className='comment-actions'>
        <button onClick={() => setShowReplyForm(!showReplyForm)}>
          {showReplyForm ? 'Отмена' : 'Ответить'}
        </button>

        {comment.replies && comment.replies.length > 0 && (
          <button onClick={() => setShowReplies(!showReplies)}>
            {showReplies ? 'Скрыть ответы' : 'Показать ответы'} ({comment.replies.length})
          </button>
        )}
      </div>

      {showReplyForm && <ReplyForm onSubmit={handleReplySubmit} />}

      {showReplies && comment.replies && comment.replies.length > 0 && (
        <ul className='replies'>
          {/* Рекурсивно отображаем ответы */}
          {comment.replies.map((r, idx) => (
            <CommentItem
              key={idx}
              comment={r}
              addReply={addReply} // рекурсивно передаём функцию
            />
          ))}
        </ul>
      )}
    </li>
  );
}

export default CommentItem;
