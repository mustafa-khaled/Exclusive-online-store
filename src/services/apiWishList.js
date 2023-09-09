import axios from "axios";
import { PASE_URL } from "../utils/constants";

const token = localStorage.getItem("token");

const config = {
  headers: {
    "Content-Type": "application/json",
    token: token,
  },
};

export function getWishList(config) {
  return axios
    .get(`${PASE_URL}/api/v1/wishlist`, config)
    .then((res) => {
      return res.data.data;
    })
    .catch((error) => {
      return error.response.data.message;
    });
}

export function addToWishList(data, config) {
  return axios
    .post(`${PASE_URL}/api/v1/wishlist`, data, config)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return error.response.data.message;
    });
}

export function deleteWishListItem(id) {
  return axios
    .delete(`${PASE_URL}/api/v1/wishlist/${id}`, config)
    .then((res) => {
      return res;
    })
    .catch((error) => {
      return error;
    });
}
