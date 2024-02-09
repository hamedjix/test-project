import { createContext, ReactNode, useContext, useState } from "react";
import { IFetchProductsParams } from "../@types/product";

interface IFilterContext {
  filters: IFetchProductsParams;
  updateFilters: (p: IFetchProductsParams) => void;
}

const initialState: IFetchProductsParams = {
  sort: "asc",
  limit: 5,
};
export const FilterContext = createContext<IFilterContext>({
  filters: initialState,
  updateFilters: () => {},
});

const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [filters, setFilters] = useState<IFetchProductsParams>(initialState);
  const updateFilters = (p: IFetchProductsParams) => {
    setFilters((prev) => ({ ...prev, ...p }));
  };
  return <FilterContext.Provider value={{ filters, updateFilters }}>{children}</FilterContext.Provider>;
};

export const useFilterParams = () => {
  return useContext(FilterContext);
};
FilterContext.displayName = "Filters Context";

export default FilterProvider;
