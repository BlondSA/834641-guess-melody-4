import React from "react";
import ReactDom from "react-dom";
import App from "./components/app/app.jsx";
import Setting from "./const.js";

ReactDom.render(
    <App
      errorsCount={Setting.ERRORS_COUNT}
    />, document.querySelector(`#root`)
);
