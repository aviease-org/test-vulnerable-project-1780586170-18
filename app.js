const express = require("express");
const app = express();
const { getUser } = require("./src/db");
app.get("/user/:id", getUser);
app.listen(3000, () => console.log("listening"));