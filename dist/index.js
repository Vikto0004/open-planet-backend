import express from "express";
const app = express();
const port = 3000;
app.post("/", (req, res) => {
    console.log("hello");
    res.send("Hello, World!");
});
app.listen(port, () => {
    console.log("port run", port);
});
//# sourceMappingURL=index.js.map