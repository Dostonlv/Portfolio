import React from "react";
import WorksWr from "./WorksWr";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Works = () => {
  const works = [
    {
      title: "Quiz App (JavaScript)",
      img: "screenshots/quiz.jpg",
      link: "https://java-script-quiz-app.vercel.app/",
      codes: "https://github.com/IamItachiUchiha/JavaScriptQuizApp",
    },
    {
      title: "Anime website",
      img: "screenshots/anime.jpg",
      link: "https://anime-azure-mu.vercel.app/",
      codes: "https://github.com/IamItachiUchiha/Animesayt",
    },
    {
      title: "Tic-Tac-Toe(Nextjs+TypeScript)",
      img: "screenshots/tic-tac.jpg",
      link: "https://tic-tac-toe-nextjsand-type-script.vercel.app/",
      codes: "https://github.com/IamItachiUchiha/TicTacToeNextjsandTypeScript",
    },
    {
      title: "Tic Tac Toe game ",
      img: "screenshots/tic-tac-toe.jpg",
      link: "https://tic-tac-toe-sigma-rouge.vercel.app/",
      codes: "https://github.com/IamItachiUchiha/TicTacToe",
    },
  ];
  return (
      <WorksWr>
        <h2 className="my-5 px-3">You can see my works here</h2>
        <div className="container">
          <div className="row">
            {works.map((v, i) => (
                // eslint-disable-next-line react/jsx-key
                <div className="col-md-6 col-sm-12 my-3">
                  <div className="mycard">
                    <div className="visible">
                      <div className="imgwrap">

                        <img src={v.img} alt="" />
                      </div>

                      <div className="invisible-part">
                        <div className="content">
                          <div className="go">
                            <a href={v.link} target="_blank" rel="noreferrer">
                              <BsBoxArrowUpRight />
                            </a>
                          </div>
                          <div className="codes">
                            <a href={v.codes} target="_blank" rel="noreferrer">
                              <FaGithub />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h5>
                      <a href={v.link} target="_blank" rel="noreferrer">
                        {v.title}
                      </a>
                    </h5>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </WorksWr>
  );
};

export default Works;