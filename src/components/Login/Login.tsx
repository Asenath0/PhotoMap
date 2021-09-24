import { FaGoogle } from "react-icons/fa";
import {
  Container,
  LoginCard,
  Title,
  CardWrapper,
  LoginButton,
} from "./LoginStyles";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const Login = () => {
  const authGoogle = () => {
    let provider = new GoogleAuthProvider();
    let auth = getAuth();
    signInWithPopup(auth, provider)
    .then((result) => {
        console.log(result)
    })
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
