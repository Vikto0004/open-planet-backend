import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  console.log("hello");
  res.json("Hello, World!");
});

app.listen(port, () => {
  console.log("port run", port);
});
