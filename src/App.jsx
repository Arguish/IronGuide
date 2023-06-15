import { useLocation } from "react-router-dom";

import Directory from "./Routes/Routes.jsx";

import NavBar from "./Components/NavBar/NavBar.jsx";
import NavBtn from "./Components/NavBtn/NavBtn.jsx";

function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/" && <NavBar></NavBar>}
      <Directory></Directory>
      {location.pathname !== "/" && <NavBtn to="/" text="Home"></NavBtn>}
    </>
  );
}

export default App;
