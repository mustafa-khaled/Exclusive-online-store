import axios from "axios";
import { toast } from "react-hot-toast";
import { PASE_URL } from "../utils/constants";

// // Sign Up
// export function signUp({ userName, userEmail, password, userPhone }) {
//   return axios.post(`${PASE_URL}/api/v1/auth/signup`, {
//     name: userName,
//     email: userEmail,
//     password: password,
//     rePassword: password,
//     phone: userPhone,
//   });
// }

// Sign Up
export function signUp({ userName, userEmail, password, userPhone }) {
  return axios.post(`${PASE_URL}/api/v1/auth/signup`, {
    name: userName,
    email: userEmail,
    password: password,
    rePassword: password,
    phone: userPhone,
  });
}

export function signIn({ userEmail, userPassword }) {
  axios
    .post(`${PASE_URL}/api/v1/auth/signin`, {
      email: userEmail,
      password: userPassword,
    })
    .then((response) => {
      toast.success(response);
      console.log("Response:", response);
    })
    .catch((error) => {
      toast.error(error?.response?.data?.message);
      console.error("Error:", error);
    });
}
