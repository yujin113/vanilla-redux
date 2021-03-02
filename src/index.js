import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const countModifier = (count = 0, action) => {
  if (action.type === "ADD") {
    return count + 1;
  } else if (action.type === "MINUS") {
    return count - 1;
  } else {
    return count;
  }
};

const countStore = createStore(countModifier); // createStore은 우리에게 reducer를 주기를 요구함. reducer는 function이어야 함

countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "MINUS" });
console.log(countStore.getState());
