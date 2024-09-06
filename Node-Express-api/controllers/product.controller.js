const Product = require("../models/product.model");

/**const homePage = async (req, res) => {
  res.send(`Hello from Node API`);
};*/

//*controller  to retrieve all products.
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//*controller  to retrieve a single product.
const getSingleProduct = async (req, res) => {
  try {
    //*getting product id from API end point
    const { id } = req.params;
    const singleProduct = await Product.findById(id);
    res.status(200).json(singleProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//*Create a product.
const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//*update product.
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);

    if (!product) {
      res.status(404).json({ message: "Product not found" });
    }

    const updatedProduct = await Product.findById(id);
    res.status(200).json({ updatedProduct });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//*delete Product
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);

    if (!product) res.status(404).json({ message: "Product not found" });
    return res
      .status(200)
      .json({ message: `Product was successfully, ${product.name} deleted` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  //*homePage,
  getProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
