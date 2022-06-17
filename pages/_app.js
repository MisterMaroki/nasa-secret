import AuthContext from "../AuthContext";
import "../styles/globals.scss";

const MyApp = ({ Component, pageProps }) => {
  return (
    <AuthContext>
      <Component {...pageProps} />
    </AuthContext>
  );
};

export default MyApp;
