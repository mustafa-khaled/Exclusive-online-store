import axios from "axios";
import { toast } from "react-hot-toast";

// Sign Up
export function signUp({ userName, userEmail, password, userPhone }) {
  axios
    .post("https://ecommerce.routemisr.com/api/v1/auth/signup", {
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
