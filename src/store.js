import { createStore } from "redux";

const ADD_TODO = "ADD";
const DELETE_TODO = "DELETE";

export const addToDo = (text) => {
  return {
    type: ADD_TODO,
    text,
  };
};

export const deleteToDo = (id) => {
  return {
    type: DELETE_TODO,
    id,
  };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [{ text: action.text, id: action.id }, ...state];
    case DELETE_TODO:
      return state.filter((toDo) => toDo.id !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
