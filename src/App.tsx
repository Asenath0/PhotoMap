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

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "photomap-6ef26.firebaseapp.com",
  projectId: "photomap-6ef26",
  storageBucket: "photomap-6ef26.appspot.com",
  messagingSenderId: "432171368717",
  appId: "1:432171368717:web:d98a9fac7c9b88119c3044",
  measurementId: "G-FE19H1KSWB",
};

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
