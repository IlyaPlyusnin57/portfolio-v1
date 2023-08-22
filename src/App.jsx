import "./App.css";

import Navbar from "./components/navbar/Navbar";
import Introduction from "./components/introduction/Introduction";
import AboutMe from "./components/about_me/AboutMe";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Introduction />
      <AboutMe />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
