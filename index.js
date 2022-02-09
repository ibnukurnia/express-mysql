const express = require("express");
const db = require("./dbConfig");
const routes = require("./routes");
const app = express();
const PORT = 8000;

app.use(express.json());

app.use("/product", routes);

app.listen(PORT, async () => {
  try {
    await db.authenticate().then(() => {
      console.log("db connected");
    });
    console.log(`http://localhost:${PORT}`);
  } catch (error) {
    console.log(error.message);
  }
});
