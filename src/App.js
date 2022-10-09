
import './styles/main.css';
import { Button, Container, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import html5 from "./imagen/html5.png"
import css3 from "./imagen/css3.png"
import javas from "./imagen/javascript.png"
import reactl from "./imagen/react.png"
import reactrouterl from "./imagen/twitterimage.jpg"
import bootstrap from "./imagen/bootstrap-icon.png"
import sass from "./imagen/sass-icon.png"
import git from "./imagen/git-icon.png"
import ts from "./imagen/ts.png"
import node from "./imagen/node.png"
import ex from "./imagen/ex.png"
import mon from "./imagen/mon.png"
import axi from "./imagen/axios.png"
import red from "./imagen/redux.png"
import mog from "./imagen/mog.png"
import next from "./imagen/nextjs.png"
import graph from "./imagen/GraphQL.png"


import code from "./imagen/pexels-pixabay-270366 (2) (2).jpg"
import Canvas from './componets/Canvas';
import Nav from './componets/Nav';

//import Projects from './componets/Projects';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import Projects from './componets/Projects';
import sing from "./imagen/sing.png"
import sing2 from "./imagen/sing2.png"
import sing3 from "./imagen/sing3.png"


import grav from "./imagen/gravity.png"
import grav2 from "./imagen/gravity2.png"
import grav3 from "./imagen/gravity3.png"

import ApiCountries from "./imagen/count1.png"
import ApiCountries2 from "./imagen/count2.png"  
import ApiCountries3 from "./imagen/count3.png"  

import name1 from "./imagen/Name1.png"
import name2 from "./imagen/name2p.png"
import name3 from "./imagen/name 3.png"

import p1 from "./imagen/p1.png"
import p2 from "./imagen/p2.png"
import p3 from "./imagen/p3.png"

import sp1 from "./imagen/sp1_1.webp"
import sp2 from "./imagen/sp2_1.webp"
import sp3 from "./imagen/sp3_1.webp"
import { useEffect, useRef } from 'react';
function App() {
  let navigate = useNavigate();
  let loade=useRef()
  let Header=useRef()
  let Header1=useRef()
  let Header2=useRef()
  let Header3=useRef()

  let loaded=false;
  useEffect(()=>{
    window.onscroll = function () { window.scrollTo(0, 0); };
    window.scrollTo(0, 0)

    window.addEventListener("load",()=>{
      if(loaded)return;
    loaded=true

      window.onscroll ="" 
      window.scrollTo(0, 0)
      setTimeout(()=>{      loade.current.remove()
        window.scrollTo(0, 0)
        Header.current.style.animationName = "example";
        Header1.current.style.animationName = "example";
        Header2.current.style.animationName = "example";
        Header3.current.style.animationName = "example";

      },150)
      })


  },[])
  setTimeout(()=>{ 
    if(loaded)return;     
    window.scrollTo(0, 0)
    window.onscroll ="" 
    loaded=true
    setTimeout(()=>{
    loade.current.remove()
    Header.current.style.animationName = "example";
    Header1.current.style.animationName = "example";
    Header2.current.style.animationName = "example";
    Header3.current.style.animationName = "example";
    },155)
  },1850)
  //;

  return (
    //title  skills canvas 🙏  navar 
    //lets add planets but first canvas in other componet lol
    //fix proyects then video and description
    <div >

       <div ref={loade} className="loader-wrapper">
      <span className="loader"><span className="loader-inner"></span></span>
    </div>
      <div className="App">
        <div style={{padding:"20px",zIndex:"1000"}}>
          
          <div ref={Header} className='Header'>Hi, my name is </div>
          <div ref={Header1} className='Header1'>Erick Ramses</div>
          <div ref={Header3} className='Header3'>Diligent problem solver &</div>
          <div ref={Header2} className='Header2'>Web developer</div>
        </div>
          <div className='cont'>
            <div  className='Back' ></div>  

          </div>


      </div>
        <Canvas></Canvas>
        
      <div className='arrow-up'></div>
      <div className='body'>
      <br></br>
       
        <div className='Aboutme'>
          <div style={{maxWidth:"700px"}}>

          <span style={{fontSize:"1.3em"}}>
          <u>About</u> me:<br></br>
          </span>
          Hello, I'm Erick Ramses, a self-taught web developer looking for an opportunity to show my potential , i love solving problems and if it is difficult, the better :) i normally do it for hours that's why i like strategy games I'm learning new things every day and im expanding my skill set by learning backend
          </div>
         <img style={{width:"90%",maxWidth:"800px",borderRadius:"7px"}} loading={"lazy"} src={code}></img>
        </div>
      <div className='arrow-up2'></div>
        
        <div className='Skills'>
            <div style={{fontSize:"1.5rem",width:"100%"}}>
          <span style={{fontSize:"1.3em"}}>
              My current <u>skills</u>:<br></br>
          </span>
            <span style={{fontSize:".8em"}}>
            {/* I am proficient in these technologies. I can solve most problems. If I'm stuck in a situation, I can research the solution, and if I don't find it, it's a nice challenge to solve.    */}
            <div style={{display:"flex",justifyContent:"center"}}>
            <ul style={{textAlign:"left"}}>
              <li><b>Responsive: </b>understanding of UI/UX best practices and responsive design</li>
              {/* <li>excellent debugging skills with dev tools and coding best practices</li> */}
              <li><b>Fast: </b>performance such as optimizing images and minifying CSS and JavaScript</li>
              <li><b>Dynamic: </b>websites can be much more interesting , i love making pages come to life.</li>

            </ul>
            </div>

            </span>       
            </div>
            
            <br></br>
            <br></br>

          <div style={{gap:"10px"}} className='d-flex flex-wrap justify-content-center'>
            {/* <div><img className='imagen' src={html5}></img><div style={{textAlign:"center"}}>html5</div></div>
            <div><img className='imagen' src={css3}></img><div style={{textAlign:"center"}}>Css3</div></div> */}
            <div><div style={{width:"90px",height:"90px",display:"flex",justifyContent:"center",alignItems:"center"}}><img style={{width:"84px",borderRadius:"10px"}} className='imagen' src={mon}></img></div><div style={{textAlign:"center"}}>Mongodb</div></div>
            <div><div style={{width:"90px",height:"90px",display:"flex",justifyContent:"center",alignItems:"center"}}><img style={{width:"84px",borderRadius:"10px"}} className='imagen' src={ex}></img></div><div style={{textAlign:"center"}}>Express</div></div>
            <div><img className='imagenround' src={reactl}></img><div style={{textAlign:"center"}}>React</div></div>
            <div><div style={{width:"90px",height:"90px",display:"flex",justifyContent:"center",alignItems:"center"}}><img style={{width:"84px"}} className='imagen' src={node}></img></div><div style={{textAlign:"center"}}>Node</div></div>
            <div><img className='imagen' src={next}></img><div style={{textAlign:"center"}}>Next</div></div>


            <div><img className='imagen' src={bootstrap}></img><div style={{textAlign:"center"}}>Bootstrap</div></div>
            <div><img className='imagen' src={sass}></img><div style={{textAlign:"center"}}>Sass</div></div>
            <div><img className='imagenround' src={javas}></img><div style={{textAlign:"center"}}>JavaScript (ES6+)</div></div>
           
            <div><div style={{width:"90px",height:"90px",display:"flex",justifyContent:"center",alignItems:"center"}}><img style={{width:"84px"}} className='imagen' src={ts}></img></div><div style={{textAlign:"center"}}>Typescript</div></div>


            {/* <div><img className='imagenround' src={reactrouterl}></img><div style={{textAlign:"center"}}>React Router</div></div> */}
            <div><img className='imagen' src={git}></img><div style={{textAlign:"center"}}>Git</div></div>     
          </div >
          <br></br>

          <div style={{width:"100vw", 
    //        display: "flex",
    // flexWrap: "wrap",
    // justifyContent: "center",
    // alignItems: "center"
  }}>
          <div style={{fontSize:"1.5em",width:"100%",textAlign:"center",}}>
          <span style={{fontSize:"1.3em"}}>
          </span>
          other technologies
            </div>
          <br></br>
            
            <div style={{gap:"10px"}} className='d-flex flex-wrap justify-content-center'>
            

  <div><div style={{width:"90px",height:"90px",display:"flex",justifyContent:"center",alignItems:"center"}}><img style={{width:"180px"}} className='imagen' src={graph}></img></div><div style={{textAlign:"center"}}>GraphQL</div></div>
             <div><img className='imagenround' src={reactrouterl}></img><div style={{textAlign:"center"}}>React Router</div></div> 
            <div><img className='imagen imagenround' src={axi}></img><div style={{textAlign:"center"}}>Axios</div></div>     
            <div><img className='imagen' src={red}></img><div style={{textAlign:"center"}}>Redux</div></div>     
            <div><img className='imagen' src={mog}></img><div style={{textAlign:"center"}}>Mongoose</div></div>     
             
          </div>          
        </div></div>
      <div className='arrow-up3'></div>

        <div className='Myprojects'>
        <div style={{height:"9vh"}}></div>
        <span style={{fontSize:"1.95em"}}>
        Some of my <u>projects</u>:<br></br>
          </span>
                     <br></br>
          <a style={{textDecoration:"none"}} target="_blank" href={"https://github.com/ErickRamses/portafolio"}> <Button style={{marginBottom:"7px",fontSize:"1.6rem"}} variant="dark"> code of this website</Button></a>
          <br></br>
          <br></br>
          <div style={{gap:"10px" }} className='d-flex flex-wrap justify-content-center'>
           <Projects video={grav} video2={grav2} video3={grav3} title={"Gravity simulator"} info={" with features like mass, time warp and more, i build this to get better at javascript i used classes for suns and planets and an array for trajectories it is a complex project that got me studying trigonometry it was hard and fun to build and debug"} live={"/Grav"} code={"https://github.com/ErickRamses/grav"}></Projects>

           <Projects video={sing} video2={sing2} video3={sing3} title={"MERN Budgets"} info={"a fullstack aplication where you can make budgets and save it if you login , made with the mern stack ,the server is a rest Api that uses authentication to receive and update information ,backend is hosted in heroku"} live={"https://beamish-paletas-1906d1.netlify.app/"} code={"https://github.com/ErickRamses/client"}  two={true}></Projects>

           <Projects video={ApiCountries} video2={ApiCountries2} video3={ApiCountries3} title={"Countries Api"} info={"i build this website with react and react router it fetches from an api and displays the information in an organized way you can search by name and filter by region also you can click on a country to see more detailed information on a separate page i used local storage and useEfect to load faster for filter i used 2 useState "} live={"/ApiCountries"} code={"https://github.com/ErickRamses/rest-countries-api-with-color-theme-switcher-master"}></Projects>  

           <Projects video={sp1} video2={sp2} video3={sp3} title={"Space tourism"} info={"a landing website to get information about space tourism,i build this because i thought it was an interesting topic and i wanted to challenge my self to do it as fast as posible , this time i used scroll() to navigate"} live={"/space"} code={"https://github.com/ErickRamses/space-tourism"}></Projects>  

           <Projects video={name1} video2={name2} video3={name3} title={"Name Api"} info={" i build this website with html css javascript and sass as you can see you can write a name and get a probability of where is from i get this information from a public API also you can toggle dark mode i did it by changing the values of css variables "} live={"/Name"} code={"https://github.com/ErickRamses/name"}></Projects>  

           <Projects video={p1} video2={p2} video3={p3} title={"PingPong"} info={"a game of pingpong with an AI with dynamic difficulty made with html css javascript you can also play 2 players mode , to make dificulty dynamic , the reaction time of the AI is modified "} live={"/PingPong"} code={"https://github.com/ErickRamses/pingpong"}></Projects> 
          
           

          </div>
          <br></br>
        

<a style={{textDecoration:"none"}} target="_blank" href={"https://www.linkedin.com/in/erick-ramses-gonzalez-torres-16bb9b246/"}> <Button style={{marginLeft:"5px",width:"150px",height:"50px"}} variant="dark">Linkedin</Button></a>
<a style={{textDecoration:"none",}} target="_blank" href={"https://github.com/ErickRamses"}> <Button style={{marginLeft:"5px",width:"150px",height:"50px"}} variant="dark">Github</Button></a>
  
      <div className='arrow-up4'></div>
        </div>
        
        </div>
      </div>
    
  );
}

export default App;
