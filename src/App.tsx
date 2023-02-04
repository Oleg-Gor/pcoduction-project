import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import ErrorPage from "./pages/Error/ErrorPage";

import { Counter } from "./components/Counter";

import "./index.scss";
import { Suspense } from "react";

const App = () => {
  return (
    <div className="app">
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
          <Route path={"about"} element={<AboutPageAsync />} />
          <Route path={"/"} element={<MainPageAsync />} />
          <Route path={"/*"} element={<ErrorPage />} />
        </Routes>
        <Counter />
      </Suspense>
    </div>
  );
};

export default App;
