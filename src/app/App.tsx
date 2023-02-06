import { Link } from "react-router-dom";

import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "helpers/classNames/classNames";

import { AppRouter } from "app/providers/ThemeProvider/router";
import { Navbar } from "widgets/Navbar";

import "./styles/index.scss";

const App = () => {
  const { theme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <AppRouter />
    </div>
  );
};

export default App;
