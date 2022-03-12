import { useState } from "react";

import "./App.css";
import Home from "./Pages/Home";
import { Fade } from "react-awesome-reveal";

import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

import Works from "./Pages/Works";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

const customAnimation = keyframes`
from {
  opacity: 0;
  transform: translate(-200px, 0);
}

to {
  opacity: 1;
  transform: translate(0, 0, 0);
}
`;
const customAnimation2 = keyframes`
from {
  opacity: 0;
  transform: translate(200px, 0);
}

to {
  opacity: 1;
  transform: translate(0, 0, 0);
}
`;
const customAnimation3 = keyframes`
from {
  opacity: 0;
  transform: translate(0, 100px);
}

to {
  opacity: 1;
  transform: translate(0, 0);
}
`;
const menus = ["welcome", "select", "menu"];
const tabs = ["work", "about", "contact"];

// starting app
function App() {
  const [index, setIndex] = useState(0);
  const [index2, setIndex2] = useState(0);
  // const [play, setPlay] = useState(false);
  // const [url, setUrl] = useState("/song.mp3");
  // const audio = new Audio(url);

  // const Play = () => {
  //   setPlay(true);
  //   audio.play();
  // };

  // const Pause = () => {
  //   setPlay(false);
  //   audio.pause();
  // };

  // useEffect(() => {
  //   Play();
  //   audio.loop = true;
  //   console.log(audio);
  // }, []);

  //
  const enter = (e) => {
    nextIndex(1);
  };
  const nextIndex = (i) => {
    setIndex(i);
  };
  const nextTab = (i) => {
    setIndex2(i);
  };

  const openTab = (i) => {
    setIndex(2);
    setIndex2(i);
  };

  //
  return (
    <div>
      <Home>
        {/* // <div className="audio">
        //   {audio.play ? <BsFillVolumeMuteFill /> : <BsFillVolumeUpFill />}
        // </div> */}
        {menus[index] === "welcome" ? (
          <Reveal keyframes={customAnimation} cascade>
            <h2 className="welcome text-center">welcome</h2>
            <p className="subtitle text-center">to my world</p>
            <button
              className="home-btn text-center mx-auto "
              onClick={(e) => enter(e)}
            >
              enter
            </button>
          </Reveal>
        ) : (
          ""
        )}

        {menus[index] === "select" ? (
          <Reveal keyframes={customAnimation2} cascade>
            <h2 className="welcome select text-uppercase">
              Select destination
            </h2>

            <div className="d-flex justify-content-center mt-5 flex-wrap">
              <button className="home-btn mx-5 my-2" onClick={() => openTab(0)}>
                work
              </button>
              <button className="home-btn mx-5 my-2" onClick={() => openTab(1)}>
                about
              </button>
              <button className="home-btn mx-5 my-2" onClick={() => openTab(2)}>
                contact
              </button>
            </div>
          </Reveal>
        ) : (
          ""
        )}
        {menus[index] === "menu" ? (
          <Fade className="tabs pt-5 ">
            <div className="container ">
              <Reveal keyframes={customAnimation3}>
                <div className="row ">
                  {tabs.map((v, i) => (
                    <div className="col-md-4 col-sm-12 text-center">
                      <button
                        className={`select-btn m-5 ${
                          v === tabs[index2] ? "active" : ""
                        }`}
                        onClick={() => nextTab(i)}
                      >
                        {v}
                      </button>
                    </div>
                  ))}
                </div>
                <hr className="bg-white" />
                <div>
                  {tabs[index2] === "work" ? (
                    <Reveal keyframes={customAnimation} cascade>
                      <div className="workwr">
                        <Works />
                      </div>
                    </Reveal>
                  ) : (
                    ""
                  )}
                  {tabs[index2] === "about" ? (
                    <Reveal
                      className="container"
                      keyframes={customAnimation}
                      cascade
                    >
                      <div>
                        <About />
                      </div>
                    </Reveal>
                  ) : (
                    ""
                  )}
                  {tabs[index2] === "contact" ? (
                    <Reveal
                      className="container"
                      keyframes={customAnimation}
                      cascade
                    >
                      <div>
                        <Contact />
                      </div>
                    </Reveal>
                  ) : (
                    ""
                  )}
                </div>
              </Reveal>
            </div>
          </Fade>
        ) : (
          ""
        )}
      </Home>
    </div>
  );
}

export default App;
