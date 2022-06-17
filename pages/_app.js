import AuthContext from "../AuthContext";
import toast, { Toaster } from "react-hot-toast";
import "../styles/globals.scss";

const MyApp = ({ Component, pageProps }) => {
  return (
    <AuthContext>
      <Component {...pageProps} />
      <Toaster />
    </AuthContext>
  );
};

export default MyApp;
