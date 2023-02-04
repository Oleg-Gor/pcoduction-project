import { Suspense, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "helpers/classNames/classNames";

import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { ErrorPage } from "pages/Error";

import "./styles/index.scss";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>change Theme</button>
      <div>
        <span className="p">
          <Link to={"./"}>Main</Link>
        </span>
        <span className="p">
          <Link to={"./about"}>About</Link>
        </span>
        <span className="p">
          <Link to={"./error"}>Error</Link>
        </span>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"about"} element={<AboutPage />} />
          <Route path={"/"} element={<MainPage />} />
          <Route path={"/*"} element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
