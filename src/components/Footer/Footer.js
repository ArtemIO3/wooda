import './Footer.css';

export function Footer() {
  return (
    <section className="footer1">

      <section className="features">
        <div className="feature-item">
          <img src="SofaLine.png" alt="chair" />
          <p>
            Різноманітний вибір сучасних рішень для декорування та облаштування
            як інтер’єру, так і екстер’єру.
          </p>
        </div>

        <div className="feature-item">
          <img src="flag.png" alt="flag" />
          <p>
            Наш стиль нагадує скандинавський, але ми виходимо за межі одного
            напрямку, пропонуючи універсальні та функціональні варіанти.
          </p>
        </div>

        <div className="feature-item">
          <img src="title.png" alt="doc" />
          <p>
            Ми орієнтовані на різні категорії покупців, пропонуючи товари від
            середньо-низьких до середньо-високих цін.
          </p>
        </div>
      </section>

      <section className="subscribe">
        <div className="container" id="subscribe">
          <h2>
            Підпишись на розсилку новин та отримай код на безкоштовну доставку
            для свого першого замовлення!
          </h2>

          <p>
            Підпишіться на нашу розсилку та отримайте бонус! 10% знижка на перше
            замовлення, ексклюзивні пропозиції та ранній доступ до розпродажів.
            Введіть свій email нижче та почніть отримувати переваги!
          </p>

          <form className="subscribe-form">
            <input type="text" placeholder="Ім'я" />
            <input type="email" placeholder="E-mail" />
            <button type="submit">Поділитися</button>
          </form>
        </div>
      </section>

      <footer className="footer">

        <div className="footer-top">
          <div className="footer-column">
            <h4>Категорії товарів</h4>
            <ul>
              <li><a href="/bedroom">Спальні</a></li>
              <li><a href="/bathroom">Ванні</a></li>
              <li><a href="/office">Офіс</a></li>
              <li><a href="/living-room">Вітальні</a></li>
              <li><a href="/kitchen">Кухня та їдальня</a></li>
              <li><a href="/storage">Зберігання</a></li>
              <li><a href="/windows">Для вікон</a></li>
              <li><a href="/garden">Для саду</a></li>
              <li><a href="/home">Для дому</a></li>
              <li><a href="/all-categories">Усі категорії</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Інформація</h4>
            <ul>

              <li>Зворотній зв'язок</li>
              <li>Можливості і графік роботи</li>
              <li>Умови та положення</li>
              <li>Доставка</li>
              <li>Політика конфіденційності</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Wooda</h4>
            <ul>
              <li><a href="/about">Про нас</a></li>
              <li><a href="/careers">Робота в Wooda</a></li>
              <li><a href="#subscribe">Підписка на розсилку</a></li>
              <li><a href="#blog">Блог</a></li>
              <li><a href="/b2b">B2B</a></li>
              <li><a href="/links">Корисні посилання</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Центральний офіс</h4>
            <p>
              м. Київ<br />
              вул. Івана Павла, 21<br />
              123456
            </p>

            <p>
              <strong>Wooda B2B</strong><br />
              Тел: +380123456789<br />
              Імейл: b2b@wooda.com
            </p>

            <p>
              <strong>Зв'яжіться з нами</strong><br />
              email@wooda.com<br />
              Тел: +380123456789
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="payments">
            <img src="visa.png" alt="visa" />
            <img src="mastercard.png" alt="mc" />
            <img src="google-pay.png" alt="gpay" />
          </div>

          <div className="socials">
            <img src="telegram-app.png" alt="tg" />
            <img src="instagram-new.png" alt="ig" />
            <img src="facebook.png" alt="fb" />
            <img src="youtube-play.png" alt="yt" />
          </div>
        </div>

      </footer>
    </section>
  );
}