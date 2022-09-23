import React from 'react'
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';


const Projects = ({video,video2,video3,title,info,live,code,two}) => {
  return (
    <div style={{maxWidth:"700px",background:"hsl(220, 50%, 20%)",padding:"5px",borderRadius:"10px"}}>
      <Carousel>
    <Carousel.Item interval={100000000}>
    <div style={{marginBottom:"48%",height:"0"}}>
     
      <img loading='lazy' style={{marginBottom:"1%"}} 
        className="d-block w-100"
        src={video}
        alt="First slide"
      />
     </div>
    </Carousel.Item>
    <Carousel.Item interval={100000000}>
      <div style={{marginBottom:"48%",height:"0"}}>
      <img 
        className="d-block w-100"
        src={video2}
        alt="Second slide"
      />
      </div>
    </Carousel.Item >
    <Carousel.Item interval={100000000}>
    <div style={{marginBottom:"48%",height:"0"}}>

      <img 
        className="d-block w-100"
        src={video3}
        alt="Third slide"
      />
    </div>  
    </Carousel.Item>
  </Carousel> <div style={{textAlign:"center",marginTop:"8px"}}><div style={{fontSize:"1.1em",maxWidth:"1000px",marginBottom:"calc(350px - 30%)",height:"0px"}}>
    <span style={{fontSize:"1.1em"}}>
    {title}  <br></br>
    </span>
    {info}
      </div>

      
      {two==true ? <>
      
      
        <div style={{textAlign:"left",paddingLeft:"10px",marginTop:"auto"}}>
        <a style={{textDecoration:"none"}} target="_blank" href={live}> <Button variant="primary"> See live</Button></a>

      <a style={{textDecoration:"none"}} target="_blank" href={code}> <Button style={{marginLeft:"5px"}} variant="primary"> code</Button></a>
     
      
     
      
      </div>
      
      </> : <>
      
      
      <div style={{textAlign:"left",paddingLeft:"10px",marginTop:"auto"}}>
      <Link target="_blank" to={live}> <Button variant="primary"> See live</Button></Link>

      <a style={{textDecoration:"none"}} target="_blank" href={code}> <Button style={{marginLeft:"5px"}} variant="primary"> code</Button></a>
    
      
     
      
      </div>
      
      </>}
      
      <br></br>
      
</div></div>
  )
}

export default Projects