import React from 'react'
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';


const Projects = ({video,video2,video3,title,info,live,code}) => {
  return (
    <div style={{maxWidth:"700px",background:"hsl(220, 50%, 20%)",padding:"5px",borderRadius:"10px"}}>
      <Carousel style={{height:"320px"}}>
    <Carousel.Item interval={100000000}>
      <img
        className="d-block w-100"
        src={video}
        alt="First slide"
      />
      
    </Carousel.Item>
    <Carousel.Item interval={100000000}>
      <img
        className="d-block w-100"
        src={video2}
        alt="Second slide"
      />
      
    </Carousel.Item >
    <Carousel.Item interval={100000000}>
      <img
        className="d-block w-100"
        src={video3}
        alt="Third slide"
      />
      
    </Carousel.Item>
  </Carousel> <div style={{textAlign:"center",marginTop:"7px"}}><div style={{fontSize:"1.1em",maxWidth:"1000px",height:"125px"}}>
    <span style={{fontSize:"1.1em"}}>
    {title}  <br></br>
    </span>
    {info}
      </div>
      
      <div style={{textAlign:"left",paddingLeft:"10px"}}>
      <Link target="_blank" to={live}> <Button variant="primary"> See live</Button></Link>

      <a style={{textDecoration:"none"}} target="_blank" href={code}> <Button style={{marginLeft:"5px"}} variant="primary"> code</Button></a>
        
       
      
      </div>
      <br></br>
      
</div></div>
  )
}

export default Projects