import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const getCustomerBalance = (customerId) =>
  API.get("/customerbalance/by-cid", { params: { customerId: customerId } });

export const getLoanAmount = (loanId) =>
  API.get("/loan_amount/by-lid", { params: { loanId: loanId } });
