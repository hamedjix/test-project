import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/auth";
import { useFilterParams } from "../contexts/filter";
import { localStorageManage } from "../helper";
import { getProductById, getProducts, login } from "./apiCalls";

export const useProducts = () => {
  const { filters } = useFilterParams();
  return useQuery({ queryKey: ["products", filters.sort, filters.limit], queryFn: () => getProducts(filters) });
};

export const useProduct = (id: number) => useQuery({ queryKey: ["product", id], queryFn: () => getProductById(id) });

export const useAuthentications = () => {
  const navigate = useNavigate();
  const { setUserStatus } = useAuth();
  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      localStorageManage(true, data.token);
      setUserStatus(true, data.username);
      navigate("/");
    },
  });
};
