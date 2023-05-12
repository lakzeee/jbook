import _React from "react";
import _ReactDOM from "react-dom";
const show = (value) => {
  const root = document.querySelector("#root");
  if (typeof value === "object") {
    if (value.$$typeof && value.props) {
      ReactDOM.render(value, root.innerHTML);
    } else {
      root.innerHTML = JSON.stringify(value);
    }
  } else {
    root.innerHTML = value;
  }
};
