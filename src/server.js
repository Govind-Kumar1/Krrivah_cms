const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const errorHandler = require('./middlewares/errorHandlers');
const heroBrandRoutes = require('./routes/HeroBrandRoutes'); // ✅ import route

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/hero-brands', heroBrandRoutes); // ✅ HeroBrand route
app.get("/", (req, res) => {
  res.send("Krrivah CMS Backend is Running ");
});

// Error handler middleware
app.use(errorHandler);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
