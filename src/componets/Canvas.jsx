import React from 'react'
import { useEffect,useRef } from 'react';


let x;
let y;
const Canvas = () => {
    const canvasRef = useRef(null)
  let ctx;
  useEffect(() => {
    ctx = canvasRef.current.getContext('2d')
    canvasRef.current.height=window.innerHeight*1.1;
    canvasRef.current.width=document.body.scrollWidth;
    
    let time =setInterval(space,1000/60)
    // do something here with the canvas
  }, [])
  window.addEventListener('resize',()=>{
    canvasRef.current.height=window.innerHeight*1.1;
    canvasRef.current.width=document.body.scrollWidth;
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);    
})


  function mosemove(e){
    x=e.nativeEvent.offsetX
    y=e.nativeEvent.offsetY
    //console.log(e)
    //ctx.fillStyle = '#000000'
    //ctx.beginPath()
    //ctx.arc(e.clientX,e.clientY , 20, 0, 2*Math.PI)
    //ctx.fill()
   // console.log(e.clientX)
   suns[0].x1=x
   suns[0].y1=y

    //planets[0].x2
    //planets[0].y2

//    console.log(x)
//    console.log(canvasRef.current.width)
//    console.log(y)
//    console.log(canvasRef.current.height)
}
  function space(){
    
   // ctx.beginPath();
   // ctx.arc(x, y, 2, 0, 2 * Math.PI);
    ctx.fillStyle = 'yellow';
    //ctx.fill()
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);    
    
    for(let i=0;i<planets.length;i++){
        planets[i].minipaint()
        planets[i].begin()       
    }
    //clear here

  }
  let suns=[];
  let planets=[];
  class planet{
    constructor(key,x2,y2,vx,vy){
        this.key=key
        this.x2=x2
        this.y2=y2
        this.vx=vx
        this.vy=vy
        this.alive=true
        
    }
    begin(){
        //orden might be important
        if(this.alive){
        this.minipaint()
        this.collision()
        // if(!pausado){
         this.movement()

        // }
        }
    }
    distance(z){
        
       let dista= Math.sqrt((((suns[z].x1-this.x2)*(suns[z].x1-this.x2))+((suns[z].y1-this.y2)*(suns[z].y1-this.y2))))
       if (dista<=suns[z].radio){this.alive=false} 
       return dista
        
        //?       
    }
    force(z){
        //massssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
        return (suns[z].massa/-(this.distance(z)**2))    
    }
    acelerationY(){
        //here sum
         for(let z=0;z<suns.length;z++){
           
            this.relationY= (this.altura(z)/this.distance(z)) //how here sum them all an then multiply
            this.vy+=this.force(z)*this.relationY   
         }
       
        return this.vy

    }
    acelerationX(){
        //here sum here be dragons
        for(let z=0;z<suns.length;z++){
            
            this.relationX= (this.anchura(z)/this.distance(z))
            this.vx+=this.force(z)*(this.relationX*-1)
        }
        return this.vx
        //sum od all
        //then move 

    }
    movement(){
        
        let ty =this.acelerationY()
        let tx =this.acelerationX()
        this.x2+=tx
        this.y2+=ty
    }
    altura(z){
        return suns[z].y1-this.y2
    }
    anchura(z){
        return this.x2-suns[z].x1
    }
    velox(){
        return Math.sqrt((this.vx**2)+(this.vy**2))  
    }
    collision(){
        if(this.x2>canvasRef.current.width+1000||this.x2<-1000||this.y2<-1000||this.y2>canvasRef.current.height+1000){
            this.alive=false
            //console.log("nuv")
        }
    }
    minipaint(){
        ctx.beginPath();
        ctx.arc(this.x2, this.y2, 3, 0, 2 * Math.PI);
        ctx.fillStyle = "yelow";

        if(this.alive){
            
            ctx.fillStyle = 'gray';
        }else{
            ctx.fillStyle = "purple";
         }
        ctx.fill()
        
    }
    
}
class sun{
    constructor(key,massa,x1,y1,vx,vy){
        this.key=key
        this.massa=massa
        this.x1=x1
        this.y1=y1
        this.vx=vx
        this.vy=vy
        this.alive=true
        this.radio=Math.log2(Math.abs(massa)+2)+10
        
        //here logaritmic

        //shall change names and just doit leng-1
        
    }
    begin(){
        //orden might be important
        this.minipaint()
       // if(!pausado){
            this.movement()
            //i guess this might be a problem because of timing but so far i dont se anithing wrong
        //}
    }
    distance(z){
        
        let dista =Math.sqrt((((suns[z].x1-this.x1)*(suns[z].x1-this.x1))+((suns[z].y1-this.y1)*(suns[z].y1-this.y1))))
        if (dista<=suns[z].radio){
           console.log("colition")
            this.alive=false
            this.massa=0
            this.x1=-10000
            suns[z].alive=false
            suns[z].x1=-10000

            suns[z].massa=0
        } 
        return dista
        //change .this
        //?       
    }
    force(z){
        //massssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
        // if is not alive return 0
        return (suns[z].massa/(this.distance(z)**2))    
    }
    acelerationY(){
        //here sum
         for(let z=0;z<suns.length;z++){
            if(z==this.key){ continue;}
            this.relationY= (this.altura(z)/this.distance(z)) //how here sum them all an then multiply
        
            this.vy+=this.force(z)*this.relationY   
         }
       
        return this.vy

    }
    acelerationX(){
        //here sum here be dragons
        for(let z=0;z<suns.length;z++){
            if(z==this.key){ continue;}
            this.relationX= (this.anchura(z)/this.distance(z))
            this.vx+=this.force(z)*(this.relationX*-1)
        }

        return this.vx
        //sum od all
        //then move 

    }
    altura(z){
        return suns[z].y1-this.y1
    }
    anchura(z){
        return this.x1-suns[z].x1
    }
    movement(){
        this.ty =this.acelerationY()
        this.tx =this.acelerationX()
       
       //here lays the problem 
    }
    move(){
        this.x1+=this.tx
        this.y1+=this.ty
        this.collision()
    }
    velox(){
        return Math.sqrt((this.vx**2)+(this.vy**2))  
    }
    minipaint(){
        if(this.massa<0){
            ctx.beginPath();
            //context.strokeStyle="yellow";
            // context.moveTo(this.x1,this.y1);
            // context.lineTo(this.x1+3,this.y1+3);
            ctx.fillStyle = 'white';
            ctx.arc(this.x1, this.y1, this.radio, 0, 2 * Math.PI,false);
            ctx.fill()
        }
        else{

            ctx.beginPath();
            //context.strokeStyle="yellow";
            // context.moveTo(this.x1,this.y1);
            // context.lineTo(this.x1+3,this.y1+3);
            ctx.arc(this.x1, this.y1, this.radio, 0, 2 * Math.PI);
            ctx.fillStyle = 'yellow';
            ctx.fill()
            //context.stroke();
            
        }
    }
    collision(){
        if(this.x1>canvasRef.current.width+1000||this.x1<-1000||this.y1<-1000||this.y1>canvasRef.current.height+1000){
            this.alive=false
            this.massa=0;
            
        }
    }
    
}
suns[0]=new sun(0,125,-2010,200,1,0)
for(let i=0;i<200;i++){
    planets.push(new planet(i,Math.floor(Math.random() * (document.body.scrollWidth - 0) + 0),i*(window.innerHeight/100),0,0))
   // planets.push(new planet(i,100,i*(window.innerHeight/100),0,0))
   //Math.floor(Math.random() * (document.body.scrollWidth - 0 + 1) + 0);
    //console.log(Math.floor(Math.random() * (document.body.scrollWidth - 0) + 0))
    
}


  return (
    <canvas style={{zIndex:"10000", position:"absolute",width:"100%",height:"110vh",zIndex:"100",top:"10px"}} className='canvas' ref={canvasRef} onMouseMove={(e)=>{mosemove(e)}}></canvas>
  )
}

export default Canvas