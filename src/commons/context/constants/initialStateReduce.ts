import { InitialState } from "../@types/types";

export const initialState: InitialState = {
  products: [],
  currentPage: 1,
  itensPaginated: [],
  shoppingCart: [],
  totalPriceProducts: 0,
  isLoading: false,
  filter: {
    name: "",
    category: "",
  },
};
