import React from "react";
import { render } from "react-dom";
import Demo from "./demo";

import Fullimage from "./Fullimage";
const rootElement = document.querySelector("#root");
if (rootElement) {
  render(<Demo />, rootElement);
}
