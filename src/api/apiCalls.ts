import { IFetchProductsParams, IProduct } from "../@types/product";
import { Axios } from "./axios";

export const login = async (data: { username: string; password: string }) => {
  return (await Axios.post("/auth/login", data)).data;
};
export const getProducts = async ({ sort, limit }: IFetchProductsParams) => {
  return (await Axios.get<IProduct[]>(`products?sort=${sort}&limit=${limit}`)).data;
};
export const getProductById = async (id: number) => {
  return (await Axios.get<IProduct>(`/products/${id}`)).data;
};
