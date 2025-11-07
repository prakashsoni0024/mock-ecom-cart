import { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Our Products 🛍️</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((item) => (
          <div
            key={item._id}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transform hover:scale-105 transition duration-300 flex flex-col items-center"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h4 className="text-lg font-semibold mb-2 text-gray-900">{item.name}</h4>
            <p className="text-indigo-600 font-bold mb-4 text-lg">₹{item.price}</p>
            <button
              onClick={() => addToCart({ ...item, qty: 1 })}
              className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 hover:scale-105 transition transform duration-200 shadow-md"
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
