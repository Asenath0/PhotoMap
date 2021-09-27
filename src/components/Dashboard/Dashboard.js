import { useContext, useEffect, useState } from "react";
import AuthContext from "../../store/auth-context";
import { getFirestore } from "firebase/firestore";
import { getDocs, collection, query, where } from "firebase/firestore";

const Dashboard = () => {
  const authContext = useContext(AuthContext);
  const [data, setData] = useState();

  useEffect(() => {
    const db = getFirestore();
    const getData = async () => {
      const ref = collection(db, "images");
      const q = query(ref, where("userId", "==", authContext.userId));
      const querySnapshot = await getDocs(q);
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setData(items);
    };
    getData();
  }, [authContext]);

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
