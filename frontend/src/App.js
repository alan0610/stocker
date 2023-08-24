import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./modules/Home";
import { Routes, Route } from "react-router-dom";
import Product from './modules/Product'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<Product />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
