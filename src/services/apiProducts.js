import { PASE_URL } from "../utils/constants";
import axios from "axios";

// Get All Products
export function getProducts() {
  return axios
    .get(`${PASE_URL}/api/v1/products`)
    .then((res) => {
      return res.data.data;
    })
    .catch((error) => {
      throw error;
    });
}
