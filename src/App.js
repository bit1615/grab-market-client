import "./App.css";
import MainPageComponent from "./main/index.js";
import { Switch, Route } from "react-router-dom";
import UploadPgae from "./upload";
import ProductPgae from "./product";

function App() {
  return (
    <div>
      <div id="header">
        <div id="header-area">
          <img src="/images/icons/logo.png" />
        </div>
      </div>
      <div id="body">
        <Switch>
          <Route exact={true} path={"/"}>
            <MainPageComponent />;
          </Route>
          <Route exact={true} path={"/products/:id"}>
            <ProductPgae />
          </Route>
          <Route exact={true} path={"/upload"}>
            <UploadPgae />
          </Route>
        </Switch>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default App;
