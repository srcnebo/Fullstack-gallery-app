require('dotenv').config();

const http = require('http');
const express = require('express');
const passport = require('passport');
const cookieSession = require('cookie-session');
const mongoose = require('mongoose');
const path = require('path');
const morgan = require('morgan');
const postRoutes = require('./backend/routes/posts');
const authRoutes = require('./backend/routes/auth2.0');
const profileRoutes = require('./backend/routes/profile');
require('./backend/config/passport');

const app = express();

//Connect to mongodb
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true }, () => {
  console.log('connected to mongodb');
});

app.use(require('morgan')('combined'));

// upload
app.use(require('body-parser').urlencoded({ extended: false }));
app.use(require('body-parser').json());
app.use(
  cookieSession({
    keys: [process.env.COOKIE_KEY],
    maxAge: 30 * 24 * 60 * 60 * 1000 // 30 days validity
  })
);

// Initialize passport
app.use(passport.initialize());
app.use(passport.session());

// Setup routes
app.use('/api/v1/posts', postRoutes);
app.use('/auth', authRoutes);
app.use('/api/v1/profile', profileRoutes);

app.use('/uploads', express.static('uploads'));
app.use(morgan('common'));
//! testing displaying the Home route
// app.get('/', (req, res) => {
//   console.log('Hello');
//   res.send();
// });

//TODO: ---- connect to the frontend ----- //
// app.use(express.static('../frontend/public/index.html'));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
app.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('Server is running...');
});
