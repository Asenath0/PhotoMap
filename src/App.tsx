import Login from "./components/Login/Login";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCq5TAxsEifb6pcMiTHx382pfwJvxzRi5Q",
  authDomain: "photomap-6ef26.firebaseapp.com",
  projectId: "photomap-6ef26",
  storageBucket: "photomap-6ef26.appspot.com",
  messagingSenderId: "432171368717",
  appId: "1:432171368717:web:d98a9fac7c9b88119c3044",
  measurementId: "G-FE19H1KSWB",
};

initializeApp(firebaseConfig);

function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
