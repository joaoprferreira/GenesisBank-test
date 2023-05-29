export interface product {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
  image: string;
}

export interface IProductsContext {
  // state: product[];
  product: InitialState;
  dispatch: React.Dispatch<any>;
  addAllProducts: () => void;
  // getItemByPage: (pageNumber: number, itemsPerPage: number) => any;
}

export interface IProductProviderContext {
  children: React.ReactNode;
}

export interface InitialState {
  products: product[] | [];
  currentPage: number;
  itensPaginated: product[];
  shoppingCart: product[];
}
