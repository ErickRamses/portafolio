import "./styles/main.css";
import { Button, Container, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Aos from "aos";
import "aos/dist/aos.css";

import Card from "react-bootstrap/Card";
import html5 from "./imagen/html5.png";
import css3 from "./imagen/css3.png";
import javas from "./imagen/javascript.png";
import reactl from "./imagen/react.png";
import reactrouterl from "./imagen/twitterimage.jpg";
import bootstrap from "./imagen/bootstrap-icon.png";
import sass from "./imagen/sass-icon.png";
import git from "./imagen/git-icon.png";
import ts from "./imagen/ts.png";
import node from "./imagen/node.png";
import ex from "./imagen/ex.png";
import mon from "./imagen/mon.png";
import axi from "./imagen/axios.png";
import red from "./imagen/redux.png";
import mog from "./imagen/mog.png";
import next from "./imagen/nextjs.png";
import graph from "./imagen/GraphQL.png";

import code from "./imagen/pexels-pixabay-270366 (2) (2).jpg";
import Canvas from "./componets/Canvas";
import Nav from "./componets/Nav";

//import Projects from './componets/Projects';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import Projects from "./componets/Projects";
import sing from "./imagen/sing.png";
import sing2 from "./imagen/sing2.png";
import sing3 from "./imagen/sing3.png";

import grav from "./imagen/gravity.png";
import grav2 from "./imagen/gravity2.png";
import grav3 from "./imagen/gravity3.png";

import ApiCountries from "./imagen/count1.png";
import ApiCountries2 from "./imagen/count2.png";
import ApiCountries3 from "./imagen/count3.png";

import name1 from "./imagen/Name1.png";
import name2 from "./imagen/name2p.png";
import name3 from "./imagen/name 3.png";

import p1 from "./imagen/p1.png";
import p2 from "./imagen/p2.png";
import p3 from "./imagen/p3.png";

import sp1 from "./imagen/sp1_1.webp";
import sp2 from "./imagen/sp2_1.webp";
import sp3 from "./imagen/sp3_1.webp";

import gam1 from "./imagen/gam1.png";
import gam2 from "./imagen/gam2.png";
import gam3 from "./imagen/gam3.png";

import pomo1 from "./imagen/pomo1.png";
import pomo2 from "./imagen/pomo2.png";
import pomo3 from "./imagen/pomo3.png";

import { useEffect, useRef } from "react";
function App() {
  let navigate = useNavigate();
  let loade = useRef();
  let Header = useRef();
  let Header1 = useRef();
  let Header2 = useRef();
  let Header3 = useRef();

  let loaded = false;
  useEffect(() => {
    Aos.init({
      duration: 2000,
      offset: -800,
      once: true,
      disable: "mobile",
    });

    window.onscroll = function () {
      window.scrollTo(0, 0);
    };
    window.scrollTo(0, 0);

    window.addEventListener("load", () => {
      if (loaded) return;
      loaded = true;

      window.onscroll = "";
      window.scrollTo(0, 0);
      setTimeout(() => {
        loade.current.remove();
        window.scrollTo(0, 0);
        Header.current.style.animationName = "example";
        Header1.current.style.animationName = "example";
        Header2.current.style.animationName = "example";
        Header3.current.style.animationName = "example";
      }, 150);
    });
  }, []);
  setTimeout(() => {
    if (loaded) return;
    window.scrollTo(0, 0);
    window.onscroll = "";
    loaded = true;
    setTimeout(() => {
      loade.current.remove();
      Header.current.style.animationName = "example";
      Header1.current.style.animationName = "example";
      Header2.current.style.animationName = "example";
      Header3.current.style.animationName = "example";
    }, 155);
  }, 1850);
  //;

  return (
    //title  skills canvas 🙏  navar
    //lets add planets but first canvas in other componet lol
    //fix proyects then video and description
    <div>
      <div ref={loade} className="loader-wrapper">
        <span className="loader">
          <span className="loader-inner"></span>
        </span>
      </div>
      <div className="App">
        <div style={{ padding: "20px", zIndex: "1000" }}>
          <div ref={Header} className="Header">
            Hi, my name is{" "}
          </div>
          <div ref={Header1} className="Header1">
            Erick Ramses
          </div>
          <div ref={Header3} className="Header3">
            Mobile Developer &
          </div>
          <div ref={Header2} className="Header2">
            Web Developer
          </div>
        </div>
        <div className="cont">
          <div className="Back"></div>
        </div>
      </div>
      <Canvas></Canvas>

      <div className="arrow-up"></div>
      <div className="body">
        <br></br>
        <div style={{ overflow: "hidden" }}>
          <div className="Aboutme" data-aos="fade-left">
            <div style={{ maxWidth: "700px" }}>
              <span style={{ fontSize: "1.3em" }}>
                <u>About</u> me:<br></br>
              </span>
              Hello, I'm Erick Ramses, a self-taught web developer looking for
              an opportunity to show my potential , i love solving problems and
              if it is difficult, the better :) i normally do it for hours
              that's why i like strategy games I'm learning new things every day
              <br></br>
              <br></br>
              <b>minimal payment is 3$/hr</b>
            </div>
            <img
              style={{ width: "90%", maxWidth: "800px", borderRadius: "7px" }}
              loading={"lazy"}
              src={code}
            ></img>
          </div>
        </div>
        <div className="arrow-up2"></div>

        <div className="Skills">
          <div style={{ fontSize: "1.5rem", width: "100%" }}>
            <span style={{ fontSize: "1.3em" }}>
              My current <u>skills</u>:<br></br>
            </span>
            <span style={{ fontSize: ".8em" }}>
              {/* I am proficient in these technologies. I can solve most problems. If I'm stuck in a situation, I can research the solution, and if I don't find it, it's a nice challenge to solve.    */}
              <div style={{ display: "flex", justifyContent: "center" }}>
                <ul style={{ textAlign: "left" }}>
                  <li>
                    <b>
                      <div
                        data-aos-once="false"
                        data-aos="fade-right"
                        data-aos-offset="-550"
                        data-aos-duration="500"
                        data-aos-delay="0"
                        style={{ display: "inline-block" }}
                      >
                        Fast:
                      </div>
                    </b>
                    performance such as optimizing images and minifying CSS and
                    JavaScript
                  </li>
                  <li>
                    <b>
                      <div
                        data-aos-once="false"
                        data-aos="fade-down"
                        data-aos-offset="-550"
                        data-aos-duration="1500"
                        data-aos-delay="50"
                        style={{ display: "inline-block" }}
                      >
                        Res
                      </div>
                      <div
                        data-aos-once="false"
                        data-aos="fade-down"
                        data-aos-offset="-550"
                        data-aos-duration="1500"
                        data-aos-delay="100"
                        style={{ display: "inline-block" }}
                      >
                        pons
                      </div>
                      <div
                        data-aos-once="false"
                        data-aos="fade-down"
                        data-aos-offset="-550"
                        data-aos-duration="1500"
                        data-aos-delay="150"
                        style={{ display: "inline-block" }}
                      >
                        ive:
                      </div>
                    </b>
                    understanding of UI/UX best practices and responsive design
                  </li>
                  {/* <li>excellent debugging skills with dev tools and coding best practices</li> */}
                  <li>
                    <b>
                      <div
                        data-aos-once="false"
                        data-aos="flip-up"
                        data-aos-offset="-550"
                        data-aos-duration="2000"
                        data-aos-delay="500"
                        style={{ display: "inline-block" }}
                      >
                        Dy
                      </div>
                      <div
                        data-aos-once="false"
                        data-aos="fade-up-left"
                        data-aos-offset="-550"
                        data-aos-duration="1000"
                        data-aos-delay="500"
                        style={{ display: "inline-block" }}
                      >
                        na
                      </div>
                      <div
                        data-aos-once="false"
                        data-aos="fade-up-right"
                        data-aos-offset="-550"
                        data-aos-duration="500"
                        data-aos-delay="500"
                        style={{ display: "inline-block" }}
                      >
                        mic:
                      </div>
                    </b>
                    websites can be much more interesting , i love making pages
                    come to life.
                  </li>
                </ul>
              </div>
            </span>
          </div>

          <br></br>
          <br></br>

          <div
            style={{ gap: "10px", overflow: "hidden" }}
            className="d-flex flex-wrap justify-content-center"
            data-aos="fade-zoom-in"
          >
            <div
              style={{ fontSize: "1.5em", width: "100%", textAlign: "center" }}
            >
              <span style={{ fontSize: "1.3em" }}></span>
              Front end:
            </div>
            <br></br>
            {/* <div><img className='imagen' src={html5}></img><div style={{textAlign:"center"}}>html5</div></div>
            <div><img className='imagen' src={css3}></img><div style={{textAlign:"center"}}>Css3</div></div> */}
            <div
              data-aos-offset="-550"
              data-aos="fade-left"
              data-aos-delay="600"
            >
              <img className="imagenround" src={javas}></img>
              <div style={{ textAlign: "center" }}>JavaScript (ES6+)</div>
            </div>
            <div
              data-aos-offset="-550"
              data-aos="fade-left"
              data-aos-delay="650"
            >
              <div
                style={{
                  width: "90px",
                  height: "90px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  style={{ width: "84px" }}
                  className="imagen"
                  src={ts}
                ></img>
              </div>
              <div style={{ textAlign: "center" }}>Typescript</div>
            </div>
            <div
              data-aos-offset="-550"
              data-aos="fade-left"
              data-aos-delay="700"
            >
              <img className="imagenround" src={reactl}></img>
              <div style={{ textAlign: "center" }}>React</div>
            </div>
            <div
              data-aos-offset="-550"
              data-aos="fade-left"
              data-aos-delay="750"
            >
              <img className="imagen" src={next}></img>
              <div style={{ textAlign: "center" }}>Next</div>
            </div>

            <div
              data-aos-offset="-550"
              data-aos="fade-left"
              data-aos-delay="800"
            >
              <img className="imagen" src={bootstrap}></img>
              <div style={{ textAlign: "center" }}>Bootstrap</div>
            </div>
            <div
              data-aos-offset="-550"
              data-aos="fade-left"
              data-aos-delay="850"
            >
              <img className="imagen" src={sass}></img>
              <div style={{ textAlign: "center" }}>Sass</div>
            </div>

            {/* <div
              data-aos-offset="-550"
              data-aos="fade-left"
              data-aos-delay="900"
            >
              <img className="imagen imagenround" src={axi}></img>
              <div style={{ textAlign: "center" }}>Axios</div>
            </div> */}
            <div
              data-aos-offset="-550"
              data-aos="fade-left"
              data-aos-delay="950"
            >
              <img className="imagen" src={red}></img>
              <div style={{ textAlign: "center" }}>Redux</div>
            </div>
            {/* <div
              data-aos-offset="-550"
              data-aos="fade-left"
              data-aos-delay="1000"
            >
              <img className="imagenround" src={reactrouterl}></img>
              <div style={{ textAlign: "center" }}>React Router</div>
            </div> */}
            {/* <div><img className='imagenround' src={reactrouterl}></img><div style={{textAlign:"center"}}>React Router</div></div> */}
            <div
              data-aos-offset="-550"
              data-aos="fade-left"
              data-aos-delay="1050"
            >
              <img className="imagen" src={git}></img>
              <div style={{ textAlign: "center" }}>Git</div>
            </div>
          </div>
          <br></br>

          <div
            style={{
              width: "100vw",
              //        display: "flex",
              // flexWrap: "wrap",
              // justifyContent: "center",
              // alignItems: "center"
            }}
          >
            <div
              style={{ fontSize: "1.5em", width: "100%", textAlign: "center" }}
            >
              <span style={{ fontSize: "1.3em" }}></span>
              Back end & others:
            </div>
            <br></br>

            <div
              style={{ gap: "10px" }}
              className="d-flex flex-wrap justify-content-center"
            >
              <div
                data-aos-offset="-600"
                data-aos="fade-right"
                data-aos-delay="1050"
              >
                <div
                  style={{
                    width: "90px",
                    height: "90px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    style={{ width: "84px", borderRadius: "10px" }}
                    className="imagen"
                    src={mon}
                  ></img>
                </div>
                <div style={{ textAlign: "center" }}>Mongodb</div>
              </div>
              <div
                data-aos-offset="-600"
                data-aos="fade-right"
                data-aos-delay="1150"
              >
                <div
                  style={{
                    width: "90px",
                    height: "90px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    style={{ width: "84px" }}
                    className="imagen"
                    src={node}
                  ></img>
                </div>
                <div style={{ textAlign: "center" }}>Node</div>
              </div>
              <div
                data-aos-offset="-600"
                data-aos="fade-right"
                data-aos-delay="1250"
              >
                <div
                  style={{
                    width: "90px",
                    height: "90px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    style={{ width: "84px", borderRadius: "10px" }}
                    className="imagen"
                    src={ex}
                  ></img>
                </div>
                <div style={{ textAlign: "center" }}>Express</div>
              </div>
              <div
                data-aos-offset="-600"
                data-aos="fade-right"
                data-aos-delay="1350"
              >
                <div
                  style={{
                    width: "90px",
                    height: "90px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    style={{ width: "180px" }}
                    className="imagen"
                    src={graph}
                  ></img>
                </div>
                <div style={{ textAlign: "center" }}>GraphQL</div>
              </div>
              <div
                data-aos-offset="-600"
                data-aos="fade-right"
                data-aos-delay="1450"
              >
                <img className="imagen" src={mog}></img>
                <div style={{ textAlign: "center" }}>Mongoose</div>
              </div>
              <div
                data-aos-offset="-600"
                data-aos="fade-right"
                data-aos-delay="1550"
              >
                <img className="imagenround" src={reactl}></img>
                <div style={{ textAlign: "center" }}>React Native</div>
              </div>
            </div>
          </div>
        </div>
        <div className="arrow-up3"></div>

        <div className="Myprojects">
          <div style={{ height: "9vh" }}></div>
          <span style={{ fontSize: "1.95em" }}>
            Some of my <u>projects</u>:<br></br>
          </span>
          <br></br>
          <a
            style={{ textDecoration: "none" }}
            target="_blank"
            href={"https://github.com/ErickRamses/portafolio"}
          >
            {" "}
            <Button
              style={{ marginBottom: "7px", fontSize: "1.6rem" }}
              variant="dark"
            >
              {" "}
              code of this website
            </Button>
          </a>
          <br></br>
          <br></br>
          <div
            style={{ gap: "10px" }}
            className="d-flex flex-wrap justify-content-center"
          >
            <div
              data-aos="fade-up"
              data-aos-offset="-650"
              data-aos-duration="1000"
            >
              <Projects
                video={grav}
                video2={grav2}
                video3={grav3}
                title={"Gravity simulator"}
                info={
                  " with features like mass, time warp and more, i build this to get better at javascript i used classes for suns and planets and an array for trajectories it is a complex project that got me studying trigonometry it was hard and fun to build and debug"
                }
                live={"/Grav"}
                code={"https://github.com/ErickRamses/grav"}
              ></Projects>
            </div>
            <div
              data-aos="fade-up"
              data-aos-offset="-650"
              data-aos-duration="1000"
            >
              <Projects
                video={sing}
                video2={sing2}
                video3={sing3}
                title={"MERN Budgets"}
                info={
                  "a fullstack aplication where you can make budgets and save it if you login , made with the mern stack ,the server is a rest Api that uses authentication to receive and update information ,backend is hosted in heroku"
                }
                live={"https://beamish-paletas-1906d1.netlify.app/"}
                code={"https://github.com/ErickRamses/client"}
                two={true}
              ></Projects>
            </div>
            <div
              data-aos="fade-up"
              data-aos-offset="-650"
              data-aos-duration="1000"
            >
              <Projects
                video={ApiCountries}
                video2={ApiCountries2}
                video3={ApiCountries3}
                title={"Countries Api"}
                info={
                  "i build this website with react and react router it fetches from an api and displays the information in an organized way you can search by name and filter by region also you can click on a country to see more detailed information on a separate page i used local storage and useEfect to load faster for filter i used 2 useState "
                }
                live={"/ApiCountries"}
                code={
                  "https://github.com/ErickRamses/rest-countries-api-with-color-theme-switcher-master"
                }
              ></Projects>
            </div>
            <div
              data-aos="fade-up"
              data-aos-offset="-650"
              data-aos-duration="1000"
            >
              <Projects
                video={sp1}
                video2={sp2}
                video3={sp3}
                title={"Space tourism"}
                info={
                  "a landing website to get information about space tourism,i build this because i thought it was an interesting topic and i wanted to challenge my self to do it as fast as posible , this time i used scroll() to navigate"
                }
                live={"/space"}
                code={"https://github.com/ErickRamses/space-tourism"}
              ></Projects>
            </div>
            <div
              data-aos="fade-up"
              data-aos-offset="-650"
              data-aos-duration="1000"
            >
              <Projects
                onebutton={true}
                marginbot="58%"
                video={gam1}
                video2={gam2}
                video3={gam3}
                title={"Crack The X Code -Math Riddles"}
                info={
                  "Mobile app: Math Riddles Math game, The purpose is fun so every level has a new 'mechanic'"
                }
                live={"/Grav"}
                code={
                  "https://play.google.com/store/apps/details?id=com.erick_3000.mathP"
                }
              ></Projects>
            </div>
            <div
              data-aos="fade-up"
              data-aos-offset="-650"
              data-aos-duration="1000"
            >
              <Projects
                marginbot="58%"
                onebutton={true}
                video={pomo1}
                video2={pomo2}
                video3={pomo3}
                title={"Advanced Pomodoro Machine"}
                info={
                  "Mobile app: pomodor tecnique is a good way to divide time in blocks but these block are inflexible an ocasionate problems like stoping your inertia, over working and does not allow you to use time as efficient as you could, this app solve those problems and more"
                }
                live={"/Grav"}
                code={
                  "https://play.google.com/store/apps/details?id=com.erick_3000.pomo2"
                }
              ></Projects>
            </div>
            {/* <div
              data-aos="fade-up"
              data-aos-offset="-650"
              data-aos-duration="1000"
            >
              <Projects
                video={name1}
                video2={name2}
                video3={name3}
                title={"Name Api"}
                info={
                  " i build this website with html css javascript and sass as you can see you can write a name and get a probability of where is from i get this information from a public API also you can toggle dark mode i did it by changing the values of css variables "
                }
                live={"/Name"}
                code={"https://github.com/ErickRamses/name"}
              ></Projects>
            </div>
            <div
              data-aos="fade-up"
              data-aos-offset="-650"
              data-aos-duration="1000"
            >
              <Projects
                video={p1}
                video2={p2}
                video3={p3}
                title={"PingPong"}
                info={
                  "a game of pingpong with an AI with dynamic difficulty made with html css javascript you can also play 2 players mode , to make dificulty dynamic , the reaction time of the AI is modified "
                }
                live={"/PingPong"}
                code={"https://github.com/ErickRamses/pingpong"}
              ></Projects>
            </div> */}
          </div>
          <br></br>

          <a
            style={{ textDecoration: "none" }}
            target="_blank"
            href={
              "https://www.linkedin.com/in/erick-ramses-gonzalez-torres-16bb9b246/"
            }
          >
            {" "}
            <Button
              style={{ marginLeft: "5px", width: "150px", height: "50px" }}
              variant="dark"
            >
              Linkedin
            </Button>
          </a>
          <a
            style={{ textDecoration: "none" }}
            target="_blank"
            href={"https://github.com/ErickRamses"}
          >
            {" "}
            <Button
              style={{ marginLeft: "5px", width: "150px", height: "50px" }}
              variant="dark"
            >
              Github
            </Button>
          </a>

          <div className="arrow-up4"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
