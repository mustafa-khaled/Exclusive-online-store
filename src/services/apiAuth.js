import { PASE_URL } from "../utils/constants";
import axios from "axios";

// Sign Up
export function signUp({
  userName,
  userEmail,
  password,
  rePassword,
  userPhone,
}) {
  if (!userName || !userEmail || !password || !rePassword || !userPhone) {
    return Promise.reject(new Error("All fields are required"));
  }

  return axios.post(`${PASE_URL}/api/v1/auth/signup`, {
    name: userName,
    email: userEmail,
    password: password,
    rePassword: rePassword,
    phone: userPhone,
  });
}

export function signIn({ userEmail, password }) {
  return axios.post(`${PASE_URL}/api/v1/auth/signin`, {
    email: userEmail,
    password,
  });
}
