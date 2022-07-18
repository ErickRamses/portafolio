
import './styles/main.css';
import { Button, Container } from 'react-bootstrap';
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
import code from "./imagen/pexels-pixabay-270366 (2).jpg"
import Canvas from './componets/Canvas';


  
function App() {
  


  return (
    //title  skills canvas 🙏  navar 
    //lets add planets but first canvas in other componet lol
    <div >
      
      <div className="App">
        <div  className='Back' ></div>

        <div style={{padding:"20px",zIndex:"1000"}}>
          <div className='Header'>Hi, my name is //might do it relative and that way over? canvas ???</div>
          <div className='Header1'>Erick Ramses</div>
          <div className='Header3'>passionate problem solver &</div>
          <div className='Header2'>Web developer</div>
        </div>
       

      </div>
        <Canvas></Canvas>
        
      <div className='arrow-up'></div>
      <div className='body'>
      <br></br>
        
        <div className='Aboutme'>
          <div style={{maxWidth:"1000px"}}>

          <u>About</u> me: <br></br>
          Hello i'm Erick Ramses  a Mexican web developer looking for an opportunity to show my potential
          ,i love solving problems and if it is difficult, the better :) I'm learning new things every day and  im expanding my skill set by learning Nodejs & Mongodb
          </div>
          <img style={{width:"50%"}} src={code}></img>
        </div>
      <div className='arrow-up2'></div>
        
        <div className='Skills'>
            <div style={{fontSize:"1.5em"}}>My current <u>skills</u>:</div>
            
            im proficient in these tecnologies i can solve most of the problems if im stcuk in a situation i can investigate the solution and if dont find it its a pleacent challenge  
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
        
            My projects
          <br></br>
          <div style={{gap:"10px" }} className='d-flex flex-wrap justify-content-center'>
            <div style={{background:"gray"}}><img className='video' src={html5}></img><div style={{textAlign:"center"}}>video istead not refind an here description</div></div>
            <div style={{background:"gray"}}><img className='video' src={html5}></img><div style={{textAlign:"center"}}>video istead not refind an here description</div></div>
            <div style={{background:"gray"}}><img className='video' src={html5}></img><div style={{textAlign:"center"}}>video istead not refind an here description</div></div>

          </div>
          
        </div>
        </div>
      </div>
    
  );
}

export default App;
