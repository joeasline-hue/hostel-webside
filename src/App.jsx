import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Goal  from "./components/Goal";

import ProductsPage from "./pages/Products";

import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

<Route path="/About" element={<About />} />

<Route path="/Products" element={<Products />} />

<Route path="/products" element={<ProductsPage />} />

<Route
  path="/products/:slug"
  element={<ProductDetails />}
/>

<Route path="/Contact" element={<Contact />} />
      </Routes>
      </>
    
  );
}

export default App;