import { combineReducers } from "redux";
import { FilterReducer, toggleClickReducer } from "./filter";
import { categoriesListReducer, productsListReducer } from "./products";



// COMBINED REDUCERS
const reducers: object = {
    ToggleClickState: toggleClickReducer,
    productState: productsListReducer,
    categoriesState: categoriesListReducer,
    filterState:FilterReducer
};

export default combineReducers(reducers);
