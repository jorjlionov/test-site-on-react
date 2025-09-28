// backend/routes/news.js
import express from 'express';
import { getDb } from '../db.js';

const router = express.Router();

// GET все новости
router.get('/', async (req, res) => {
  const db = await getDb();
  const news = await db.all('SELECT * FROM news ORDER BY date DESC');
  res.setHeader('Content-Type', 'application/json; charset=utf-8'); // 
  res.json(news);
});

// POST новая новость
router.post('/', async (req, res) => {
  const { title, summary, category } = req.body;
  
  if (!title || !summary || !category) {
    return res.status(400).json({ error: 'Все поля обязательны' });
  }

  const db = await getDb();
  await db.run(
    'INSERT INTO news (title, summary, category) VALUES (?, ?, ?)',
    [title, summary, category]
  );

  const news = await db.get('SELECT * FROM news WHERE id = last_insert_rowid()');
  res.status(201).json(news);
});

export default router;