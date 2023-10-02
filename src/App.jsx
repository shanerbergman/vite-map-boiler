import { useState } from "react";
import { Context } from "./context.js";
import LeftNav from "./LeftNav/LeftNav";
import TopNav from "./TopNav/TopNav";
import Main from "./Main/Main";
import "./App.css";

function App() {
  const [panels, setPanels] = useState([]);

  return (
    <Context.Provider
      value={{
        panels,
        setPanels,
      }}
    >
      <div className="flex min-h-screen">
        <LeftNav />

        <div className="flex-1">
          <TopNav />
          <Main />
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
