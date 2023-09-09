import axios from "axios";
import { PASE_URL } from "../utils/constants";
import { toast } from "react-hot-toast";

const token = localStorage.getItem("token");

const config = {
  headers: {
    "Content-Type": "application/json",
    token: token,
  },
};

export function getCart(config) {
  return axios
    .get(`${PASE_URL}/api/v1/cart`, config)
    .then((res) => {
      return res.data.data;
    })
    .catch((error) => {
      toast.error(error.response.data.message);
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

export function deleteCartItem(id) {
  return axios
    .delete(`${PASE_URL}/api/v1/cart/${id}`, config)
    .then((res) => {
      return res;
    })
    .catch((error) => {
      return error;
    });
}

export function updateProductQuantity(id, data) {
  return axios
    .put(`${PASE_URL}/api/v1/cart/${id}`, data, config)
    .then((res) => {
      return res;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
}
