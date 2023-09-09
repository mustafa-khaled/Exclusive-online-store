import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "react-hot-toast";

import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loader from "./ui/Loader";
const Home = lazy(() => import("./pages/Home"));
const Contact = lazy(() => import("./pages/Contact"));
const About = lazy(() => import("./pages/About"));
const SignUp = lazy(() => import("./pages/SignUp"));
const Shop = lazy(() => import("./pages/Shop"));
const WomenClose = lazy(() => import("./pages/WomenClose"));
const MenClose = lazy(() => import("./pages/MenClose"));
const Electronics = lazy(() => import("./pages/Electronics"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));
const Cart = lazy(() => import("./pages/Cart"));
const WishList = lazy(() => import("./pages/WishList"));
const CheckOut = lazy(() => import("./pages/CheckOut"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

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
        <ScrollToTop />
        <Header />
        <Suspense
          fallback={
            <Loader styles="h-[90vh] flex items-center justify-center" />
          }
        >
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
            <Route path="cart" element={<Cart />} />
            <Route path="wishList" element={<WishList />} />
            <Route path="checkOut" element={<CheckOut />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
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
