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
