import React from 'react';

const HomePage = (props) => {
  return (
    <article className="container">
      <section>
        <h1>
          - Hello,
        </h1>
        <p>
          My name is<span> Tyler Bainbridge.</span>
        </p>
        <p>
          I'm a<span> full stack engineer </span> located in <span>Boston, MA </span>
          with professional<span> back-end</span> and <span>front-end</span> experience. I'm currently attending
          the <span>University of Massachusetts Lowell</span> for Computer Science.
        </p>
      </section>
    </article>
  );
};

export default HomePage;