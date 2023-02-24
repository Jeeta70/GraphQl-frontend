import "./App.css";
import { useRoutes } from "react-router-dom";
import { routes } from "./routes";
import NavBar from "./components/Navbar";
// import {userLoc} from "react-router-dom"

function App() {
  const element = useRoutes(routes);
  return (
    <div>
      <NavBar />
      {element}
    </div>
  );
}

export default App;
