import { useState } from "react";
import About from "../components/about/About";
import Main from "../components/recipe/Main";
import Detail from "../components/details/Detail";
import NavBar from "../components/navbar/Navbar";
import Login from "../components/login/Login";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useParams,
} from "react-router-dom";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  const [auth, setAuth] = useState(false);

  const AuthContainer = () => (
    <div>
      <NavBar />
      <PrivateRouter auth={auth} path="/" exact component={Main} />
      <PrivateRouter auth={auth} path="/details" exact component={Detail} />
      <PrivateRouter auth={auth} path="/about" exact component={About} />
    </div>
  );
  return (
    <div>
      <Router>
        <Switch>
          <Route
            path="/login"
            exact
            component={() => <Login auth={auth} setAuth={setAuth} />}
          />
          <Route component={AuthContainer} />
        </Switch>
      </Router>
    </div>
  );
};

export default AppRouter;
