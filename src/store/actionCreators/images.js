import {
  FETCH_IMAGES,
  RESET_AND_FETCH_IMAGES,
  FETCH_IMAGES_SUCCESS,
  FETCH_IMAGES_FAILURE,
} from "../actionTypes";

export const requestImages = (category, page = 1) => ({
    type: FETCH_IMAGES,
    category,
    page,
});

export const resetAndRequestImages = () => ({
  type: RESET_AND_FETCH_IMAGES,
});

export const requestImagesSuccess = (data, page) => ({
  type: FETCH_IMAGES_SUCCESS,
  data,
  page,
});

export const requestImagesFailure = (error) => ({
  type: FETCH_IMAGES_FAILURE,
  error,
});