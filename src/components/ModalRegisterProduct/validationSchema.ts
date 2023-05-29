import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  name: Yup.string().required("Nome é obrigatório"),
  description: Yup.string().required("Descrição é obrigatória"),
  price: Yup.number().required("Preço é obrigatório"),
  category: Yup.string().required("Categoria é obrigatória"),
  image: Yup.string().required("Adicone uma imagem"),
});
