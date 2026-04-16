import './Header.css';
import React, { useState } from 'react';
import { MapPin, ChevronDown } from 'lucide-react';
import { MainPage } from '../MainPage/MainPage';

import { Heart, User, ShoppingCart } from 'lucide-react';
export function Header() {
  return <div>
    <div className="blue-block"></div>
    <div className="header">
      <div className="logo">
        <div className="menu">
          <input type="checkbox" id="burger-checkbox" className="burger-checkbox" />
          <label for="burger-checkbox" className="burger"></label>
          <ul className="menu-list">
            <li><a href={<MainPage/>} className="menu-item">Главная</a></li>
            <li><a href="#" className="menu-item">О нас</a></li>
            <li><a href="#" className="menu-item">Команда</a></li>
            <li><a href="#" className="menu-item">Контакты</a></li>
          </ul>
        </div>
        <p>Wooda</p>
      </div>
      <input className='Search' type="text" name="query" placeholder="Поиск..."></input>  
      <Icon />
    </div>
  </div>
};

export function Icon(){
return <div className="icon-container">
    <div className="icon-item">
    
         {/* Иконка Серца */}
        <Heart color="#333" size={24} strokeWidth={1.5} />
        <span>Обране</span>
      </div>
      {/* Иконка Вход */}
      <div className="icon-item">
        <User color="#333" size={24} strokeWidth={1.5} />
        <span>Вхід</span>
      </div>
      {/* Иконка Корзина */}
      <div className="icon-item">
         
            <ShoppingCart color="#333" size={24} strokeWidth={1.5} />
            <span>Кошик</span>
      </div>
      </div>
};
export function HeaderUnder() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="header-under-container">
      <div 
        className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-all"
        style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <MapPin size={18} />
        
        <span style={{ fontSize: '14px', fontWeight: '500', margin: '0 5px' }}>
          Wooda Київ ТЦ Променада
        </span>
         <ChevronDown 
          size={16} 
          style={{ 
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', 
            transition: 'transform 0.3s' 
             
          }} 
        />
      </div>
      <div>
        <nav>
          <ul className='Nav'>
            <li><a href="#">Блог</a></li>
            <li><a href="#">Магазини</a></li>
            <li><a href="#">Питання-відповіді</a></li>
            <li><a href="#">Робота</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}