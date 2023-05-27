import { createContext, useCallback, useContext, useReducer, useState } from 'react'
import { productsReducer } from './productReducer'
import { initialState } from './models/indeex'

export const ProductContext = createContext<IProductsContext>({} as IProductsContext)


export const ProductProvider = ({ children }: IProductProviderContext) => {
  const [products, setProduct] = useState<product[]>([])

  const addProduct = useCallback((product: product) => {
    setProduct((prev) => [...prev, product])
  }, [])

  const removeProduct = useCallback((id: number) => {
    const newListProduct = products.filter((product) => product.id !== id)
    setProduct(newListProduct)
  }, [products])

  const [state, dispatch] = useReducer(productsReducer, initialState)

  return (
    <ProductContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      {children}
    </ProductContext.Provider >
  )
}



export const useProduct = () => useContext(ProductContext)