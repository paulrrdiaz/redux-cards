import { combineReducers } from "redux";
import cards from "store/reducers/cards";
import lists from "store/reducers/lists";
import users from "store/reducers/users";

export default combineReducers({
  lists,
  cards,
  users
});
