import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/auth";
import { useFilterParams } from "../contexts/filter";
import { getProductById, getProducts, login } from "./apiCalls";
import { tokenName } from "./axios";

// get all the products with sort and limit options
export const useProducts = () => {
  const { filters } = useFilterParams();
  return useQuery({ queryKey: ["products", filters.sort, filters.limit], queryFn: () => getProducts(filters) });
};

// get a single product by id
export const useProduct = (id: number) => useQuery({ queryKey: ["product", id], queryFn: () => getProductById(id) });

// login mutation
export const useAuthentications = () => {
  const navigate = useNavigate();
  const { setUserStatus } = useAuth();
  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      localStorage.setItem(tokenName, data.token);
      setUserStatus(true);
      navigate("/");
    },
  });
};
