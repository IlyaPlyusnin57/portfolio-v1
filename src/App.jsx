import "./App.css";

import Navbar from "./components/navbar/Navbar";
import Introduction from "./components/introduction/Introduction";
import AboutMe from "./components/about_me/AboutMe";
import Projects from "./components/projects/Projects";
import ContactMe from "./components/contact_me/ContactMe";

function App() {
  return (
    <>
      <Navbar />
      <Introduction />
      <AboutMe />
      <Projects />
      <ContactMe />
    </>
  );
}

export default App;
