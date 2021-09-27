import { FaGoogle } from "react-icons/fa";
import {
  Container,
  LoginCard,
  Title,
  CardWrapper,
  LoginButton,
} from "./LoginStyles";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";
import { Link } from "react-router-dom";

const Login = () => {
  const authContext = useContext(AuthContext);

  const authGoogle = () => {
    let provider = new GoogleAuthProvider();
    let auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const name = result?.user.displayName;
        const uid = result?.user.uid;
        authContext.login(token, uid, name);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      <LoginCard>
        <Title>Sign in with...</Title>
        <CardWrapper>
          <Link to="/">
            <LoginButton onClick={authGoogle}>
              <FaGoogle />
            </LoginButton>
          </Link>
        </CardWrapper>
      </LoginCard>
    </Container>
  );
};

export default Login;
