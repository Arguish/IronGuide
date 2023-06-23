import { useLocation } from "react-router-dom";

import Directory from "./Routes/Routes.jsx";

import NavBar from "./Components/NavBar/NavBar.jsx";
import NavBtn from "./Components/NavBtn/NavBtn.jsx";

function App() {
  const location = useLocation();
  return (
    <>
      <NavBar></NavBar>
      <Directory></Directory>
    </>
  );
}

export default App;
