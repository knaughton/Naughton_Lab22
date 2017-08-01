var express = require('express');
var router = express.Router();

var favorite = [
  {img: "https://upload.wikimedia.org/wikipedia/en/7/70/Weezer_-_Blue_Album.png",
  songTitle: "Surf Wax America",
  songLyric:"You take your car to work, I'll take my board / And when you're out of fuel, I'm still afloat...Weezer"},

  {img: "https://upload.wikimedia.org/wikipedia/en/d/da/Third_eye_blind_self_titled.jpg",
  songTitle: "Motorcycle Drive By",
  songLyric:"I've never been so alone / And I've never been so alive...Third Eye Blind"},

  {img: "https://upload.wikimedia.org/wikipedia/en/f/f2/The_Glass_Passenger_%28Jack%27s_Mannequin_album_-_cover_art%29.jpg",
  songTitle: "Swim",
  songLyric:"You gotta swim, swim in the dark. There's no shame in drifting, feel the tide shifting and wait for the spark. You gotta swim, don't let yourself sink. Just find the horizon. I promise you it's not as far as you thing...Jack's Mannequin"},

  {img: "https://upload.wikimedia.org/wikipedia/en/4/46/Dusk_And_Summer.jpg",
  songTitle: "Vindicated",
  songLyric:"I am seeing in me now the things you swore you saw yourself...Dashboard Confessional"},

  {img: "https://upload.wikimedia.org/wikipedia/en/f/fb/Motion_City_Soundtrack_-_Even_If_It_Kills_Me_cover.jpg",
  songTitle: "It Had To Be You",
  songLyric:"It seemed like a dream / A beautiful scream / That echoed forever / And made us not afraid to feel a thing / And after it ends / We'll try to be friends / They say what doesn't kill us makes us who we are...Motion City Soundtrack"},
  ];

router.get('/random-lyric', function(req, res) {
  res.json(favorite[Math.floor(Math.random() * favorite.length)]);
});

// router.get('/lyrics', function(req, res) {
//   res.send('JavaScript is pretty neat');
// });

module.exports = router;
