//import { createStore } from "redux";
import {
  createAction,
  createReducer,
  configureStore,
  createSlice,
} from "@reduxjs/toolkit"; //더 적은 양의 redux 코드를 짤 수 있도록 해줌

//const ADD = "ADD";
//const DELETE = "DELETE";

// const addToDo = (text) => {
//   return {
//     type: ADD,
//     text,
//   };
// };

// const deleteToDo = (id) => {
//   return {
//     type: DELETE,
//     id: parseInt(id),
//   };
// };

// const addToDo = createAction("ADD"); //type, payload(보내고 싶은 정보)를 가짐
// const deleteToDo = createAction("DELETE");

// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case addToDo.type:
//       return [...state, { text: action.payload, id: Date.now() }];
//     case deleteToDo.type:
//       return state.filter((toDo) => toDo.id !== action.payload);
//     default:
//       return state;
//   }
// };

// // 툴킷으로 작업할 때는 state를 (새로운 state를 만드는 대신) mutate할 수 있음
// // createReducer 옵션1: 새로운 state 리턴, 옵션2: state mutate
// const reducer = createReducer([], {
//   [addToDo]: (state, action) => {
//     state.push({ text: action.payload, id: Date.now() });
//     //push는 아무것도 return하지 않음
//   },
//   [deleteToDo]: (state, action) =>
//     state.filter((toDo) => toDo.id !== action.payload),
//   //뭔가를 return할 때는 꼭 새로운 state여야 함.
//   //filter는 state를 mutate하는게 아닌, 새로운 array 리턴
// });

//reducer와 actions 생성
const toDos = createSlice({
  name: "toDosReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) =>
      state.filter((toDo) => toDo.id !== action.payload),
  },
});

//const store = createStore(reducer);

const store = configureStore({ reducer: toDos.reducer });

// export const actionCreators = {
//   addToDo,
//   deleteToDo,
// };

export const { add, remove } = toDos.actions;

export default store;
