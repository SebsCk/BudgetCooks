require('dotenv').config();
const express = require('express');
const cors    = require('cors');
const db      = require('./db');

const authRoutes      = require('./routes/auth');
const recipeRoutes    = require('./routes/recipes');
const commentRoutes   = require('./routes/comments');
const challengeRoutes = require('./routes/challenges');
const userRoutes      = require('./routes/users');

const app  = express();
const PORT = process.env.PORT || 4000;

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json());

app.use('/auth',         authRoutes);
app.use('/api/recipes',  recipeRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/challenges', challengeRoutes);
app.use('/api/users',    userRoutes);

app.get('/health', (req, res) => res.json({ status: 'ok' }));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({ error: err.message || 'Internal server error' });
});

async function start() {
  try {
    await db.query('SELECT 1');
    console.log('MySQL connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (err) {
    console.error('Failed to connect to MySQL:', err.message);
    process.exit(1);
  }
}

start();
