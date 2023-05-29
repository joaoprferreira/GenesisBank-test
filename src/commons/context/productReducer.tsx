import { useContext } from "react"
import { InitialState, product } from "./@types/types"
import { ProductContext } from "./productContext"


export default function Reducers(state: InitialState, action: any): InitialState {
  // if (!action.type) return

  const { currentPage } = useContext(ProductContext)

  const getItemByPage = (array: any[], pageNumber: number, itemsPerPage: number) => {
    const startIndex = (pageNumber - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    return array.slice(startIndex, endIndex)
  }

  switch (action.type) {
    case 'SET_ALL_PRODUCTS':
      return {
        ...state,
        products: action.payload
      }
    case 'SET_PAGE_PRODUCTS':
      return {
        ...state,
        itensPaginated: getItemByPage(state.products, state.currentPage, 6)
      }
    case 'SET_NEXT_PAGE_PRODUCTS':
      return {
        ...state,
        itensPaginated: getItemByPage(state.products, state.currentPage, 10)
      }


    case 'SET_NEXT_PAGE':
      return {
        ...state,
        currentPage: state.currentPage + 1,
        itensPaginated: getItemByPage(state.products, state.currentPage, 10)
      }
    case 'SET_PREVIOUS_PAGE':
      return {
        ...state,
        currentPage: state.currentPage - 1,
        itensPaginated: getItemByPage(state.products, state.currentPage, 10)
      }

    default:
      return state
  }
}