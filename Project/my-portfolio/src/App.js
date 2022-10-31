import "./App.css";
import { Fragment } from "react";
import NavBar from "./Components/Main/nav";
import { Routes, Route } from "react-router-dom";
import Main from "./Components/Main/main";
import About from "./Components/About/about";
import Projects from "./Components/Projects/projects";
import WorkExperince from "./Components/WorkExperince/workExperince";
import Contact from "./Components/Contact/contact";
import Footer from "./Components/Main/footer.jsx";
function App() {
  return (
    <Fragment>
      <header>
        <NavBar />
      </header>
      <main className="App">
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/projects/*" element={<Projects />}></Route>
          <Route path="/experince" element={<WorkExperince />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </Fragment>
  );
}

export default App;
