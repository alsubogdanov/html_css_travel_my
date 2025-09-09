import React, { useState } from 'react';
import arrow from '../assets/imgs/arrow-down.svg';

function FAQ() {
  const faqData = [
    {
      question: 'Что такое React?',
      answer: 'React — это библиотека JavaScript для создания пользовательских интерфейсов.',
    },
    {
      question: 'Что такое JSX?',
      answer: 'JSX — это синтаксис, похожий на HTML, который используется в React для описания UI.',
    },
    {
      question: 'Как создать компонент в React?',
      answer: 'Можно создать функциональный или классовый компонент с помощью функций или классов.',
    },
  ];
  //   const [openIndex, setOpenIndex] = useState(null);

  // теперь массив открытых индексов
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleIndex = (index) => {
    if (openIndexes.includes(index)) {
      // если уже открыт → закрываем
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      // если закрыт → добавляем в массив
      setOpenIndexes([...openIndexes, index]);
    }
  };
  return (
    <div className='faq'>
      {faqData.map((faq, index) => {
        //   const isOpen = openIndex === index;
        const isOpen = openIndexes.includes(index);

        return (
          <div key={index} className={`faq-item ${isOpen ? 'active' : ''}`}>
            <div
              className='faq-question d-flex jcsb'
              // Если текущий открытый элемент (openIndex) уже равен индексу элемента, по которому кликнули, значит пользователь хочет закрыть этот элемент. Поэтому ставим null.
              // Если текущий открытый элемент не равен этому индексу, значит пользователь хочет открыть этот элемент, поэтому ставим index.
              //   onClick={() => setOpenIndex(openIndex === index ? null : index)}
              onClick={() => toggleIndex(index)}
              style={{ cursor: 'pointer', fontWeight: 'bold', margin: '10px 0' }}>
              <h2>{faq.question}</h2>
              <img src={arrow} alt='' className='faq-arrow' />
            </div>
            {isOpen && (
              <div className='faq-answer' style={{ padding: '5px 0 15px 10px' }}>
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default FAQ;
