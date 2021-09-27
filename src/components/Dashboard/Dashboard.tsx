import { useContext } from "react";
import AuthContext from "../../store/auth-context";

const Dashboard = () => {
  const authContext = useContext(AuthContext);

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>{authContext.userId}</h2>
      <h1>{authContext.name}</h1>
      <button onClick={authContext.logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
