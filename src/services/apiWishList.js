import axios from "axios";
import { PASE_URL } from "../utils/constants";
import { toast } from "react-hot-toast";

export function getWishList(config) {
  return axios
    .get(`${PASE_URL}/api/v1/wishlist`, config)
    .then((res) => {
      return res.data.data;
    })
    .catch((error) => {
      toast.error(error.response.data.message);
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
