import "antd/dist/antd.css";
import React from "react";
import "./App.scss";
import HomePage from "./component/Home";
import useAppTheme from "./hooks/useAppTheme";
import { Switch } from "antd";

const App = () => {
  const { theme, changeTheme } = useAppTheme();

  return (
    <div className="App" data-theme={theme}>
      <Switch
        checked={theme === "dark"}
        onChange={changeTheme}
        className={"switch"}
        unCheckedChildren={"Dark"}
        checkedChildren="Light"
      />
      <HomePage />
    </div>
  );
};

export default App;
