import express from "express";
import mongoose from "mongoose";
const app = express();
const PORT = 2312;
app.get("/", (req, res) => {
  res.end("NeoCommerce Backend");
});
mongoose
  .connect(
    "mongodb+srv://shreekarsharma:evImCOzTRlG4wESv@neocommercecluster.tnqchkc.mongodb.net/"
  )
  .then(() => {
    console.log("database is connected");
  })
  .catch((err) => {
    console.error(err);
  });
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
