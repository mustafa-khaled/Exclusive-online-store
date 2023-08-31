import axios from "axios";
import { toast } from "react-hot-toast";
import { PASE_URL } from "../utils/constants";

// Sign Up
export function signUp({ userName, userEmail, password, userPhone }) {
  axios
    .post(`${PASE_URL}/api/v1/auth/signup`, {
      name: userName,
      email: userEmail,
      password: password,
      rePassword: password,
      phone: userPhone,
    })
    .then((response) => {
      toast.success(response.data.message);
      console.log("Response:", response.data.message);
    })
    .catch((error) => {
      toast.error(error?.response?.data?.message);
      console.error("Error:", error?.response?.data?.message);
    });
}

// export function signIn() {
//   axios
//     .post(`${PASE_URL}/api/v1/auth/signin`, {
//       email: "mustafa@mustafa.com",
//       password: "mustafa123456",
//     })
//     .then((response) => {
//       toast.success(response);
//       console.log("Response:", response);
//     })
//     .catch((error) => {
//       toast.error(error?.response?.data?.message);
//       console.error("Error:", error?.response?.data?.message);
//     });
// }

// signIn();
