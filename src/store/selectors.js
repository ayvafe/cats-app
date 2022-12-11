import { createSelector } from "reselect";

const images = (state) => state?.images;
const categories = (state) => state?.categories;

export const getImages = createSelector(images, (a) => a.list);
export const getImagesPage = createSelector(images, (a) => a.page);
export const isImagesLoading = createSelector(images, (a) => a.pending);
export const getImagesError = createSelector(images, (a) => a.error);

export const getCategories = createSelector(categories, (a) => a.list);
export const getCategoriesError = createSelector(categories, (a) => a.error);
