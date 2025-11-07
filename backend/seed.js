import mongoose from "mongoose";
import Product from "./models/productModel.js";

mongoose.connect("mongodb://localhost:27017/mockcart")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const products = [
  { name: "Apple iPhone 15", price: 79999, image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-finish-select-202309-6-7inch-black?wid=2560&hei=1440&fmt=jpeg&qlt=95&.v=1692923781972" },
  { name: "Realme Buds Air", price: 2599, image: "https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2023/08/10-6-scaled.jpg?ssl=1&quality=80&w=f" },
  { name: "Lenovo Gaming Mouse", price: 899, image: "https://tse1.mm.bing.net/th/id/OIP.gyReg0wylahy9YRBKR4ddwHaFo?rs=1&pid=ImgDetMain&o=7&rm=3" },
  { name: "Boat Smartwatch", price: 1599, image: "https://5.imimg.com/data5/SELLER/Default/2022/9/XW/EL/PZ/23694326/boat-xtend-smart-watch-1000x1000.jpg" }
];

const seedProducts = async () => {
  await Product.deleteMany({});
  await Product.insertMany(products);
  console.log("✅ Products Added Successfully");
  process.exit();
};

seedProducts();
