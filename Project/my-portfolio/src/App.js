import logo from "./logo.svg";
import "./App.css";
import { Fragment } from "react";
import NavBar from "./Components/Main/Nav";
import Main from "./Components/Main/Main";
function App() {
  return (
    <Fragment>
      <header>
        <NavBar />
      </header>
      <main>
        <Main />
      </main>
    </Fragment>
  );
}

export default App;
