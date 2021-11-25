const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("This is the home page!");
});

app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  res.send(`<h1>You are browsing the ${subreddit} subreddit</h1>`);
});

app.get("/r/:subreddit/:postId", (req, res) => {
  const { subreddit, postId } = req.params;
  res.send(`<h1>Viewing post ID ${postId} and ${subreddit} subreddit</h1>`);
});

app.post("/cats", (req, res) => {
  res.send("POST REQUEST TO /cats now...");
});

app.get("/cats", (req, res) => {
  res.send("MEON!");
});

app.get("/dogs", (req, res) => {
  res.send("WOOF!");
});

app.get("/search", (req, res) => {
  const { q } = req.query;
  res.send(`<h1>search result for: ${q}</h1>`);
});

app.listen(3000, () => {
  //   console.log(`Example app listening at http://localhost:${port}`);
  console.log("LISTENING ON PORT 3000!");
});
