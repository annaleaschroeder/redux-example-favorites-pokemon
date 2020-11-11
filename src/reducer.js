import { combineReducers } from "redux";
import store from "./store";

function items(state = [], action) {
  switch (action.type) {
    case "list/replace":
      return action.items;
    default:
      return state;
  }
}

function favorites(state = [], action) {
  switch (action.type) {
    case "favorites/add":
      if (state.findIndex((item) => item === action.item) >= 0) {
        return state;
      }

      return [...state, action.item].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    case "favorites/remove":
      return state
        .filter((item) => item !== action.item)
        .sort((a, b) => a.name.localeCompare(b.name));
    default:
      return state;
  }
}

export function buildAddToFavorites(item) {
  return function () {
    store.dispatch({ type: "favorites/add", item: item });
  };
}

export function buildRemoveFromFavorites(item) {
  return function () {
    store.dispatch({ type: "favorites/remove", item: item });
  };
}

export default combineReducers({ items, favorites });
