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

const Login = () => {
  const authContext = useContext(AuthContext);

  const authGoogle = () => {
    let provider = new GoogleAuthProvider();
    let auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        authContext.login(token);
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
          <LoginButton onClick={authGoogle}>
            <FaGoogle />
          </LoginButton>
        </CardWrapper>
      </LoginCard>
    </Container>
  );
};

export default Login;
