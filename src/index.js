import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import "./assets/styles/flex.scss";
import "./assets/styles/margin_padding.scss";
import App from "./App";


import { MantineProvider } from '@mantine/core';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
	 <MantineProvider withGlobalStyles withNormalizeCSS>
	<BrowserRouter>
      <App />
    </BrowserRouter>
	 </MantineProvider>
    
  </React.StrictMode>
);
