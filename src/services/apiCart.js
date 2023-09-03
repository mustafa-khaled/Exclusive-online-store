import axios from "axios";
import { PASE_URL } from "../utils/constants";

const token = localStorage.getItem("token");

const config = {
  headers: {
    "Content-Type": "application/json",
    token: token,
  },
};

export function getCart() {
  return axios
    .get(`${PASE_URL}/api/v1/cart`, config)
    .then((res) => {
      return res.data.data.products;
    })
    .catch((error) => {
      throw new Error(error);
    });
}

export function addToCart(data) {
  return axios
    .post(`${PASE_URL}/api/v1/cart`, data, config)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      throw new Error(error);
    });
}
