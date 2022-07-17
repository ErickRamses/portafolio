
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


function App() {


  return (
    //title  skills canvas 🙏  navar 
    <div >
      
      <div className="App">

        <div className='Back'></div>
        <div>
          <div className='Header'>Hi, my name is</div>
          <div className='Header1'>Erick Ramses</div>
          <div className='Header3'>passionate problem solver &</div>
          <div className='Header2'>Web developer</div>
        </div>

       

      </div>
      <div className='body'>
      <div className='arrow-up'></div>
      <br></br>
        <br></br><br></br>
        <br></br><br></br>
        <br></br>
          My current skills:
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
          My projects
        <br></br>
        <div style={{gap:"10px"}} className='d-flex flex-wrap justify-content-center'>
          <div style={{background:"gray"}}><img className='imagen' src={html5}></img><div style={{textAlign:"center"}}>video istead an here description</div></div>
         
        </div>
        
      </div>
      </div>
    
  );
}

export default App;
