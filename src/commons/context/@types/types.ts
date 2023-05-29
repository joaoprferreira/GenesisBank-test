export interface product {
  id?: number;
  name: string;
  category: string;
  description: string;
  price: number;
  image: string;
}

export interface productCart {
  id: number;
  product_id: number;
  amount: number;
  total: string;
  price: number;
  produto: product;
}

export interface IProductsContext {
  product: InitialState;
  dispatch: React.Dispatch<any>;
  addAllProducts: () => void;
  filteredProduct: product[];
  productsPaginated: product[];
}

export interface IProductProviderContext {
  children: React.ReactNode;
}

export interface filterState {
  name: string;
  category: string;
}

export interface InitialState {
  products: product[] | [];
  currentPage: number;
  itensPaginated: product[];
  totalPriceProducts: number;
  shoppingCart: productCart[];
  isLoading: false;
  filter: filterState;
}
