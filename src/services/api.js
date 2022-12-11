// Constants
import {
  DEFAULT_TABLE_ROWS_COUNT,
  REACT_APP_API_URL,
 } from "../config/constants";

// Action creators
import { requestCategoriesFailure, requestCategoriesSuccess } from "../store/actionCreators/categories";
import { requestImagesFailure, requestImagesSuccess } from "../store/actionCreators/images";

const fetchData = async (url, method = 'GET', body = null) => {
  try {
    return await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        cors: 'no-cors',
      },
      method,
      ...(body ? { body: JSON.stringify(body) } : {}),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(new Error("error"));
      })
      .catch((error) => {
        return Promise.resolve(new Error(error?.message));
      });
  } catch (error) {
    throw new Error(error);
  }
}

export const fetchImages = async (dispatcher, category, page = 1) => {
  try {
    const query = `limit=${DEFAULT_TABLE_ROWS_COUNT}&category_ids=${category}&page=${page}`;
    const response = await fetchData(`${REACT_APP_API_URL}/images/search?${query}`);
    if (!response) {
      return dispatcher(requestImagesFailure("Can't fetch images!"));
    }

    return dispatcher(requestImagesSuccess(response, page));
  } catch (error) {
    return dispatcher(requestImagesFailure("Something went wrong!"));
  }
};

export const fetchCategories = async (dispatcher) => {
  try {
    const response = await fetchData(`${REACT_APP_API_URL}/categories`);
    if (!response) {
      return dispatcher(requestCategoriesFailure("Can't fetch categories!"));
    }

    return dispatcher(requestCategoriesSuccess(response));
  } catch (error) {
    return dispatcher(requestCategoriesFailure("Something went wrong!"));
  }
};

