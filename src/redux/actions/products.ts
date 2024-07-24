// src/actions/productActions.ts
import axios from "axios";
import { Dispatch } from "redux";
import {
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE,
  SEARCH_PRODUCTS_REQUEST,
  SEARCH_PRODUCTS_SUCCESS,
  SEARCH_PRODUCTS_FAILURE,
  GET_CATEGORIES_REQUEST,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_FAILURE,
  FILTER_PRODUCTS_BY_CATEGORY_REQUEST,
  FILTER_PRODUCTS_BY_CATEGORY_SUCCESS,
  FILTER_PRODUCTS_BY_CATEGORY_FAILURE,
} from "../types/types";
import { ProductsModel, CategoriesModel } from "../models/app-model";

export const getProductsRequest = () => ({
  type: GET_PRODUCTS_REQUEST,
});

export const getProductsSuccess = (products: ProductsModel) => ({
  type: GET_PRODUCTS_SUCCESS,
  payload: products,
});

export const getProductsFailure = (error: string) => ({
  type: GET_PRODUCTS_FAILURE,
  payload: error,
});

export const searchProductsRequest = () => ({
  type: SEARCH_PRODUCTS_REQUEST,
});

export const searchProductsSuccess = (products: ProductsModel) => ({
  type: SEARCH_PRODUCTS_SUCCESS,
  payload: products,
});

export const searchProductsFailure = (error: string) => ({
  type: SEARCH_PRODUCTS_FAILURE,
  payload: error,
});

export const getCategoriesRequest = () => ({
  type: GET_CATEGORIES_REQUEST,
});

export const getCategoriesSuccess = (categories: CategoriesModel) => ({
  type: GET_CATEGORIES_SUCCESS,
  payload: categories,
});

export const getCategoriesFailure = (error: string) => ({
  type: GET_CATEGORIES_FAILURE,
  payload: error,
});

export const filterProductsByCategoryRequest = () => ({
  type: FILTER_PRODUCTS_BY_CATEGORY_REQUEST,
});

export const filterProductsByCategorySuccess = (products: ProductsModel) => ({
  type: FILTER_PRODUCTS_BY_CATEGORY_SUCCESS,
  payload: products,
});

export const filterProductsByCategoryFailure = (error: string) => ({
  type: FILTER_PRODUCTS_BY_CATEGORY_FAILURE,
  payload: error,
});

const BaseURL = "https://dummyjson.com/products";

export const fetchProducts = () => async (dispatch: Dispatch) => {
  dispatch(getProductsRequest());
  try {
    const response = await axios.get(BaseURL);
    dispatch(getProductsSuccess(response.data));
  } catch (error: any) {
    dispatch(getProductsFailure(error.message));
  }
};

export const searchProducts = (query: string) => async (dispatch: Dispatch) => {
  dispatch(searchProductsRequest());
  try {
    const response = await axios.get(`${BaseURL}/search?q=${query}`);
    dispatch(searchProductsSuccess(response.data));
  } catch (error: any) {
    dispatch(searchProductsFailure(error.message));
  }
};

export const fetchCategories = () => async (dispatch: Dispatch) => {
  dispatch(getCategoriesRequest());
  try {
    const response = await axios.get(`${BaseURL}/categories`);
    dispatch(getCategoriesSuccess(response.data));
  } catch (error: any) {
    dispatch(getCategoriesFailure(error.message));
  }
};

export const filterProductsByCategory = (category: string) => async (dispatch: Dispatch) => {
  dispatch(filterProductsByCategoryRequest());
  try {
    const response = await axios.get(`${BaseURL}/category/${category}`);
    dispatch(filterProductsByCategorySuccess(response.data));
  } catch (error: any) {
    dispatch(filterProductsByCategoryFailure(error.message));
  }
};
