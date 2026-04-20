import React from 'react';
import './MainPage.css';
import { Header, HeaderUnder } from '../Header/Header';

export function MainPage() {
  return (
    <main className="main-page">
      <div className="HeaderContainer">
        <Header />
        <hr />
        <HeaderUnder />
      </div>

      <div className="hero-container">
        <img src="/image.png" alt="Осінні знижки на меблі" className="image" />
        <div className="text-overlay">
          <h1>Осінь на вашому боці: Знижки до 50% на меблі!</h1>
          <p>Змініть свій інтер'єр зараз!</p>
        </div>
      </div>

      <hr />

      <section className="AboutUs">
        <div className="about-image">
          <img src="/AboutUS.png" alt="Наше виробництво" />
        </div>

        <div className="about-content">
          <h2>Про нас</h2>
          <p>
            У <strong>Wooda</strong> ми робимо все можливе, щоб ваш будинок став більш затишним та стильним. 
            Ми пропонуємо ретельно відібрані меблі від надійних виробників, забезпечуючи відмінну якість 
            та сучасний дизайн. Наша мета – надати вам широкий вибір, який відповідає різним смакам та бюджетам.
          </p>
          <p>
            Ми пишаємось тим, що наш асортимент включає як класичні, так і сучасні рішення для будь-якого інтер'єру. 
            Наша команда професіоналів завжди готова допомогти вам з вибором. У Wooda ми прагнемо створити 
            ідеальні умови для комфортного проживання. Дякуємо, що вибираєте нас!
          </p>
        </div>
      </section>

      <hr />

<section className="Category">
  <h2>Категорії</h2>
  <div className="category-container">
    <div className="category-item">
      <img src="/Спальня.png" alt="Спальня" />
      <span className="category-label">Спальня</span>
    </div>

    <div className="category-item">
      <img src="/Ванна.png" alt="Ванна" />
      <span className="category-label">Ванна</span>
    </div>

    <div className="category-item">
      <img src="/Офіс.png" alt="Офіс" />
      <span className="category-label">Офіс</span>
    </div>

    <div className="category-item">
      <img src="/Вітальня.png" alt="Вітальня" />
      <span className="category-label">Вітальня</span>
    </div>

    <div className="category-item">
      <img src="/Кухня.png" alt="Кухня" />
      <span className="category-label">Кухня</span>
    </div>

    <div className="category-item">
      <img src="/Для саду.png" alt="Для саду" />
      <span className="category-label">Для саду</span>
    </div>
  </div>
</section>
<section className="Brend">
  <div className="brend-container">
    <div className="brend-item">
      <img src="/Hastens.png" alt="Бренд 1" />
      <p>Бренд, відомий своїми розкішними матрацами, які роблять із натуральних матеріалів з акцентом на якість та комфорт.</p>
    </div>
    <div className="brend-item">
      <img  class="brend-image" src="/Svenska.png" alt="Бренд 2" />
      <p>Бренд пропонує широкий вибір меблів та товарів для дому, що поєднують стиль та функціональність.</p>  
    </div>
    <div className="brend-item">
      <img src="/Fritz.png" alt="Бренд 3" />
      <p>Знаменита меблева компанія, що виробляє дизайнерські меблі та аксесуари, включаючи культові вироби від відомих дизайнерів.</p>
    </div>
      <div className="brend-item">
      <img src="/Muuto.png" alt="Бренд 4" />
      <p>Пропонує сучасні меблі, освітлення та аксесуари з акцентом на скандинавський дизайн та простоту.</p>
    </div>
  </div>
</section>
    </main>
  );
}
