import React from 'react';
import './MainPage.css';
import { Header, HeaderUnder } from '../Header/Header';
import { Footer } from '../Footer/Footer';

export function MainPage() {
  return (
    <main className="main-page">
      <div className="HeaderContainer">
        <Header />
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
            <img class="brend-image" src="/Svenska.png" alt="Бренд 2" />
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
      <section className="blog">
        <div className="blogitem" id="blog">
          <h2>Блог</h2>
          <div className="blog-list">
            <div className="blog-card">
              <div className="image-wrapper">
                <img src="/chair and sofa.png" alt="Блог 1" />
                <span className="category-label">Створіть Затишний Дім: 5 Порад з Вибору Меблів для Різних Кімнат</span> </div>
              <div className="card-content">
                <p>
                  Вибір меблів для вашого будинку – це не тільки питання стилю, але й комфорту та функціональності. У цьому пості ми розповімо, як підібрати ідеальні предмети для кожної кімнати вашого будинку, щоб створити затишний та гармонійний простір.
                </p></div>
              <button>Детальніше</button>
            </div>
            <div className="blog-card">
              <div className="image-wrapper">
                <img src="/sofa.png" alt="Блог 1" />
                <span className="category-label">Як Правильно Вибрати Освітлення для Різних Кімнат Вашої оселі</span> </div>
              <div className="card-content">
                <p>
                  Освітлення відіграє ключову роль у створенні комфортної атмосфери у вашому будинку. Правильно підібране освітлення не тільки підкреслює стиль інтер'єру, але й впливає на ваш настрій. Ми розповімо, як вибрати освітлення для кожної кімнати вашого будинку, щоб створити ідеальну атмосферу.
                </p></div>
              <button>Детальніше</button>
            </div>
          </div>
        </div>
      </section>
      <div className="line">
      <Footer />
        </div>
    </main>
  );
}
