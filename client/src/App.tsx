import { LoginContext } from "./context/LoginContext"
import {useEffect, useState} from "react";
import RouteModel from "./routes/RouteModel";
import _  from "lodash";
import ModalRoot from "./components/modal/ModalRoot";


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});
  const [appIsLoading, setAppIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getUser = () => {
      const user = JSON.parse(localStorage.getItem("user") || "{}");

      if (!_.isEmpty(user)) {
        setIsLoggedIn(() => true);
        setUserData(() => user);
      } else {
        setIsLoggedIn(() => false);
        setUserData(() => {});
      }
      setAppIsLoading(() => false);
    };
    getUser();
  }, [isLoggedIn, appIsLoading]);

  if (appIsLoading) {
    return <p>loading...</p>;
  }


  return (
    <div className="App">
      <LoginContext.Provider value={{ userData, setUserData, isLoggedIn, setIsLoggedIn }}>
          <>
            <ModalRoot />
            <RouteModel />
          </>
      </LoginContext.Provider>
    </div>
  )
}

export default App
