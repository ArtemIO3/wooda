import React, { useState } from 'react';
import { MapPin, ChevronDown, Heart, User, ShoppingCart, X } from 'lucide-react';
import './Header.css';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const categories = [
    "Вітальня",
    "Кухня",
    "Спальня",
    "Ванна",
    "Кабінет",
    "Двір"
  ];

  return (
    <header>
      <div className="blue-block"></div>

      <div className="header">
        <div className="logo">
          <div className="menu">
            <button className="burger" onClick={() => setMenuOpen(true)}>
              <span></span>
              <span></span>
              <span></span>
            </button>
            <div className={`menu-overlay ${menuOpen ? "open" : ""}`}>
              <div className="menu-content">

                <div className="menu-header">
                  <div className="menu-logo-container">
                    <p className="menu-logo-img">Wooda</p>
                  </div>
                  <button className="close-button" onClick={() => setMenuOpen(false)}>
                    <X size={28} strokeWidth={1} />
                  </button>
                </div>
                <hr className="menu-divider" />
                <ul className="menu-list-items">
                  {[...categories ].map((item, index) => (
                    <li key={index}>
                      <a href="#" className="menu-item-link" onClick={() => setMenuOpen(false)}>
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>

              </div>
            </div>
            {menuOpen && <div className="backdrop" onClick={() => setMenuOpen(false)}></div>}
          </div>

          <p className="brand-name">Wooda</p>
        </div>

        <input className="Search" type="text" placeholder="Поиск..." />
        <Icon />
      </div>
      <HeaderUnder />
    </header>
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
        className="location-selector"
        onClick={() => setIsOpen(!isOpen)}
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
