import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import ProductOne from "./components/ProductOne";
import ProductTwo from "./components/ProductTwo";
import ProductThree from "./components/ProductThree";
import Comparison from "./components/Comparison";
import Contact from "./components/Contact";
import Payment from "./components/Payment";
import Privacy from "./components/Privacy";
import Refund from "./components/Refund";
import Website from "./components/Website";
import Rentals from "./components/Rentals";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="productOne" element={<ProductOne />} />
            <Route path="productTwo" element={<ProductTwo />} />
            <Route path="productThree" element={<ProductThree />} />
            <Route path="comparison" element={<Comparison />} />
            <Route path="contact" element={<Contact />} />
            <Route path="payment" element={<Payment />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="refund" element={<Refund />} />
            <Route path="website" element={<Website />} />
            <Route path="rentals" element={<Rentals />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
