import "./App.css";

import imgUrl from "./assets/img/profile.jpg";

import Navbar from "./components/navbar/Navbar";
import Introduction from "./components/introduction/Introduction";

function App() {
  return (
    <>
      <Navbar />
      <Introduction />
      <section id="about-me" className="about-me-container container">
        <div>
          <div className="about-me">
            <section className="image-container">
              <img src={imgUrl} alt="profile-image" />
            </section>

            <div className="paragraph-container">
              <h1>About Me</h1>
              <p className="paragraph">
                Hey there, I&#39;m Ilya, and I find immense joy in crafting web
                applications that come to life on the internet. My fascination
                with web development took root back in 2010 when I watched
                &quot;The Social Network.&quot; Back then, the web development
                landscape was quite different; for instance, CSS Flexbox only
                gained widespread browser support around 2013.
              </p>

              <p className="paragraph">
                Jumping to the present, the same company that sparked my journey
                into web programming has introduced a revolutionary library that
                has reshaped the entire web development landscape. I&#39;m
                incredibly grateful for the advent of React, as it has added an
                unparalleled level of elegance to the web development process.
                Throughout my career, I&#39;ve constructed numerous web
                applications, but React has truly elevated my work.
              </p>

              <p className="paragraph">
                At this stage of my journey, my primary goal is simple: to keep
                honing my programming skills and to keep building web
                applications, because that&#39;s what software engineers thrive
                on - creation!
              </p>

              <p className="paragraph">
                Feel free to explore some of my recent projects showcased below.
              </p>

              <p className="paragraph">
                Here&#39;s a snapshot of the modern technologies I&#39;ve been
                deeply engaged with:
              </p>

              <ul className="paragraph">
                <li>JavaScript (ES6+)</li>
                <li>React</li>
                <li>Node.js</li>
                <li>
                  MongoDB, including expertise in Mongoose for efficient data
                  modeling and management.
                </li>
              </ul>

              <p className="paragraph">
                Thanks for taking the time to peruse my portfolio. I&#39;m
                excited about the prospects of contributing my skills and
                passion to future projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="projects-container container">
        <div>
          <h1>Projects</h1>

          <div className="projects">
            <div className="project-item">
              <h4>Netflix Clone Front End</h4>
              <p className="project-description">
                In this project, I developed a Netflix Clone front end using
                HTML and CSS. The responsive design and attention to detail
                showcase my proficiency in front-end web development, while
                providing an authentic Netflix-like browsing experience
              </p>
              <section className="technology-container">
                <span className="technology">HTML</span>
                <span className="technology">CSS</span>
                <span className="technology">JavaScript</span>
              </section>
              <section className="view-links-container">
                <a
                  href="https://netflix-clone-front-end-seven.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Site
                </a>
                <a
                  href="https://github.com/IlyaPlyusnin57/netflix-clone-front-end"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Code
                </a>
              </section>
            </div>
            <div className="project-item">
              <h4>Authentication System</h4>
              <p className="project-description">
                In this project, I built a React powered web app enabling secure
                user registration, login, and post creation. Utilizing JWT for
                request verification, the project ensures data integrity. The
                registration process includes instant database validation,
                preventing duplicate usernames or emails.
              </p>
              <section className="technology-container">
                <span className="technology">Vite</span>
                <span className="technology">React</span>
                <span className="technology">Node</span>
                <span className="technology">Express</span>
                <span className="technology">MongoDB</span>
                <span className="technology">Socket.IO</span>
                <span className="technology">JWT</span>
                <span className="technology">SCSS</span>
              </section>
              <section className="view-links-container">
                <a
                  href="https://github.com/IlyaPlyusnin57/authentication-front-end"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Code (Front End)
                </a>
                <a
                  href="https://github.com/IlyaPlyusnin57/authentication-back-end"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Code (Back End)
                </a>
              </section>
            </div>
            <div className="project-item">
              <h4>Social Media</h4>
              <p className="project-description">
                This is a comprehensive social media React application that
                encompasses a wide array of features: from user-following and
                blocking functionalities to interactive post creation, tagging,
                and commenting. Leveraging JWT authentication, the app
                guarantees the security of all API requests.
              </p>
              <section className="technology-container">
                <span className="technology">React</span>
                <span className="technology">Node</span>
                <span className="technology">Express</span>
                <span className="technology">MongoDB</span>
                <span className="technology">Mongoose</span>
                <span className="technology">Socket.IO</span>
                <span className="technology">JWT</span>
                <span className="technology">SCSS</span>
              </section>
              <section className="view-links-container">
                <a
                  href="https://social-media-frontend-drab.vercel.app/login"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Site
                </a>
                <a
                  href="https://github.com/IlyaPlyusnin57/social-media-frontend"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Code (Front End)
                </a>
                <a
                  href="https://github.com/IlyaPlyusnin57/social-media-backend"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Code (Back End)
                </a>
                <a
                  href="https://github.com/IlyaPlyusnin57/social-media-socket"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Code (Socket Server)
                </a>
              </section>
            </div>
          </div>
        </div>
      </section>

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
