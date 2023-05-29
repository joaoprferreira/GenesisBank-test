import { useContext } from "react";
import { product } from "../@types/types";
import { CreateNewProduct } from "@/service/product";
import { ProductContext } from "../productContext";
import { addNewProductInCartService } from "@/service/shoppingCart";
import { useToast } from "@chakra-ui/react";

export const useProduct = () => {
  const { dispatch } = useContext(ProductContext);
  const toast = useToast();

  const setNewProduct = async (newProduct: product) => {
    dispatch({
      type: "SET_NEW_PRODUCT",
      payload: newProduct,
    });
    CreateNewProduct(newProduct);
  };

  function addNewProductInCart(id?: number) {
    addNewProductInCartService(id, 1);
    dispatch({ type: "SET_NEW_PRODUCT_IN_CART", payload: id });

    toast({
      title: `Produto adicionado ao carrinho com sucesso!...`,
      position: "top-left",
      isClosable: true,
    });
  }

  return {
    setNewProduct,
    addNewProductInCart,
  };
};
