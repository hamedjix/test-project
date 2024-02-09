import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { useAuth } from "./contexts/auth";
import Login from "./pages/Login";
import ProductDetails from "./pages/ProductDetails";
import Products from "./pages/Products";

function App() {
  const { isLoggedIn } = useAuth();
  return (
    <Layout>
      <Routes>
        {!isLoggedIn ? (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        )}
      </Routes>
    </Layout>
  );
}

export default App;
