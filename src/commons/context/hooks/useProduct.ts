import { useContext } from "react";
import { ProductContext } from "../products/productContext";
import { ACTIONS } from "../actions";

export const useProduct = () => {
  const context = useContext(ProductContext);
  const { state, dispatch } = context;

  const getAllProducts = (payload: any) => {
    dispatch({
      type: "SET_ALL_PRODUCTS",
      payload: payload,
    });
  };

  return {
    ...state,
    getAllProducts,
  };
};
