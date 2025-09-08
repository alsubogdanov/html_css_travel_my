import { NavLink } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import search from '../assets/imgs/search.svg';

function Header({ onSearchClick }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    // функция, которая обрабатывает событие прокрутки
    const handleScroll = () => {
      if (window.scrollY > 50) {
        // если прокрутка страницы более 50 пикселей по вертикали
        setScrolled(true); // меняем состояние на true
      } else {
        setScrolled(false); // иначе — на false
      }
    };

    // подписываемся на событие прокрутки окна браузера
    window.addEventListener('scroll', handleScroll);

    // функция очистки — удаляет обработчик, когда компонент уходит со страницы,
    // чтобы избежать утечек памяти и лишних вызовов
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const nav = [
    { name: 'home', url: '/' },
    { name: 'about', url: '/about' },
    { name: 'blog', url: '/blog' },
    { name: 'gallery', url: '/gallery' },
    { name: 'contact', url: '/contact' },
    { name: 'FAQ', url: '/faq' },
  ];
  const navMenu = nav.map((item) => <NavLink to={item.url}>{item.name}</NavLink>);
  return (
    <header
      style={{
        backgroundColor: scrolled ? 'rgba(0, 0, 0, 0.8)' : 'transparent',
      }}>
      <div className='header__wrap d-flex jcsb g2'>
        <div className='logo'>
          <img src='/images/main-logo-light.png' alt='' />
        </div>
        <nav className='d-flex g2'>{navMenu}</nav>
        <div className='search'>
          <img src={`${search}`} alt='' onClick={onSearchClick} />
        </div>
      </div>
    </header>
  );
}

export default Header;
