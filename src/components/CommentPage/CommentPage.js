import React, { useState } from "react";
import "./CommentPage.css";

export function CommentPage() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="comment-page">

      
      <button className="back-btn" onClick={() => window.history.back()}>
        ← Назад
      </button>

      
      <div className="comment-form">

       
        <div className="stars">
          {[1,2,3,4,5].map((star) => (
            <span
              key={star}
              className={
                star <= (hover || rating) ? "star active" : "star"
              }
              onClick={() => setRating(star)}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(0)}
            >
              ★
            </span>
          ))}
        </div>

        <input type="text" placeholder="Тема" />
        <input type="text" placeholder="Ім’я" />
        <input type="email" placeholder="E-mail" />

        <textarea placeholder="Відгук"></textarea>

        
        <button 
          className="submit-btn"
          onClick={() => {
            console.log("Оценка:", rating);
            window.location.href = "/";
          }}
        >
          Відправити
        </button>

      </div>

    </div>
  );
}