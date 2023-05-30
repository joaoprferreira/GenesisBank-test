import axios from "axios";

export async function addNewProductInCartService(
  product_id?: number,
  amount?: number
) {
  const url = `${process.env.NEXT_PUBLIC_URL}/api/shoppingCart`;
  try {
    const response = axios.post(url, { product_id, amount });
    return (await response).data;
  } catch (error) {
    return error;
  }
}

export async function getAllProductsInCart() {
  const url = `${process.env.NEXT_PUBLIC_URL}/api/shoppingCart`;
  try {
    const response = axios.get(url);
    return (await response).data;
  } catch (error) {
    console.error(error);
  }
}

export async function deleteProductCart(id: any) {
  const url = `${process.env.NEXT_PUBLIC_URL}/api/shoppingCart/${id}`;
  try {
    const response = axios.delete(url);
    console.log("Item excluído com sucesso:", (await response).data);
  } catch (error) {
    console.error("Erro ao excluir o item:", error);
  }
}
