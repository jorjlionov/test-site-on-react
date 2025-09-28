// frontend/src/components/NewsCard.jsx
import React from 'react';

function NewsCard({ news }) {
  return (
    <div className="news-card">
      <h2>{news.title}</h2>
      <p>{news.summary}</p>
      <span className="category">{news.category}</span>
      <small>{news.date}</small>
    </div>
  );
}

export default NewsCard;