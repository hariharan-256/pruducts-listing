import { Filter, Toggle } from "../models/app-model";
import { RESET_CATEGORY, RESET_SEARCH, TOGGLE_SIDEBAR, UPDATE_CATEGORY, UPDATE_SEARCH } from "../types/types";

export function toggleClickReducer(state: Toggle = { isOpen: false }, action: any) {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return { isOpen: action.payload };
    default:
      return state;
  }
}

export function FilterReducer(state: Filter = { search: "", category: "0" }, action: any) {
  switch (action.type) {
    case UPDATE_SEARCH:
      return { ...state, search: action.payload };
    case UPDATE_CATEGORY:
      return { ...state, category: action.payload };
    case RESET_SEARCH:
      return { ...state, search: "" };
    case RESET_CATEGORY:
      return { ...state, category: "0" };
    default:
      return state;
  }
}
