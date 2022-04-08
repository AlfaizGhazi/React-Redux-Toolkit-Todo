import * as React from "react";
import { useSelector } from "react-redux";
import { Navbar, Footer } from "./Components";
import { GlobalStyle } from "./Utils";
import RoutesManager from "./Routes/RoutesManager";

const App = () => {
  const isDarkMode = useSelector((state) => state.darkModeState);
  return (
    <React.Fragment>
      <GlobalStyle isDarkMode={isDarkMode} />
      <Navbar isDarkMode={isDarkMode} />
      <RoutesManager isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </React.Fragment>
  );
};

export default App;
