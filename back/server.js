require('dotenv').config({ path: './config.env' });
const express = require('express');
const auth = require('./routes/auth');
const app = express();

app.use(express.json());

app.use('/api/auth', auth);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
