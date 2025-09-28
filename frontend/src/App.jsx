import React, { useState, useEffect } from 'react';
import NewsCard from '../components/NewsCard';


function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/news')
      .then(res => res.json())
      .then(data => setNews(data))
      .catch(err => console.error("Ошибка загрузки новостей:", err));
  }, []);

  return (
    <div>
      <h1>Новостной портал</h1>
      <div className="news-list">
        {news.map(item => (
          <NewsCard key={item.id} news={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
