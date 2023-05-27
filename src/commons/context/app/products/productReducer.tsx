import { ACTIONS } from "./actions"

export const productsReducer = (state, action) => {
  if (!action.type) return

  const REDUCERS = {
    [ACTIONS.SET_ALL_PRODUCTS]: () => ({
      ...state,
      ...action.payload
    })
  }

  return REDUCERS[action.type]();
}