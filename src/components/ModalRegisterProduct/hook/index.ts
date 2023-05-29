import { product } from "@/commons/context/@types/types";
import { useProduct } from "@/commons/context/hooks/useProduct";
import { useToast } from "@chakra-ui/react";

export default function useModal() {
  const { setNewProduct } = useProduct();
  const toast = useToast();

  const initialValues = {
    name: "",
    description: "",
    price: 0,
    image: "",
    category: "",
  };

  const handleSubmit = (values: product) => {
    try {
      setNewProduct(values);

      toast({
        title: `ssss`,
        position: "top-left",
        isClosable: true,
      });
    } catch (error) {
      console.log("erro::", error);
    }
  };

  return {
    initialValues,
    handleSubmit,
  };
}
