import "./App.css";

import Navbar from "./components/navbar/Navbar";
import Introduction from "./components/introduction/Introduction";
import AboutMe from "./components/about_me/AboutMe";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <>
      <Navbar />
      <Introduction />
      <AboutMe />
      <Projects />
      <section id="contact-me" className="container">
        <div>
          <h1>Contact Me</h1>
          <section>
            <p>You can email me at ilyaplyusnin57@gmail.com</p>
            <p>
              Just type in your email and message below and it will be sent to
              my email
            </p>
          </section>
        </div>
      </section>
    </>
  );
}

export default App;
