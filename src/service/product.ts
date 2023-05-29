import { product } from "@/commons/context/@types/types";
import axios from "axios";

export async function CreateNewProduct(body: product) {
  const url = "http://localhost:3000/api/products/";
  try {
    const response = axios.post(url, body);
    return (await response).data;
  } catch (error) {
    return error;
  }
}
