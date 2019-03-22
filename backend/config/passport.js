require('dotenv').config();

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const User = require('../models/User');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      //Checking if user exists in database
      User.findOne({ googleId: profile.id }).then(currentUser => {
        if (currentUser) {
          // IF user already exists
          console.log('user is', currentUser);
          done(null, currentUser);
        } else {
          //ELSE Create new user in the database
          new User({
            username: profile.displayName,
            googleId: profile.id,
            avatar: profile.photos[0].value
          })
            .save()
            .then(newUser => {
              console.log('new user created' + newUser);
              done(null, newUser);
            });
        }
      });
    }
  )
);
