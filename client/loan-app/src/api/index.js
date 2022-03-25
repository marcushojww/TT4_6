import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

// Sign In
export const signIn = (formData) => API.post("/user/signin", formData);
// Sign Up
export const signUp = (formData) => API.post("/user/signup", formData);

export const getCustomerBalance = (customerId) =>
  API.get("/customerbalance/by-cid", { params: { customerId: customerId } });

export const getLoanAmount = (loanId) =>
  API.get("/loan_amount/by-lid", { params: { loanId: loanId } });

export const getCustomerLoans = (customerId) =>
  API.get("/customerloans/by-cid", { params: { customerId: customerId } });
