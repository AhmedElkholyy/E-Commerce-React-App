import "./App.css";
import Navbar from "./components/Navbar";
import ProductsList from "./components/ProductsList";
import Slider from "./components/Slider";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import ProductsDetails from "./components/ProductsDetails";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";


function App() {
  return (
    <>
      <Navbar />
     

     <ScrollToTop /> 
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Slider />
              <ProductsList />
            </>
          }
        />
        <Route path="about" element={<About />} />
        <Route path="product/:productId" element={<ProductsDetails />} />
      </Routes>
          <Footer />
    </>
  );
}

export default App;
