import "./App.css";
import MainPageComponent from "./main/index.js";
import { Switch, Route } from "react-router-dom";
import UploadPgae from "./upload";
import ProductPgae from "./product";

function App() {
  return (
    <div>
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
  );
}

export default App;
