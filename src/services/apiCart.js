import axios from "axios";
import { PASE_URL } from "../utils/constants";

export function getCart(config) {
  return axios
    .get(`${PASE_URL}/api/v1/cart`, config)
    .then((res) => {
      return res.data.data.products;
    })
    .catch((error) => {
      console.log(error.response.data.message);
      return error.response.data.message;
    });
}

export function addToCart(data, config) {
  return axios
    .post(`${PASE_URL}/api/v1/cart`, data, config)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return error.response.data.message;
    });
}
