import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./routes/Home";
import Project from "./routes/Project";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./css/Transition.css";

function Router() {
  return (
    <BrowserRouter>
      <Route
        render={({ location }) => {
          return (
            <TransitionGroup className="transition-group">
              <CSSTransition key={location.key} timeout={500} classNames="fade">
                <Switch location={location}>
                  <Route exact path="/portfolio-site" component={Home}></Route>
                  <Route
                    path="/portfolio-site/:project"
                    component={Project}
                  ></Route>
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          );
        }}
      ></Route>
    </BrowserRouter>
  );
}

export default Router;
