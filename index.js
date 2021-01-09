require("./config/dotenv");
const express = require("express");
const app = express();

app.use(express.json());

app.use("/", require("./src/router.js"));

app.listen(process.env.PORT, () => {
  console.log(`server started! ${process.env.PORT} 👀 `);
});
