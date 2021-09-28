import Login from "./components/Login/Login";
import { initializeApp } from "firebase/app";
import { useContext } from "react";
import AuthContext from "./store/auth-context";
import Dashboard from "./components/Dashboard/Dashboard";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { firebaseConfig } from "./firebase/config";

initializeApp(firebaseConfig);

function App() {
  const authContext = useContext(AuthContext);

  return (
    <Router>
      <Switch>
        {authContext.isLoggedIn && (
          <>
            <Route exact path="/" component={Dashboard} />
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </>
        )}
        {!authContext.isLoggedIn && (
          <>
            <Route exact path="/login" component={Login} />
            <Route path="*">
              <Redirect to="/login" />
            </Route>
          </>
        )}
      </Switch>
    </Router>
  );
}

export default App;
