
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
          Hello i'm Erick Ramses a self taught web developer looking for an opportunity to show my potential
          ,i love solving problems and if it is difficult, the better :) I'm learning new things every day and  im expanding my skill set by learning Nodejs & Mongodb
          </div>
         <img style={{width:"90%",maxWidth:"800px"}} src={code}></img>
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
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <span style={{fontSize:"1.95em"}}>
        Some of my <u>projects</u>:<br></br>
          </span>
                     <br></br>
          <div style={{gap:"10px" }} className='d-flex flex-wrap justify-content-center'>
           
            <div style={{background:"black",maxWidth:"500px"}}><img className='video' src={html5}></img><div style={{textAlign:"center"}}><div style={{fontSize:"1.1em",maxWidth:"1000px"}}>
          <span style={{fontSize:"1.1em"}}>
          Gravity simulator  <br></br>
          </span>
          with features like mass,time warp and more, i buid this to get better at javascript i used classes for suns and planets and an array for trajetories it is a complex proyect that got me studing trigonometry it was hard and fun to build 
          
            </div>
            <div style={{textAlign:"left",paddingLeft:"10px"}}>
            <Link target="_blank" to="/Grav"> <Button variant="outline-primary"> See live</Button></Link>

            <a style={{textDecoration:"none"}} target="_blank" href="https://github.com/ErickRamses/grav"> <Button style={{marginLeft:"5px"}} variant="outline-primary"> code</Button></a>
              
              
            
            </div>
            <br></br>
</div></div>

            
            <div style={{background:"gray"}}><img className='video' src={html5}></img><div style={{textAlign:"center"}}><Link  target="_blank"  to="/ApiCountries">2do</Link>video istead not refind an here description</div></div>

            <div style={{background:"gray"}}><img className='video' src={html5}></img><div style={{textAlign:"center"}}><Link  target="_blank" to="/Name">3ro</Link>video istead not refind an here description</div></div>

            <div style={{background:"gray"}}><img className='video' src={html5}></img><div style={{textAlign:"center"}}><Link  target="_blank" to="/PingPong">4ro</Link>video istead not refind an here description</div></div>

            <div style={{background:"gray"}}><img className='video' src={html5}></img><div style={{textAlign:"center"}}>video istead not refind an here description</div></div>
            
          </div>
          
        </div>
        </div>
      </div>
    
  );
}

export default App;
