import "./App.css";
import Navbar from "./components/Navbar";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import { useEffect, useState } from "react";

import { Routes, Route } from "react-router-dom";

function App() {
  const [products, setProducts] = useState([]);
  const fetchData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    if (response.ok) {
      const productData = await response.json();
      console.log(productData);
      setProducts(productData);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App relative z-20 pt-20">
      <Navbar />

      <Routes>
        <Route path="/" element={<ProductListPage data={products} />} />
        <Route
          path="/product/details/:productId"
          element={<ProductDetailsPage data={products} />}
        />
      </Routes>
    </div>
  );
}

export default App;
