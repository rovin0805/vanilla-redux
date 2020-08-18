import React, { useState } from "react";
import { connect } from "react-redux";
//import { actionCreators } from "../store";
import { add } from "../store";
import ToDo from "../components/ToDo";

function Home({ toDos, addToDo }) {
  const [text, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    addToDo(text);
    setText("");
  }
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </>
  );
}

// mapStateToProps(state, props): redux state로 부터 component에 prop으로써 전달
function mapStateToProps(state) {
  // state is from Redux store
  // return 값: component의 props에 전달해주고 싶은 값
  return { toDos: state };
}

function mapDispatchToProps(dispatch) {
  return {
    //addToDo: (text) => dispatch(actionCreators.addToDo(text)),
    addToDo: (text) => dispatch(add(text)),
  };
}

// connect is from react-redux, component를 store에 연결해줌
export default connect(mapStateToProps, mapDispatchToProps)(Home);
