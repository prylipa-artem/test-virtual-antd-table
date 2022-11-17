import { render } from "react-dom";
import { fps } from "./fps";

import App from "./App";
fps("fps");
const rootElement = document.getElementById("root");
render(<App />, rootElement);
