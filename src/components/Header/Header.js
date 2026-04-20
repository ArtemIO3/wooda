import React, { useState } from 'react';
import { MapPin, ChevronDown, Heart, User, ShoppingCart } from 'lucide-react';
import './Header.css';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <div className="blue-block"></div>

      <div className="header">

        <div className="logo">
          <div className="menu">
            <button
              className={`burger ${menuOpen ? "open" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            <ul className={`menu-list ${menuOpen ? "open" : ""}`}>
              <li><a href="/" className="menu-item" onClick={() => setMenuOpen(false)}>Главная</a></li>
              <li><a href="#" className="menu-item" onClick={() => setMenuOpen(false)}>О нас</a></li>
              <li><a href="#" className="menu-item" onClick={() => setMenuOpen(false)}>Команда</a></li>
              <li><a href="#" className="menu-item" onClick={() => setMenuOpen(false)}>Контакты</a></li>
            </ul>

          </div>

          <p>Wooda</p>
        </div>

        <input className="Search" type="text" placeholder="Поиск..." />

        <Icon />
      </div>
    </div>
  );
}

export function Icon() {
  return (
    <div className="icon-container">

      <div className="icon-item">
        <Heart size={24} />
        <span>Обране</span>
      </div>

      <div className="icon-item">
        <User size={24} />
        <span>Вхід</span>
      </div>

      <div className="icon-item">
        <ShoppingCart size={24} />
        <span>Кошик</span>
      </div>

    </div>
  );
}

export function HeaderUnder() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="header-under-container">

      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{ display: 'flex', alignItems: 'center', gap: 6 }}
      >
        <MapPin size={18} />
        <span>Wooda Київ ТЦ Променада</span>
        <ChevronDown
          size={16}
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: '0.3s'
          }}
        />
      </div>

      <nav>
        <ul className="Nav">
          <li><a href="#">Блог</a></li>
          <li><a href="#">Магазини</a></li>
          <li><a href="#">Питання-відповіді</a></li>
          <li><a href="#">Робота</a></li>
        </ul>
      </nav>

    </div>
  );
}