import { product } from "@/commons/context/@types/types";
import { useProduct } from "@/commons/context/hooks/useProduct";

export default function useModal() {
  const { setNewProduct } = useProduct();

  const initialValues = {
    name: "",
    description: "",
    price: 0,
    image: "",
    category: "",
  };

  const handleSubmit = (values: product) => {
    setNewProduct(values);
  };

  return {
    initialValues,
    handleSubmit,
  };
}
