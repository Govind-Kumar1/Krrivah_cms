import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pkg from '@prisma/client';

const { PrismaClient } = pkg;

dotenv.config(); 

const app = express(); 
const prisma = new PrismaClient();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Sample route
app.get('/', (req, res) => {
  res.send('🟢 API is running...');
});

// Start server after DB connects
const startServer = async () => {
  try {
    await prisma.$connect();
    console.log('✅ PostgreSQL Database connected successfully!');
     
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('❌ Failed to connect to DB:', error.message);
    process.exit(1); // Exit the app if DB not connected
  }
};

startServer();
