const app = require("express")();
const cors = require("cors");

const PORT = process.env.PORT || 3000;

app.use(cors());

app.get("/", (_req, res) => {
  res.send("Test!!!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
