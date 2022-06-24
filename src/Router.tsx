import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./routes/Home";
import Project from "./routes/Project";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route path="/:project">
          <Project />
        </Route> */}
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
