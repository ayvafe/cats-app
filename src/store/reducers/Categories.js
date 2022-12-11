import {
  FETCH_CATEGORIES,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
} from "../actionTypes";

const initialState = {
  list: [],
  error: null,
  pending: false,
};

export const categories = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return { ...initialState, pending: true };
    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        list: action.data,
        error: null,
      };
    case FETCH_CATEGORIES_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};
