// backend/server.js
import express from 'express';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite'; // Это правильный импорт, но убедитесь в установке пакета
import newsRoutes from './routes/news.js';

const app = express();
const PORT = 5000;

// Подключение к SQLite
const db = await open({
  filename: './database.sqlite',
  driver: sqlite3.Database
});

// Создаем таблицу, если её нет
await db.exec(`
  CREATE TABLE IF NOT EXISTS news (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    summary TEXT NOT NULL,
    category TEXT NOT NULL,
    date DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

app.use(express.json());
app.use('/api/news', newsRoutes);

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
  console.log('База данных: backend/database.sqlite');
});