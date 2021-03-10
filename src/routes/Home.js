import React, { useState } from "react";
import { connect } from "react-redux";
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

// mapStateToProps
function mapStateToProps(state) {
  // store.getState()
  // Home에 store로부터 state 가져다줌
  return { toDos: state };
}

function mapDispatchToProps(dispatch) {
  // store.dispatch()
  return {
    addToDo: (text) => dispatch(add(text)), // 이 addToDo function을 props로 전달함
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
