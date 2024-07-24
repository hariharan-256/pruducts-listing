// src/reducers/productsReducer.ts
import {
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE,
  SEARCH_PRODUCTS_REQUEST,
  SEARCH_PRODUCTS_SUCCESS,
  SEARCH_PRODUCTS_FAILURE,
  FILTER_PRODUCTS_BY_CATEGORY_REQUEST,
  FILTER_PRODUCTS_BY_CATEGORY_SUCCESS,
  FILTER_PRODUCTS_BY_CATEGORY_FAILURE,
  GET_CATEGORIES_REQUEST,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_FAILURE,
  GET_PRODUCTS_RESET,
} from "../types/types";
import { ProductsModel, ResponseType, CategoriesModel } from "../models/app-model";

const ProductsListState: ProductsModel = {
  data: [],
  fetching: false,
  requestComplete: false,
  error: "",
};

export function productsListReducer(state = ProductsListState, action: ResponseType) {
  switch (action.type) {
    case GET_PRODUCTS_REQUEST:
    case SEARCH_PRODUCTS_REQUEST:
    case FILTER_PRODUCTS_BY_CATEGORY_REQUEST:
      return {
        ...state,
        fetching: true,
        error: "",
      };
    case GET_PRODUCTS_SUCCESS:
    case SEARCH_PRODUCTS_SUCCESS:
    case FILTER_PRODUCTS_BY_CATEGORY_SUCCESS:
      return {
        ...state,
        data: action.payload.products,
        fetching: false,
        requestComplete: true,
        error: "",
      };
    case GET_PRODUCTS_FAILURE:
    case SEARCH_PRODUCTS_FAILURE:
    case FILTER_PRODUCTS_BY_CATEGORY_FAILURE:
      return {
        ...state,
        fetching: false,
        requestComplete: false,
        error: action.payload,
      };
    case GET_PRODUCTS_RESET:
      return {
        data: [],
        fetching: false,
        requestComplete: false,
        error: "",
      };
    default:
      return state;
  }
}

const CategoriesListState: CategoriesModel = {
  dropdown: [],
  fetching: false,
  requestComplete: false,
  error: "",
};

export function categoriesListReducer(state = CategoriesListState, action: ResponseType) {
  switch (action.type) {
    case GET_CATEGORIES_REQUEST:
      return {
        ...state,
        fetching: true,
        error: "",
      };
    case GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        dropdown: action.payload,
        fetching: false,
        requestComplete: true,
        error: "",
      };
    case GET_CATEGORIES_FAILURE:
      return {
        ...state,
        fetching: false,
        requestComplete: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
