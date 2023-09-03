import { PASE_URL } from "../utils/constants";
import axios from "axios";

// Get All Products
export function getProducts({ page, pageSize }) {
  return axios
    .get(`${PASE_URL}/api/v1/products`)
    .then((res) => {
      const allProducts = res.data.data;
      const from = (page - 1) * pageSize;
      const to = from + pageSize;
      const paginatedProducts = allProducts.slice(from, to);
      return { paginatedProducts, allProducts };
    })
    .catch((error) => {
      throw new Error("Failed To Get Products Data");
    });
}

// Get Products By Category
export function getByCategory(category) {
  return axios
    .get(`${PASE_URL}/api/v1/products?category=${category}`)
    .then((res) => {
      return res.data.data;
    })
    .catch((error) => {
      throw new Error("Failed To Get Category Data");
    });
}

// Get Specific Product
export function getProduct(id) {
  return axios
    .get(`${PASE_URL}/api/v1/products/${id}`)
    .then((res) => {
      return res.data.data;
    })
    .catch((error) => {
      throw new Error("Failed To Get Product Data");
    });
}
