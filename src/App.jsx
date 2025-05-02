import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Contact from "./screens/Contact";
import Products from "./screens/Products";
import NavBar from "./components/NavBar";
import NotFound from "./screens/NotFound";
import ProductDetails from "./screens/ProductDetails";
import AddProduct from "./screens/AddProduct";
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<SideBar />}>
          <Route index element={<Products />} />
          <Route path=":id" element={<ProductDetails />} />
          <Route path="add" element={<AddProduct />} />
        </Route>

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
