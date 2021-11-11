import React, {useState, useEffect, useMemo} from "react"; 
import { ToastContainer } from "react-toastify";
import jwtDecode from "jwt-decode";
import AuthContext from "../context/AuthContext";
import { setToken, getToken } from "../api/token";
import "../scss/global.scss";
import "semantic-ui-css/semantic.min.css";
import 'react-toastify/dist/ReactToastify.css';


export default function MyApp({ Component, pageProps }) {
  const [auth, setAuth] = useState(undefined);
  const [realoadUser, setReloadUser] = useState(false);

  useEffect(() => {
    const token = getToken();
    if(token) {
      setAuth({
        token,
        idUser: jwtDecode(token).id,
      });
    } else {
      setAuth(null);
    }
    setReloadUser(false);
  },[realoadUser]);

  const login = (token) => {
    setToken(token);
     setAuth ({
        token,
        idUser: jwtDecode(token).id,
      });
  };

  const authData = useMemo(
    () => ({
      auth,
      login,
      logout: () => null, //Borrar... 
      setReloadUser,
    }),
    [auth]
  );

  if(auth === undefined) return null;
  
  return (
  <AuthContext.Provider value={authData}> 
      <Component {...pageProps} /> 
      <ToastContainer 
      position="top-right"
      autoClose={5000}
      hideProgressBar
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss={false}
      draggable
      pauseOnHover
      />
  </AuthContext.Provider>);
  }
