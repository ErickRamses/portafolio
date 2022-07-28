
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
import code from "./imagen/pexels-pixabay-270366 (2) (2).jpg"
import Canvas from './componets/Canvas';
import Nav from './componets/Nav';
//import Projects from './componets/Projects';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import grav from "./imagen/gravity.png"
import grav2 from "./imagen/gravity2.png"
import grav3 from "./imagen/gravity3.png"

import Projects from './componets/Projects';
import ApiCountries from "./imagen/count1.png"
import ApiCountries2 from "./imagen/count2.png"  
import ApiCountries3 from "./imagen/count3.png"  

import name1 from "./imagen/Name1.png"
import name2 from "./imagen/name2p.png"
import name3 from "./imagen/name 3.png"

import p1 from "./imagen/p1.png"
import p2 from "./imagen/p2.png"
import p3 from "./imagen/p3.png"
function App() {
  let navigate = useNavigate();


  return (
    //title  skills canvas 🙏  navar 
    //lets add planets but first canvas in other componet lol
    //fix proyects then video and description
    <div >
      
      <div className="App">
        <div style={{padding:"20px",zIndex:"1000"}}>
          <div className='Header'>Hi, my name is </div>
          <div className='Header1'>Erick Ramses</div>
          <div className='Header3'>passionate problem solver &</div>
          <div className='Header2'>Web developer</div>
        </div>
       
          <div  className='Back' ></div>  


      </div>
        <Canvas></Canvas>
        
      <div className='arrow-up'></div>
      <div className='body'>
      <br></br>
       
        <div className='Aboutme'>
          <div style={{maxWidth:"500px"}}>

          <span style={{fontSize:"1.3em"}}>
          <u>About</u> me:<br></br>
          </span>
          Hello, I'm Erick Ramses, a self-taught web developer looking for an opportunity to show my potential , i love solving problems and if it is difficult, the better :) i normally do it for hours that's why i like strategy games I'm learning new things every day and im expanding my skill set by learning Nodejs & Mongodb
          </div>
         <img style={{width:"90%",maxWidth:"800px"}} loading={"lazy"} src={code}></img>
        </div>
      <div className='arrow-up2'></div>
        
        <div className='Skills'>
            <div style={{fontSize:"1.5em",maxWidth:"1000px"}}>
          <span style={{fontSize:"1.3em"}}>
              My current <u>skills</u>:<br></br>
          </span>
            I am proficient in these technologies. I can solve most problems. If I'm stuck in a situation, I can research the solution, and if I don't find it, it's a nice challenge to solve. 
            </div>
            
            <br></br>
            <br></br>

          <div style={{gap:"10px"}} className='d-flex flex-wrap justify-content-center'>
            <div><img className='imagen' src={html5}></img><div style={{textAlign:"center"}}>html5</div></div>
            <div><img className='imagen' src={css3}></img><div style={{textAlign:"center"}}>Css3</div></div>
            <div><img className='imagenround' src={javas}></img><div style={{textAlign:"center"}}>Javascript</div></div>
            <div><img className='imagenround' src={reactl}></img><div style={{textAlign:"center"}}>React</div></div>
            <div><img className='imagenround' src={reactrouterl}></img><div style={{textAlign:"center"}}>React Router</div></div>
            <div><img className='imagen' src={bootstrap}></img><div style={{textAlign:"center"}}>Bootstrap</div></div>
            <div><img className='imagen' src={sass}></img><div style={{textAlign:"center"}}>Sass</div></div>
            <div><img className='imagen' src={git}></img><div style={{textAlign:"center"}}>Git</div></div>               
          </div>
        </div>
      <div className='arrow-up3'></div>

        <div className='Myprojects'>
        <div style={{height:"9vh"}}></div>
        <span style={{fontSize:"1.95em"}}>
        Some of my <u>projects</u>:<br></br>
          </span>
                     <br></br>
          <a style={{textDecoration:"none"}} target="_blank" href={"https://github.com/ErickRamses/portafolio"}> <Button style={{marginBottom:"7px"}} variant="primary"> code of this website</Button></a>
          <div style={{gap:"10px" }} className='d-flex flex-wrap justify-content-center'>
           <Projects video={grav} video2={grav2} video3={grav3} title={"Gravity simulator"} info={" with features like mass, time warp and more, i build this to get better at javascript i used classes for suns and planets and an array for trajectories it is a complex project that got me studying trigonometry it was hard and fun to build"} live={"/Grav"} code={"https://github.com/ErickRamses/grav"}></Projects>

           <Projects video={ApiCountries} video2={ApiCountries2} video3={ApiCountries3} title={"Countries Api"} info={"i build this website with react and react router it fetches from an api and displays the information in an organized way you can search by name and filter by region also you can click on a country to see more detailed information on a separate page"} live={"/ApiCountries"} code={"https://github.com/ErickRamses/rest-countries-api-with-color-theme-switcher-master"}></Projects>  

           <Projects video={name1} video2={name2} video3={name3} title={"Name Api"} info={" i build this website with html css javascript and sass as you can see you can write a name and get a probability of where is from also you can toggle dark mode"} live={"/Name"} code={"https://github.com/ErickRamses/name"}></Projects>  

           <Projects video={p1} video2={p2} video3={p3} title={"PingPong"} info={"a game of pingpong with an AI with dynamic difficulty made with html css javascript you can also play 2 players mode"} live={"/PingPong"} code={"https://github.com/ErickRamses/pingpong"}></Projects> 
          
           

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
