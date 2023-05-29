import { createContext, useCallback, useContext, useReducer, useState } from 'react'
import Reducers from './productReducer'
import { IProductProviderContext, IProductsContext, product } from './@types/types'
import { initialState } from './constants/initialStateReduce'
// import { initialState } from './constants/initialStateReduce'

export const ProductContext = createContext<IProductsContext>({} as IProductsContext)


export const ProductProvider = ({ children }: IProductProviderContext) => {

  // const [products, setProduct] = useState<product[]>([])

  const [product, dispatch] = useReducer(Reducers, initialState)

  async function addAllProducts() {
    try {
      const response = await fetch('http://localhost:3000/api/products')
      const data = await response.json()
      dispatch({ type: 'SET_ALL_PRODUCTS', payload: data });
    } catch (error) {
      console.error('Error ao buscar api::', error)
    } finally {
      dispatch({ type: 'SET_NEXT_PAGE_PRODUCTS' })
    }
  }

  // const removeProduct = useCallback((id: number) => {
  //   const newListProduct = products.filter((product) => product.id !== id)
  //   setProduct(newListProduct)
  // }, [products])


  // const getItemByPage = (pageNumber: number, itemsPerPage: number) => {
  //   const startIndex = (pageNumber - 1) * itemsPerPage
  //   const endIndex = startIndex + itemsPerPage
  //   return product.products.slice(startIndex, endIndex)
  // }


  // console.log("STATE::", state)

  return (
    <ProductContext.Provider
      value={{
        product,
        // state,
        dispatch,
        addAllProducts,

      }}
    >
      {children}
    </ProductContext.Provider >
  )
}



export const useProduct = () => useContext(ProductContext)