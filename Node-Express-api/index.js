const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model");
const productRoutes = require("./routes/product.routes");

const app = express();
//*port
const port = 8000;

//*middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//*Routes
app.use("/api/products", productRoutes);
app.use("/", productRoutes);

//*Connecting to the database.
mongoose
  .connect(
    "mongodb+srv://nicholas:MMQaoqrLwadkcQDa@backend.cuf2l.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackEnd"
  )
  .then(() => {
    console.log(`Connected to the database`);
    app.listen(port, () => {
      console.log(`Server Listening at ${port}`);
    });
  })
  .catch(() => {
    console.log(`Connection failed!`);
  });
