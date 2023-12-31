import React from 'react'
import Style from './App.module.scss'
import {ThemeProvider} from "@mui/material";
import {Route, Routes} from "react-router-dom";
import Home from "./Home/Home";
import {theme} from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className={Style.App}>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </div>
    </ThemeProvider>
  )
}

export default App;

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    // eslint-disable-next-line
    interface IntrinsicElements {
      [tag: string]: any
    }
  }
}
