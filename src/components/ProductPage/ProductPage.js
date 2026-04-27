import React, { useState } from "react";
import "./ProductPage.css";
import { Header, HeaderUnder } from "../Header/Header";
import { useNavigate } from "react-router-dom";
import { Footer } from "../Footer/Footer";

export function ProductPage() {
  const [count, setCount] = useState(1);
  const [mainImage, setMainImage] = useState("/chair1.png");
  const navigate = useNavigate();



const [liked, setLiked] = useState([false, false, false, true]);

const toggleLike = (index) => {
  const copy = [...liked];
  copy[index] = !copy[index];
  setLiked(copy);
};



  const images = [
    "/chair1.png",
    "/chair2.png",
    "/chair1.png",
    "/chair2.png"
  ];

  return (
    <div className="product-page">

      
      <div className="HeaderContainer">
        <Header />
      </div>

      
      <div className="product-container">

        
        <div className="product-images">
          <div className="main-images">
            <img src={mainImage} alt="chair" />
            <img src="/chair2.png" alt="chair" />
          </div>

          <div className="small-images">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="small"
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
        </div>
        <div className="product-info">
          <h2>BISTRUP</h2>
          <p>Стілець обідній BISTRUP оливковий/дуб</p>

          <div className="rating">★★★★★ (2)</div>

          <h1 className="price">100$ <span>/ шт</span></h1>
          <p className="old-price">150$ / шт</p>

          <p className="delivery-title">Доставка чи самовивіз?</p>

          <div className="delivery-box">Доставка • В наявності</div>
          <div className="delivery-box">В магазинах • В наявності</div>

          <div className="buy-block">
            <div className="counter">
              <button onClick={() => setCount(count > 1 ? count - 1 : 1)}>-</button>
              <span>{count}</span>
              <button onClick={() => setCount(count + 1)}>+</button>
            </div>

            <button className="buy-btn">Додати в кошик</button>
          </div>
        </div>
      </div>

      
      <div className="tabs">
        <span><li><a href="#characteristic0">Опис</a></li></span>
        <span><li> <a href="#characteristic">Характеристики</a> </li></span>
        <span><li> <a href="#characteristic1">Відгуки</a> </li></span>
        <span><li> <a href="#characteristic2">Схожі товари</a></li></span>
      </div>

      
      <div className="description-section">

        <div className="description-left" id="characteristic0">
          <h2>Опис</h2>

          <p>
            Стілець BISTRUP – це стильне поєднання сучасного дизайну та природних матеріалів,
            яке стане справжньою окрасою вашої кухні чи їдальні.
          </p>

          <p>
            Його елегантний оливковий колір додає свіжості інтер’єру,
            а ніжки з натурального дуба підкреслюють витончений скандинавський стиль.
          </p>

          <p>
            Обідній стілець з м’яким сидінням і спинкою з тканини оливкового кольору.
            Ніжки зі сталі під колір дуба.
          </p>

          <p><strong>Артикул: 3605035</strong></p>

          <h3>Пов’язані статті в блозі</h3>

          <div className="blog-container">
            <div className="blog-item">
              <img src="/5ideas.png" alt="" />
              <p>5 ідей по організації простору</p>
            </div>

            <div className="blog-item">
              <img src="/redchairs.png" alt="" />
              <p>Барвисті обідні стільці для сучасної оселі</p>
            </div>

            <div className="blog-item">
              <img src="/bluechair.png" alt="" />
              <p>Ефектний обідній стілець для їдальні</p>
            </div>
          </div>
        </div>

        <div className="description-right">
          <img src="/chair2.png" alt="chair" />
        </div>

      </div>




      
<div className="char-section" id="characteristic">
  <h2>Характеристики</h2>

  <div className="char-table">

    <div className="row">
      <div>Матеріал</div>
      <div>ППУ, ПУ (поліуретан), Фанера, Поліестер, Сталь</div>
    </div>

    <div className="row">
      <div>Сидіння</div>
      <div>Піноматеріал: ПУ (поліуретан), густина 24 кг/м³</div>
    </div>

    <div className="row">
      <div>Спинка</div>
      <div>Піноматеріал: ПУ (поліуретан)</div>
    </div>

    <div className="row">
      <div>Колір</div>
      <div>Оливковий, Дуб</div>
    </div>

    <div className="row">
      <div>Розмір в зібраному стані</div>
      <div>ширина: 44 см, висота: 87 см, глибина: 53 см</div>
    </div>

    <div className="row">
      <div>Висота сидіння</div>
      <div>47 см</div>
    </div>

    <div className="row">
      <div>Інструкція по збірці</div>
      <div>Самостійна збірка</div>
    </div>

    <div className="row">
      <div>Розмір в розібраному стані</div>
      <div>ширина: 62 см, довжина: 42 см, висота: 66 см</div>
    </div>

    <div className="row">
      <div>Свідоцтво про екологію</div>
      <div>FSC® 100%</div>
    </div>

    <div className="row">
      <div>Вага</div>
      <div>4 кг</div>
    </div>

    <div className="row">
      <div>Протестовано для ваги</div>
      <div>110 кг</div>
    </div>

    <div className="row">
      <div>Виробник</div>
      <div>HYGGE</div>
    </div>

  </div>
</div>






<div className="reviews-section" id="characteristic1">

  <h2>Відгуки</h2>

  <div className="reviews-box">

    <div className="reviews-top">
      <div className="reviews-rating">
        <span className="stars">★★★★★</span>
        <span className="score">5/5</span>
        <span className="label">Оцінка користувачів</span>
      </div>

      <button 
  className="review-btn" 
  onClick={() => navigate("/comment")}>
    Залишити відгук
    </button>

    </div>
    <hr />

    
    <div className="review-item">
      <div className="review-left">
        <h4>Олена</h4>
        <div className="stars">★★★★★ <span>5/5</span></div>
      </div>

      <div className="review-text">
        Цей стілець став справжньою знахідкою для нашої кухні! Дуже сподобався дизайн – ніжки з дуба надають стільцю стильного та водночас природного вигляду, а оливковий колір чудово вписався в інтер'єр. Сидіти на ньому зручно, навіть під час довгих сімейних обідів. Також легко чиститься, що для нас дуже важливо з маленькими дітьми. Однозначно рекомендую!
      </div>
    </div>

    <div className="review-item">
      <div className="review-left">
        <h4>Андрій</h4>
        <div className="stars">★★★★★ <span>5/5</span></div>
      </div>

      <div className="review-text">
        Придбали кілька стільців BISTRUP для нашої їдальні, і вони перевершили всі очікування. Виглядають дуже сучасно та якісно зроблені. Особливо хочеться відзначити зручність – ергономічна спинка дійсно підтримує спину, тож сидіти на них комфортно навіть протягом тривалого часу. Якість матеріалів на висоті, а дубові ніжки надають стільцю додаткової міцності. Чудовий вибір для тих, хто шукає стильні та практичні меблі!
      </div>
    </div>

  </div>
</div>





<div className="similar-section" id="characteristic2">
  <h2>Схожі товари</h2>

  <div className="slider">
    <button className="arrow left">‹</button>

    <div className="similar-container">

      {[ 
        { img: "/lamp.png", title: "JULIUS", desc: "Лампа настільна JULIUS д.19см в.39см натуральний", price: "60$", old: "100$", discount: true },
        { img: "/pillow.png", title: "FLADSTJERNE", desc: "Подушка FLADSTJERNE 30x30см в асортименті", price: "60$", old: "100$" },
        { img: "/sofa1.png", title: "VEJLBY", desc: "Софа-ліжко VEJLBY з шезлонгом св.пісочний", price: "60$", old: "100$", discount: true },
        { img: "/chair1.png", title: "BISTRUP", desc: "Стілець обідній BISTRUP оливковий/дуб", price: "100$", old: "150$", discount: true }
      ].map((item, index) => (
        
        <div className="product-card" key={index}>

          
          <div
            className={`favorite ${liked[index] ? "active" : ""}`}
            onClick={() => toggleLike(index)}
          >
            ♥
          </div>

          <img src={item.img} alt="" />

          {item.discount && (
            <>
              <div className="discount">-40%</div>
              <div className="new">Новинка</div>
            </>
          )}

          <h4>{item.title}</h4>
          <p>{item.desc}</p>

          <div className="stars">★★★★★</div>

          <div className="price">{item.price}</div>
          <div className="old-price">{item.old}</div>

          <div className="status">
            <span className="red-dot"></span> Доставка
            <br />
            <span className="green-dot"></span> В наявності
          </div>

        </div>
      ))}

    </div>

    <button className="arrow right">›</button>
  </div>
</div>
<Footer/>
  </div>
  );
}