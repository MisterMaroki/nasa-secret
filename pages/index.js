import { useEffect } from "react";
import { useRouter } from "next/router";
import { AuthState } from "../AuthContext";
import styles from "../styles/Home.module.scss";

const Home = () => {
  const router = useRouter();
  const { user } = AuthState();

  useEffect(() => {
    if (user === null) {
      router.push("/auth");
    }
  }, [user]);

  return user && <div className={styles.container}>Finder: {user}</div>;
};

export default Home;
