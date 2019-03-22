const passport = require('passport');
const router = require('express').Router();

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

router.get(
  '/google',
  passport.authenticate(
    'google',
    {
      scope: ['profile']
    },
    () => {
      console.log('from google route');
    }
  )
);

router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    // Successful authentication, redirect home.
    // res.send(req.user);
    res.redirect('/profile');
  }
);

module.exports = router;
