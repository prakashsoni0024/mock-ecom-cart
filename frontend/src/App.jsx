import { Routes, Route, Link } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function App() {
  

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
     <Navbar/>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      {/* Footer */}
      <Footer/>
    </div>
  );
}
