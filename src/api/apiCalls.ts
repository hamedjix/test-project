import { IFetchProductsParams, IProduct } from "../@types/product";
import { Axios } from "./axios";

export const getProducts = async ({ sort = "asc", limit = 10 }: IFetchProductsParams) => {
  return (await Axios.get<IProduct[]>(`products?sort=${sort}&limit=${limit}`)).data;
};
export const login = async (data: { username: string; password: string }) => {
  return (await Axios.post("/auth/login", data)).data;
};
export const getProductById = async (id: number) => {
  return (await Axios.get<IProduct>(`/products/${id}`)).data;
};

// products?limit=5
// products?sort=desc
