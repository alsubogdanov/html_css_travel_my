import React, { useState, useEffect } from 'react';

function ReplyForm({ onSubmit, defaultName = '' }) {
  const [name, setName] = useState(defaultName);
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onSubmit({ name: name || 'Аноним', text: text.trim() });
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className='reply-form'>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='Ваше имя'
      />
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder='Ваш комментарий'
      />
      <button type='submit'>Отправить</button>
    </form>
  );
}

export default ReplyForm;
