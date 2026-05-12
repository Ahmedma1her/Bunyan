// import { useState } from "react";
import "./App.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import TmarkContext from "./components/Context/TmarkContext.jsx";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>


        <TmarkContext>

      <Dashboard />
        </TmarkContext>


    </>
  );
}

export default App;
