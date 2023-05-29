import { useContext } from "react";
import axios from "axios";
import { ProductContext } from "@/commons/context/productContext";
import {
  getAllProductsInCart,
  deleteProductCart,
} from "@/service/shoppingCart";

export const useCart = () => {
  const { dispatch } = useContext(ProductContext);

  const getAllProducts = async () => {
    try {
      const response = await getAllProductsInCart();

      console.log("DATA_USE_CART:", response);

      dispatch({
        type: "SET_TOTAL_ITEMS",
        payload: response,
      });

      dispatch({
        type: "SET_NEW_PRODUCT_IN_CART",
        payload: response,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleIncrement = (
    id: number,
    amount: number,
    isIncrement: boolean
  ) => {
    const update = isIncrement
      ? (value: number) => value + 1
      : (value: number) => value - 1;

    const newAmount = update(amount);

    try {
      axios.put("http://localhost:3000/api/shoppingCart", {
        product_id: id,
        amount: newAmount,
      });
      dispatch({
        type: "SET_INCREMENT_AMOUNT",
        payload: { id, amount: newAmount },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteItemProductCart = async (id: any) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
    deleteProductCart(id);
  };

  return {
    getAllProducts,
    deleteItemProductCart,
    handleIncrement,
  };
};
