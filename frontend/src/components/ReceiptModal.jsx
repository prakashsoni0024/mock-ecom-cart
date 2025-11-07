import React from "react";

export default function ReceiptModal({ userInfo, total, onClose }) {
  const timestamp = new Date().toLocaleString();

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 backdrop-blur-sm bg-white/30">
      <div className="bg-white rounded-2xl p-6 shadow-lg w-80 sm:w-96 text-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Receipt</h2>
        <p className="text-gray-700 mb-2"><span className="font-semibold">Name:</span> {userInfo.name}</p>
        <p className="text-gray-700 mb-2"><span className="font-semibold">Email:</span> {userInfo.email}</p>
        <p className="text-indigo-600 font-bold text-lg mb-2">Total: ₹{total}</p>
        <p className="text-gray-500 text-sm mb-4">Time: {timestamp}</p>
        <button
          onClick={onClose}
          className="mt-2 px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
}
