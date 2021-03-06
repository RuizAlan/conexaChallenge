require('dotenv').config({ path: './config.env' });
const express = require('express');
const connectDB = require('./config/db');
const auth = require('./routes/auth');
const private = require('./routes/private');
const posts = require('./routes/posts');
const photos = require('./routes/photos');
const errorHandler = require('./middleware/error');

// Connect DB
connectDB();

const app = express();

app.use(express.json());

app.use('/api/auth', auth);
app.use('/api/private', private);
app.use('/api/posts', posts);
app.use('/api/photos', photos);

// Error Handler (Should be last piece of middleware)
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () =>
    console.log(`Server running on port ${PORT}`)
);

process.on('unhandledRejection', (err, promise) => {
    console.log(`Logged Error: ${err}`);
    server.close(() => process.exit(1));
});
