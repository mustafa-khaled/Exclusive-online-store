import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import SignUp from "./pages/SignUp";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Shop from "./pages/Shop";
import WomenClose from "./pages/WomenClose";
import MenClose from "./pages/MenClose";
import Electronics from "./pages/Electronics";
import ProductDetails from "./features/products/ProductDetails";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="signUp" element={<SignUp />} />
          <Route path="shop" element={<Shop />} />
          <Route path="women" element={<WomenClose />} />
          <Route path="men" element={<MenClose />} />
          <Route path="electronics" element={<Electronics />} />
          <Route path="product/:id" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "#fff",
            color: "#ccc",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
