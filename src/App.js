import { useState } from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import "./app.css"
import Topbar from "./components/topbar/topbar";

function App() {
  const [sideBarState, setSideBarState] = useState(false);
  const sideBarToggler = () => {
    setSideBarState(!sideBarState);
  }
  const closeSideBar = () => {
    setSideBarState(false)
  }

  return (
    <>
      <Topbar sideBarToggler={sideBarToggler} />
      <Sidebar sideBarState={sideBarState} />
      {sideBarState && <div className="overlay" onClick={() => { closeSideBar() }}></div>}
      <Home />
    </>
  );
}

export default App;
