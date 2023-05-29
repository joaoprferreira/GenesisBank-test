import { InitialState } from "./@types/types"

export default function Reducers(state: InitialState, action: any): InitialState {
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
        itensPaginated: getItemByPage(state.products, state.currentPage, 8)
      }

    case 'SET_NEW_PRODUCT':
      return {
        ...state,
        products: [...state.products, action.payload]
      }


    case 'SET_FILTER_BY_NAME':
      return {
        ...state,
        filter: {
          ...state.filter,
          name: action.payload
        }
      }
    case 'SET_FILTER_BY_CATEGORY':
      return {
        ...state,
        filter: {
          ...state.filter,
          category: action.payload
        }
      }


    case 'SET_NEW_PRODUCT_IN_CART':
      return {
        ...state,
        shoppingCart: action.payload
      }


    case 'SET_TOTAL_ITEMS':
      return {
        ...state,
        totalPriceProducts: action.payload.reduce((total: any, product: any) => total + parseInt(product.total), 0),
        shoppingCart: action.payload,
      }




    case 'SET_INCREMENT_AMOUNT':
      return {
        ...state,
        shoppingCart: state.shoppingCart.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              amount: action.payload.amount,
            }
          }
          return item
        })
      }




    case 'REMOVE_FROM_CART':
      return {
        ...state,
        shoppingCart: state.shoppingCart.filter((cartItem) => cartItem.id !== action.payload)
      }



    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.payload
      }



    case 'SET_PAGINATION':
      return {
        ...state,
        itensPaginated: getItemByPage(state.products, state.currentPage, 8)
      }
    case 'SET_NEXT_PAGE':
      return {
        ...state,
        currentPage: state.currentPage + 1,
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