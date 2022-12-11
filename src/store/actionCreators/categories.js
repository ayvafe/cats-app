import {
  FETCH_CATEGORIES,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
} from "../actionTypes";

export const requestCategories = () => ({
    type: FETCH_CATEGORIES,
});

export const requestCategoriesSuccess = (data) => ({
  type: FETCH_CATEGORIES_SUCCESS,
  data,
});

export const requestCategoriesFailure = (error) => ({
  type: FETCH_CATEGORIES_FAILURE,
  error,
});