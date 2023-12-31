import imgUrl from "../../assets/img/profile.jpg";
import javascriptLogo from "../../assets/img/js-logo.png";
import reactLogo from "../../assets/img/react-logo.png";
import htmlLogo from "../../assets/img/html-logo.png";
import cssLogo from "../../assets/img/css-logo.png";
import nodeLogo from "../../assets/img/node-logo.png";
import "./AboutMe.scss";

import { useWatchRefs } from "../../hooks/useWatchRefs";
import { forwardRef } from "react";

function Skills() {
  const ref = useWatchRefs();

  return (
    <div>
      <h1>Skills</h1>

      <div className="regular-container">
        <div className="logo-container">
          <img
            src={htmlLogo}
            alt="JavaScript Logo"
            className="logo hidden"
            ref={ref}
          />
          <img
            src={cssLogo}
            alt="JavaScript Logo"
            className="logo hidden"
            ref={ref}
          />
          <img
            src={javascriptLogo}
            alt="JavaScript Logo"
            className="logo hidden"
            ref={ref}
          />
          <img
            src={reactLogo}
            alt="JavaScript Logo"
            className="logo hidden"
            ref={ref}
          />
          <img
            src={nodeLogo}
            alt="JavaScript Logo"
            className="logo hidden"
            ref={ref}
          />
        </div>
      </div>
    </div>
  );
}

const Paragraphs = forwardRef(function Paragraphs(props, ref) {
  return (
    <div className="paragraph-container hidden" ref={ref}>
      <h1>About Me</h1>
      <p className="paragraph">
        Hey there, I&#39;m Ilya, and I find immense joy in crafting web
        applications that come to life on the internet. My fascination with web
        development took root back in 2010 when I watched &quot;The Social
        Network.&quot; Back then, the web development landscape was quite
        different; for instance, CSS Flexbox only gained widespread browser
        support around 2013.
      </p>

      <p className="paragraph">
        Jumping to the present, the same company that sparked my journey into
        web programming has introduced a revolutionary library that has reshaped
        the entire web development landscape. I&#39;m incredibly grateful for
        the advent of React, as it has added an unparalleled level of elegance
        to the web development process. Throughout my career, I&#39;ve
        constructed numerous web applications, but React has truly elevated my
        work.
      </p>

      <p className="paragraph">
        At this stage of my journey, my primary goal is simple: to keep honing
        my programming skills and to keep building web applications, because
        that&#39;s what software engineers thrive on - creation!
      </p>

      <p className="paragraph">
        Feel free to explore some of my recent projects showcased below.
      </p>

      <p className="paragraph">
        Here&#39;s a snapshot of the modern technologies I&#39;ve been deeply
        engaged with:
      </p>

      <ul className="paragraph">
        <li>JavaScript (ES6+)</li>
        <li>React</li>
        <li>Node.js</li>
        <li>
          MongoDB, including expertise in Mongoose for efficient data modeling
          and management.
        </li>
      </ul>

      <p className="paragraph">
        Thanks for taking the time to peruse my portfolio. I&#39;m excited about
        the prospects of contributing my skills and passion to future projects.
      </p>

      <Skills />
    </div>
  );
});

function AboutMeContent() {
  const ref = useWatchRefs();

  return (
    <>
      <div className="about-me">
        <section className="image-container">
          <img src={imgUrl} alt="profile-image" className="hidden" ref={ref} />
        </section>

        <Paragraphs ref={ref} />
      </div>
    </>
  );
}

function AboutMe() {
  return (
    <section id="about-me" className="about-me-container container">
      <div>{<AboutMeContent />}</div>
    </section>
  );
}

export default AboutMe;
