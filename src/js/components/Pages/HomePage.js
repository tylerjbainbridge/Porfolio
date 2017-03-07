import React from 'react';

const HomePage = (props) => {
  return (
    <article className="container">
      <section className="content">
        <h1>
          Hello,
        </h1>
        <p>
          My name is<span> Tyler Bainbridge.</span>
        </p>
        <p>
          I'm a<span> full stack engineer </span> located in <span>Boston, MA </span>
          with professional<span> back-end</span> and <span>front-end</span> experience. I'm attending
          the <span>University of Massachusetts Lowell</span> for <span>Computer Science</span>.
        </p>
        <h1>
          Currently -
        </h1>
        <p>
          <span>Software Engineer</span> at <span><a href="https://cond.co">Conduit</a></span>
        </p>
        <p>
          <span>President</span> of the <span><a href="https://github.com/UML-WebDev">Web Development Club</a></span>
        </p>
        <h1>
          Previously -
        </h1>
        <p>
          <span>Front End Engineering Intern</span> at <span><a href="https://higherme.com">HigherMe</a></span>
        </p>
        <p>
          <span>Software Engineering Intern</span> at <span><a href="https://rakuten.com">Rakuten USA</a></span>
        </p>
      </section>
      <section className="icons">
        <div className="icon">
          <a href="https://github.com/tylerjbainbridge">
            <i className="fa fa-github" aria-hidden="true"></i>
          </a>
        </div>
        <div className="icon">
          <a href="https://www.linkedin.com/in/tylerbainbridge/">
            <i className="fa fa-linkedin" aria-hidden="true"></i>
          </a>
        </div>
      </section>
    </article>
  );
};

export default HomePage;