import { Link } from "react-router-dom";

import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "helpers/classNames/classNames";

import { AppRouter } from "./providers/ThemeProvider/router";

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
      <AppRouter />
    </div>
  );
};

export default App;
