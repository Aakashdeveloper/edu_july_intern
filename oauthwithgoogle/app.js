const express = require('express');
const app = express();
const session = require('express-session');
const passport = require('passport');
const port = process.env.PORT || 9800;
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

//start passport
app.use(passport.initialize());
app.use(passport.session());

app.use(session({
    secret: 'SUPERSECRET',
    resave: false,
    saveUninitialized: true
}))

app.get('/',(req,res) => {
    res.send('<a href="/auth/google">Login With Button</a>')
})

app.get('/profile', (req,res) => {
    res.send(userprofile)
})

app.get('/error',(req,res) => {
    res.send('Error While Login')
})

passport.serializeUser(function(user,cb){
    cb(null,user)
})


passport.use(new GoogleStrategy({
    clientID: '1001095129364-m4l35p2r5rqobhajmr87kafkeeupi3tt.apps.googleusercontent.com',
    clientSecret: 'RkyMKMurN99jifcYMLoHhDa8',
    callbackURL: "http://localhost:9800/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
       userprofile = profile;
       return done(null,userprofile)
  }
));

app.get('/auth/google',
    passport.authenticate('google',{scope: ['profile','email']}
));

app.get('/auth/google/callback',
  passport.authenticate('google', {failureRedirect:'/'}),
  function(req,res){
      res.redirect('/profile');
  }
)

app.listen(port,() => {
    console.log(`App is running on port ${port}`)
})