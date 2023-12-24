import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";
import Home from "./Pages/Home/home";
import "./App.css"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Cart from "./Pages/Cart/cart";
import Man from "./Pages/Category/man";
import Women from "./Pages/Category/women";
import Shoe from "./Pages/Category/shoe";


function App() {
  return (
    <Router>
    <Navbar />
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/man" element={<Man />} />
        <Route exact path="/women" element={<Women />} />
        <Route exact path="/shoe" element={<Shoe />} />
        <Route exact path="/jwelery" element={<Cart />} />
      </Routes>
    </div>
    <Footer />
  </Router>
  );
}

export default App;
