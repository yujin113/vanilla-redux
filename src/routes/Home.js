import React, { useState } from "react";
import { connect } from "react-redux";

function Home(props) {
  const [text, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    setText("");
  }
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul></ul>
    </>
  );
}

// mapStateToProps
function mapStateToProps(state) {
  // Home에 store로부터 state 가져다줌
  return { toDos: state };
}

export default connect(mapStateToProps)(Home);
