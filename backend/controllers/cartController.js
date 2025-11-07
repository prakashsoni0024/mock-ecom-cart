import Product from "../models/productModel.js";
import Cart from "../models/CartModel.js";

export const getCart = async (req, res) => {
  const cart = await Cart.find();
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  res.json({ cart, total });
};

export const addToCart = async (req, res) => {
  const { productId } = req.body;
  const product = await Product.findById(productId);

  const exist = await Cart.findOne({ productId });

  if (exist) {
    exist.qty += 1;
    await exist.save();
    return res.json(exist);
  }

  const newItem = await Cart.create({
    productId,
    name: product.name,
    price: product.price,
    qty: 1,
  });

  res.json(newItem);
};

export const removeFromCart = async (req, res) => {
  await Cart.findByIdAndDelete(req.params.id);
  res.json({ message: "Removed" });
};

export const checkout = async (req, res) => {
  const cart = await Cart.find();
  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  await Cart.deleteMany({});
  res.json({ total, time: new Date().toLocaleString() });
};
