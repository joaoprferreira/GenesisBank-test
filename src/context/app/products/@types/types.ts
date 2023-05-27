interface product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
}

interface IProductsContext {
  state: product[];
  dispatch: React.Dispatch<any>;
}

interface IProductProviderContext {
  children: React.ReactNode;
}
