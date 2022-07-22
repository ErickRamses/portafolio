import React from 'react'
import "./style.css"
import { useRef } from 'react'

import { useEffect } from 'react'
const Grav = () => {
    let pausado=false
    let planets=[];
    let tracks=[];
    let paitners=[];
    let suns=[];
    function reset(){
       
        for(let i of planets+1){
    
            planets.pop()
        }
    
        for(let i of suns+1){
    
            suns.pop()
        }
    
    }
    function pause(){
        if(pausado){
            //time =setInterval(space,1000/60)
            pausado=false
            //just pause fisics put not paint maibe i can do this witour clearing interval
        }
        else{
            //clearInterval(time)
            
            pausado=true
        }
    }
    useEffect(()=>{
        var context = canvaRef.current.getContext('2d');
canvaRef.current.height=window.innerHeight;
canvaRef.current.width=window.innerWidth;

let width = canvaRef.current.width;
let height = canvaRef.current.height;    

window.addEventListener('resize',()=>{
    canvaRef.current.height=window.innerHeight;
    canvaRef.current.width=window.innerWidth;
    
    //let width = canvaRef.current.width;
    //let height = canvaRef.current.height;    
    
   
    
})




let numv=0
    let down ;
    let secondX
    let secondY
    let firstX;
    let fisrtY;
    let scrolled =false;
window.addEventListener("scroll",()=>{
     scrolled =true;
        
        //let width = canvaRef.current.width;
        //let height = canvaRef.current.height;    
        
       
        
    })
    
canvaRef.current.addEventListener('mousedown',make)




context.strokeStyle = "purple"; 
context.lineWidth = 10

//add colitions and raduosu then click then resise then  shoot then  mass then bug resie then mouse over? thne shot ilustration then cancel thrn reset then stop time then coalitin plus then direction then beuty then cancel? then faster then lock~`then stats?? then change stats

//to coalitions we can add a distance or check if cordenates matches
//chek the bug of pause
//slow mo?
//locked
//add scroll
let g=1;


let mass = 250;




let time =setInterval(space,1000/60)
//divie planets and suns
function space(){
    painta()

    for(let i=0;i<document.getElementById("speed").value;i++){
    for(let i=0;i<planets.length;i++){
        planets[i].begin()       
    }
    for(let i=0;i<tracks.length;i++){

        tracks[i].begin()
        tracks[i].begin()
        tracks[i].begin()
        tracks[i].begin()
        tracks[i].begin()
        tracks[i].begin()
        tracks[i].begin()
        tracks[i].begin()
        tracks[i].begin()
        tracks[i].begin()
        tracks[i].begin()
        
              
    }


    for(let i=0;i<suns.length;i++){
        if(suns[i].alive){
            suns[i].begin()

        }
    }
    if(!pausado){
        
        for(let i=0;i<suns.length;i++){
            if(suns[i].alive){
            suns[i].move()
            }
        }
    }
}
}
    //here put movement?

    //display()


// distance()
// force()
//acelerationY()
// acelerationX()
// movement()
//knowing distance
class sun{
    constructor(key,massa,x1,y1,vx,vy){
        this.key=key
        this.massa=massa
        this.x1=x1
        this.y1=y1
        this.vx=vx
        this.vy=vy
        this.alive=true
        this.radio=Math.log2(Math.abs(massa)+2)
        
        //here logaritmic

        //shall change names and just doit leng-1
        
    }
    begin(){
        //orden might be important
        this.minipaint()
        if(!pausado){
            this.movement()
            //i guess this might be a problem because of timing but so far i dont se anithing wrong
        }
    }
    distance(z){
        
        let dista =Math.sqrt((((suns[z].x1-this.x1)*(suns[z].x1-this.x1))+((suns[z].y1-this.y1)*(suns[z].y1-this.y1))))
        if (dista<=suns[z].radio){
           //console.log("colition")
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
     //   return Math.sqrt((vx**2)+(vy**2))  
    }
    minipaint(){
        if(this.massa<0){
            context.beginPath();
            //context.strokeStyle="yellow";
            // context.moveTo(this.x1,this.y1);
            // context.lineTo(this.x1+3,this.y1+3);
            context.fillStyle = 'white';
            context.arc(this.x1, this.y1, this.radio, 0, 2 * Math.PI,false);
            context.fill()
        }
        else{

            context.beginPath();
            //context.strokeStyle="yellow";
            // context.moveTo(this.x1,this.y1);
            // context.lineTo(this.x1+3,this.y1+3);
            context.arc(this.x1, this.y1, this.radio, 0, 2 * Math.PI);
            context.fillStyle = 'yellow';
            context.fill()
            //context.stroke();
            
        }
    }
    collision(){
        if(this.x1>canvaRef.current.width+1000||this.x1<-1000||this.y1<-1000||this.y1>canvaRef.current.height+1000){
            this.alive=false
            this.massa=0;
            
        }
    }
    
}

//  for(let i=0;suns.length<3;i++){
//     suns[i]=new sun(i,200,350+(-i*50),350+(-i*50),1,i)
//  }

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
        if(!pausado){
        this.movement()

        }
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
        return (suns[z].massa/(this.distance(z)**2))    
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
       // return Math.sqrt((vx**2)+(vy**2))  
    }
    collision(){
        if(this.x2>canvaRef.current.width+1000||this.x2<-1000||this.y2<-1000||this.y2>canvaRef.current.height+1000){
            this.alive=false
            //console.log("nuv")
        }
    }


    minipaint(){
        context.beginPath();
        context.arc(this.x2, this.y2, 3, 0, 2 * Math.PI);
        context.fillStyle = 'purple';
        context.fill()
        
    }
    
}

class trak{
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
        //just tring
        this.movement()
        this.movement()
        this.movement()
        this.movement()
        this.movement()
        this.movement()
        this.movement()
        this.movement()
        this.movement()
        this.movement()
        this.movement()
        this.movement()
        this.movement()
        this.movement()
        this.movement()
        this.movement()
        this.movement()
        this.movement()
        this.movement()
        this.movement()
        this.movement()
        this.movement()
        this.movement()
        this.movement()
        this.movement()
        this.movement()
        this.movement()
        this.movement()
        this.movement()
        this.movement()
        this.movement()
        this.movement()
       
       // paitners.push(this.x2)
       // paitners.push(this.y2)
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
        return (suns[z].massa/(this.distance(z)**2))    
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
      //  return Math.sqrt((vx**2)+(vy**2))  
    }
    collision(){
        if(this.x2>canvaRef.current.width+1000||this.x2<-1000||this.y2<-1000||this.y2>canvaRef.current.height+1000){
            this.alive=false
            //console.log("nuv")
        }
    }


    minipaint(){
        context.beginPath();
       // for(let p=0;p==paitners)
        context.arc(this.x2, this.y2, 3, 0, 2 * Math.PI);
        context.fillStyle = 'gray';
        context.fill()
        
    }
    
}



for(let i=0;i<100;i++){
    planets[i]=new planet(i,100,(height-150)+i,0,0)
}
for(let i=0;i<50;i++){
    planets.push(new planet(i,100+i,(height-50)-i,0,0))
    planets.push(new planet(i,100-i,(height-50)-i,0,0))
    planets.push(new planet(i,400+i,10*i,0,0))
    
    
}
// for(let i=0;planets.length<100;i++){
//     planets[i]=new planet(i,100,(height-200)+i,0,0)
// }


 

suns[0]=new sun(0,20,200,200,.4,0)
suns[1]=new sun(1,20,200,250,0,0)
suns[2]=new sun(2,20,300,250,0,0)

// suns[1]=new sun(1,200,600,400,-.98,.1)
// //suns[2]=new sun(2,190,200,500,0,-.91)
// //suns[3]=new sun(3,190,200,300,.8,.9)
// //suns[2]=new sun(2,200,350,350,1,0)
canvaRef.current.addEventListener("touchmove",(e)=>
{
   if (!down){return} 
   secondX= e.offsetX
   secondY=e.offsetY
   console.log(e)

    for(let x=0;x<numv;x++){
     tracks.pop()
 }
     numv=0
})
canvaRef.current.addEventListener('mousemove',(e)=>
{
   if (!down){return} 
   secondX= e.offsetX
   secondY=e.offsetY

    for(let x=0;x<numv;x++){
     tracks.pop()
 }
     numv=0
}
)
function make(e){
    down = true
    
    
     
     firstX=e.offsetX
     fisrtY=e.offsetY
    secondX= e.offsetX
   secondY=e.offsetY
    //distance == force and cosine sin==multiplier
    
    // let timeor =setInterval(()=>{
    //             context.beginPath();
    //             context.moveTo(firstX,fisrtY);
    //             context.lineTo(secondX,secondY);    
    //             context.stroke();
    // },1000/60)
    
    
}

canvaRef.current.addEventListener("mouseup",()=>{
    if (!down){return}
    down=false
    
     for(let x=0;x<numv;x++){
         tracks.pop()
     }
         numv=0
    

    if(document.getElementById("chac").checked){
        suns.push(new sun(suns.length,document.getElementById("masa").value,firstX,fisrtY,(firstX-secondX)/50,(fisrtY-secondY)/50))
           }
    else{
        planets.push(new planet('l',firstX,fisrtY,(firstX-secondX)/50,(fisrtY-secondY)/50))
    }
})
canvaRef.current.addEventListener("mouseleave",()=>{
    if (!down){return}
     down=false
     for(let x=0;x<numv;x++){
        tracks.pop()
    }
        numv=0
   

 
})
canvaRef.current.addEventListener("mousedown",(e)=>{
    

    
})
canvaRef.current.onselectstart = function () { return false; }


















function painta(){
    context.fillStyle ="black"
    context.fillRect(0,0,canvaRef.current.width,canvaRef.current.height)
      
     if(!scrolled){

         context.font = "30px Arial";
         context.fillStyle ="red"
         context.fillText("Scroll",65,height-10);
    context.fillStyle ="black"

     }
    if(down){
        context.beginPath();
        context.lineWidth=5;
        context.strokeStyle="red"
        context.moveTo(firstX,fisrtY);
        context.lineTo(secondX,secondY);    
        context.stroke();

        
        
        if(document.getElementById("chac").checked){
            context.beginPath();
            context.arc(firstX, fisrtY, Math.log2(document.getElementById("masa").value), 0, 2 * Math.PI);
            context.fillStyle = 'yellow';
            context.fill()
                if(document.getElementById("trajectory").checked){            
                tracks.push(new trak('l',firstX,fisrtY,(firstX-secondX)/50,(fisrtY-secondY)/50))
                numv++
            }
                if(numv>=10){
                    tracks.shift()
                }
            
        }
        else{
            context.beginPath();
            context.arc(firstX, fisrtY, 3, 0, 2 * Math.PI);
            context.fillStyle = 'purple';
            context.fill()
            
            //planets.push(new planet('l',firstX,fisrtY,(firstX-secondX)/50,(fisrtY-secondY)/50))
            //if(numv<10){
                if(document.getElementById("trajectory").checked){
                tracks.push(new trak('l',firstX,fisrtY,(firstX-secondX)/50,(fisrtY-secondY)/50))
                numv++
                }
                if(numv>=10){
                    tracks.shift()
                }
                //}

        }



        if(document.getElementById("chaca").checked){

            if(document.getElementById("chac").checked){
               
                   }
            else{
                planets.push(new planet('l',firstX,fisrtY,(firstX-secondX)/50,(fisrtY-secondY)/50))
            }
        }
    }
    // context.beginPath();
    // context.moveTo(x1,y1);
    // context.lineTo(x1+1,y1+1);
    
    
    
    // context.stroke();
}

// function display(){
    //     relationY= (altura()/distance()) 
    //     relationX= (anchura()/distance())
    
    

    //    info.innerHTML=` ${x2.toFixed(2)}x ${y2.toFixed(2)}y ${vx.toFixed(2)}vx ${vy.toFixed(2)}vy ${ velox().toFixed(2)}V ${force().toFixed(2)}F ${relationX.toFixed(2)}cosine ${relationY.toFixed(2)}sin `
    // }
    









    },[])
    let canvaRef = useRef(null)
    let trajectoryRef = useRef(null)
    let chacaRef = useRef(null)
    let chacRef = useRef(null)
    let masaRef = useRef(null)
    let resetRef = useRef(null)
    let refsetRef = useRef(null)
    let speedRef = useRef(null)
    
    //console.log("sa")
    //var canvaRef.current = document.getElementById("canva");
    //canvaRef.current.onselectstart = function () { return false; }
    //event.preventDefault();
    //
    //


  return (
    <div>
        <>
  <canvas ref={canvaRef}
    id="canva"
    width="10px"
    height="10px"
    style={{ margin: 0, marginBottom: "-4px", padding: 0 }}
  />
  <div id="info" style={{color:"black"}}>
    <div id="che">
      <label htmlFor="trajectory">trajectory</label>
      <label className="switch">
        <input ref={trajectoryRef} id="trajectory" type="checkbox" defaultChecked={true} />
        <span className="slider round" />
      </label>
    </div>
    <div id="che">
      <label htmlFor="chaca">turret</label>
      <label className="switch">
        <input ref={chacaRef} id="chaca" type="checkbox" />
        <span className="slider round" />
      </label>
    </div>
    <div id="che">
      <label htmlFor="chac">suns</label>
      <label className="switch">
        <input ref={chacRef} id="chac" type="checkbox"  />
        <span className="slider round" />
      </label>
    </div>
    <div>
      <label htmlFor="masa">mass</label>
      <input
      ref={masaRef}
        id="masa"
        type="number"
        defaultValue={20}
        style={{
          position: "relative",
          top: "-3px",
          height: 20,
          width: 100,
          fontSize: 20
        }}
      />
    </div>
    <div>
      <button
      ref={resetRef}
        id="reset"
        onClick={reset}
        style={{ position: "relative", top: "-3px", height: 30, fontSize: 20 }}
      >
        reset
      </button>
    </div>
    <div>
      <button
        ref={refsetRef}
        id="refset"
        onClick={pause}
        style={{ position: "relative", top: "-3px", height: 30, fontSize: 20 }}
      >
        pause
      </button>
    </div>
    <div>
      <label htmlFor="speed">speed</label>
      <input
        ref={speedRef}
        id="speed"
        type="number"
        min={1}
        max={20}
        defaultValue={1}
        style={{
          position: "relative",
          top: "-3px",
          height: 20,
          width: 60,
          fontSize: 20
        }}
      />
    </div>
  </div>
</>


    </div>
  )
}

export default Grav