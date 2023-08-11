import "./Introduction.scss";

function Introduction() {
  return (
    <section className="container">
      <div>
        <div className="main-item my-name secondary-color">
          Hello, my name is
        </div>
        <div className="main-item full-name">Ilya Plyusnin</div>
        <div className="main-item">
          <span className="job-title">Software Developer</span>

          <a
            href="https://github.com/IlyaPlyusnin57"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github icon"></i>
          </a>
        </div>
        <div>
          Enthusiastic junior front-end software engineer dedicated to creating
          accessible and user-centric web interfaces
        </div>
      </div>
    </section>
  );
}

export default Introduction;
