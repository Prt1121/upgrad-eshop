import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import { AuthContextProvider } from "./common/authContext/AuthContext";
import ProductDetail from "./components/ProductDetails/ProductDetails";
import Products from "./components/Products/Products";
import LogIn from "./components/LogIn/Login";
import SignUp from "../src/components/SignUp/SignUp";
import AddModifyProduct from "./components/addProduct/AddModifyProduct";
import Orders from "../src/components/Orders/Orders";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
const appTheme = createTheme({
  palette: {
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f44336",
    },
  },
});

function App() {
  return (
    <AuthContextProvider>
      <ThemeProvider theme={appTheme}>
        <BrowserRouter>
          <Routes>
            <Route path="/edit-product/:id" element={<AddModifyProduct />} />
            <Route path="/add-product" element={<AddModifyProduct />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route exact path="/products" element={<Products />} />
            <Route exact path="/" element={<Navigate to="/login" />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/order" element={<Orders />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
      <ToastContainer/>
    </AuthContextProvider>
  );
}

export default App;
