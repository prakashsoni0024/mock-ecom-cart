import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import ReceiptModal from "../components/ReceiptModal";

export default function CartPage() {
  const { cart, total, removeFromCart, updateQty, clearCart } = useContext(CartContext);
  const [showReceipt, setShowReceipt] = useState(false);
  const [receiptTotal, setReceiptTotal] = useState(0); 
  const [userInfo, setUserInfo] = useState({ name: "", email: "" });

  const handleCheckout = () => {
    if (!userInfo.name || !userInfo.email) {
      alert("Please enter your Name and Email.");
      return;
    }
    setReceiptTotal(total);
    setShowReceipt(true);
    clearCart();
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">Your Cart 🛒</h2>

      {cart.length === 0 && (
        <p className="text-center text-gray-600 mt-4">Your cart is empty.</p>
      )}

      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item._id}
            className="bg-white p-4 rounded-xl shadow flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <div className="flex items-center gap-4">
              <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
              <div>
                <h4 className="font-semibold text-gray-900">{item.name}</h4>
                <p className="text-indigo-600 font-bold">₹{item.price}</p>
              </div>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => updateQty(item._id, item.qty - 1)}
                disabled={item.qty === 1}
                className="bg-gray-300 text-gray-700 px-2 py-1 rounded disabled:opacity-50"
              >
                -
              </button>
              <span className="px-2">{item.qty}</span>
              <button
                onClick={() => updateQty(item._id, item.qty + 1)}
                className="bg-gray-300 text-gray-700 px-2 py-1 rounded"
              >
                +
              </button>
            </div>

            {/* Remove Button */}
            <button
              onClick={() => removeFromCart(item._id)}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h3 className="text-xl font-semibold text-gray-800">Total: ₹{total}</h3>

          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              placeholder="Your Name"
              value={userInfo.name}
              onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
              className="px-3 py-2 border rounded w-full sm:w-auto"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={userInfo.email}
              onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
              className="px-3 py-2 border rounded w-full sm:w-auto"
            />
            <button
              onClick={handleCheckout}
              className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition"
            >
              Checkout
            </button>
          </div>
        </div>
      )}

      {showReceipt && (
        <ReceiptModal
          userInfo={userInfo}
          total={receiptTotal}
          onClose={() => setShowReceipt(false)}
        />
      )}
    </div>
  );
}
