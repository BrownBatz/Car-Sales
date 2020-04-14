import { combineReducers } from "redux";

import { additionalItemsReducer } from "./additionalItemsReducer";
import { addedItemsReducer } from "./addedItemsReducer";

export default combineReducers({ additionalItemsReducer, addedItemsReducer});