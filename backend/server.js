const app = require("./app");

app.get("/", (req, res) => {
  res.send("<h1>Working Fine</h1>");
});

app.route("/users").get((req, res, next) => {
  res.status(200).json({
    users: [],
    success: false,
  });
});

app.listen(4001, () => {
  console.log(`Server is working on Port ${4001}`);
});