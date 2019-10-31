import { combineReducers } from "redux";
import cards from "store/reducers/cards";
import lists from "store/reducers/lists";

export default combineReducers({
  cards,
  lists
});
