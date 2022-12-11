import {
  FETCH_IMAGES,
  RESET_AND_FETCH_IMAGES,
  FETCH_IMAGES_SUCCESS,
  FETCH_IMAGES_FAILURE,
} from "../actionTypes";

const initialState = {
  list: [],
  page: 1,
  error: null,
  pending: false,
};

export const images = (state = initialState, action) => {
  switch (action.type) {
    case RESET_AND_FETCH_IMAGES:
      return { ...initialState, pending: true };
    case FETCH_IMAGES:
      return { ...state, pending: true };
    case FETCH_IMAGES_SUCCESS:
      return {
        ...state,
        list: [
          ...state.list,
          ...action.data
        ],
        pending: false,
        error: null,
      };
    case FETCH_IMAGES_FAILURE:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
};
