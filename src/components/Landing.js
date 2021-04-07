import React from "react";

const Landing = () => {
  return (
    <div className='landing flex flex-center' id='home'>
      <div className='landing__card flex jc-c ai-c col'>
        <h1 className='name'>Michael Hall</h1>
        <ul className='socials flex ai-c jc-c row'>
          <li>
            <a
              href='https://github.com/DevLikeMike'
              target='_blank'
              rel='noreferrer'
              className='flex ai-c jc-c col'
            >
              <i className='fab fa-github fa-2x'></i>
              <span>Github</span>
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/michael-hall-055a3a122/'
              target='_blank'
              rel='noreferrer'
              className='flex ai-c jc-c col'
            >
              <i className='fab fa-linkedin fa-2x'></i>
              <span>LinkedIn</span>
            </a>
          </li>
          <li>
            <a
              href='https://codepen.io/mhall-project'
              target='_blank'
              rel='noreferrer'
              className='flex ai-c jc-c col'
            >
              <i className='fab fa-codepen fa-2x'></i>
              <span>Codepen</span>
            </a>
          </li>
          <li>
            <a href='#projects' className='flex ai-c jc-c col'>
              <i className='fas fa-tasks fa-2x'></i>
              <span>Projects</span>
            </a>
          </li>
        </ul>
        <hr />
        <div className='intro flex jc-c ai-c text-center'>
          <p>
            A front-end developer focused in <span>React</span> and{" "}
            <span>Redux</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
