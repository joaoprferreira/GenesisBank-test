import { createContext, useCallback, useContext, useMemo, useReducer, useState } from 'react'
import Reducers from './productReducer'
import { IProductProviderContext, IProductsContext, filterState, product } from './@types/types'
import { initialState } from './constants/initialStateReduce'

export const ProductContext = createContext<IProductsContext>({} as IProductsContext)

export const ProductProvider = ({ children }: IProductProviderContext) => {
  const [product, dispatch] = useReducer(Reducers, initialState)
  const getItemByPage = (array: any[], pageNumber: number, itemsPerPage: number) => {
    const startIndex = (pageNumber - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    return array?.slice(startIndex, endIndex)
  }

  async function addAllProducts() {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/products`)
      const data = await response.json()
      dispatch({ type: 'SET_ALL_PRODUCTS', payload: data });
    } catch (error) {
      console.error('Error ao buscar api::', error)
    }
  }

  const getFilterProducts = useCallback(
    (product: product[], currentPage: number, filter: filterState) => {
      const { name, category } = filter
      let filteredProduct = product

      if (name) {
        filteredProduct = filteredProduct.filter((item) =>
          item.name.toLowerCase().includes(name.toLowerCase())
        )
      }

      if (category) {
        filteredProduct = filteredProduct.filter(
          (item) => item.category.toLowerCase() === category.toLowerCase()
        )
      }

      return filteredProduct
    },
    [product.currentPage]
  )

  const getProductsPaginated = useCallback(
    (products: product[], currentPage: number) => {
      const newProducts = getItemByPage(products, currentPage, 6)

      return newProducts
    },
    [product.currentPage]
  )

  const filteredProduct = useMemo(
    () =>
      getFilterProducts(product.products, product.currentPage, product.filter),
    [product.products, product.filter, getFilterProducts]
  )


  return (
    <ProductContext.Provider
      value={{
        product,
        dispatch,
        filteredProduct,
        addAllProducts,
        productsPaginated: getProductsPaginated(filteredProduct, product.currentPage),

      }}
    >
      {children}
    </ProductContext.Provider >
  )
}



export const useProduct = () => useContext(ProductContext)